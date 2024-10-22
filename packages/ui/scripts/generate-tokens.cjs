const fs = require('fs');
const path = require('path');

function rgbaToCssVariable(rgba) {
	if (!rgba) return 'transparent';

	const toHex = value => {
		const hex = Math.round(value * 255).toString(16);
		return hex.length === 1 ? '0' + hex : hex;
	};

	const rHex = toHex(rgba.r);
	const gHex = toHex(rgba.g);
	const bHex = toHex(rgba.b);

	if (rgba.a !== undefined && rgba.a < 1) {
		return `rgba(${Math.round(rgba.r * 255)}, ${Math.round(rgba.g * 255)}, ${Math.round(rgba.b * 255)}, ${rgba.a.toFixed(2)})`;
	}

	return `#${rHex}${gHex}${bHex}`;
}

function formatVariableName(name) {
	return `--${name.replace(/\//g, '-')}`;
}

function resolveVariableAlias(variableId, variables, visited = new Set()) {
	if (visited.has(variableId)) {
		throw new Error(`Circular reference detected for variable ${variableId}`);
	}
	visited.add(variableId);

	const variable = variables[variableId];
	if (!variable) {
		throw new Error(`Variable with ID ${variableId} not found`);
	}

	const valuesByMode = variable.valuesByMode;
	if (!valuesByMode || Object.keys(valuesByMode).length === 0) {
		throw new Error(`No values found for variable ${variableId}`);
	}

	const modeId = Object.keys(valuesByMode)[0];
	const value = valuesByMode[modeId];

	if (value && value.type === 'VARIABLE_ALIAS') {
		const resolvedAlias = resolveVariableAlias(value.id, variables, visited);
		return {
			aliasId: value.id,
			value: resolvedAlias.value,
			resolvedType: resolvedAlias.resolvedType,
		};
	}

	return { value, resolvedType: variable.resolvedType };
}

function generateCssVariable(variable, variables) {
	const { name, resolvedType } = variable;
	const cssVarName = formatVariableName(name);
	let cssVarValue;

	try {
		const resolvedValue = resolveVariableAlias(variable.id, variables);
		const value = resolvedValue.value;
		console.log(value);

		switch (resolvedValue.resolvedType) {
			case 'COLOR':
				cssVarValue = rgbaToCssVariable(value);
				break;
			case 'FLOAT':
				cssVarValue = typeof value === 'number' ? value.toString() + 'px' : value;
				break;
			case 'STRING':
				cssVarValue = `${value}`;
				break;
			default:
				return null;
		}

		if (resolvedValue.aliasId) {
			const aliasName = formatVariableName(variables[resolvedValue.aliasId].name);
			return `${cssVarName}: var(${aliasName}, ${cssVarValue});`;
		} else {
			return `${cssVarName}: ${cssVarValue};`;
		}
	} catch (error) {
		console.warn(`Warning: ${error.message} for variable ${name}`);
		return null;
	}
}

function processCollections(data, outputDir) {
	const { collections, variables } = data;
	let allCssVariables = [];

	if (!collections || typeof collections !== 'object') {
		console.warn('No collections found or collections is not an object');
		return allCssVariables;
	}

	Object.keys(collections).forEach(collectionId => {
		const collection = collections[collectionId];
		if (!collection || !collection.variableIds || !Array.isArray(collection.variableIds)) {
			console.warn(`Invalid collection: ${collectionId}`);
			return;
		}

		const { variableIds, name } = collection;
		let cssVariables = [];

		variableIds.forEach(variableId => {
			const variable = variables[variableId];
			if (variable) {
				const cssVar = generateCssVariable(variable, variables);
				if (cssVar) {
					cssVariables.push(cssVar);
					allCssVariables.push(cssVar);
				}
			}
		});

		if (cssVariables.length > 0) {
			const fileName = `${name.toLowerCase().replace(/\s+/g, '-')}.css`;
			const filePath = path.join(outputDir, fileName);
			const fileContent = `:root {\n  ${cssVariables.join('\n  ')}\n}`;

			fs.mkdirSync(outputDir, { recursive: true });
			fs.writeFileSync(filePath, fileContent, 'utf8');
			console.log(`File generated: ${filePath}`);
		} else {
			console.warn(`No CSS variables generated for collection: ${name}`);
		}
	});

	return allCssVariables;
}

function processJsonFiles(jsonDir, outputDir) {
	let allCssVariables = [];
	fs.readdirSync(jsonDir).forEach(file => {
		if (path.extname(file) === '.json') {
			const jsonPath = path.join(jsonDir, file);
			try {
				const jsonData = fs.readFileSync(jsonPath, 'utf8');
				const data = JSON.parse(jsonData);
				allCssVariables = allCssVariables.concat(processCollections(data, outputDir));
			} catch (error) {
				console.error(`Error processing file ${jsonPath}: ${error.message}`);
			}
		}
	});
	return allCssVariables;
}

function removeDuplicateCssVariables(cssVariables) {
	const uniqueVariables = new Map();
	cssVariables.forEach(variable => {
		const [name, value] = variable.split(':');
		uniqueVariables.set(name.trim(), value.trim());
	});
	return Array.from(uniqueVariables).map(([name, value]) => `${name}: ${value}`);
}

function generateRootStylesTS(cssVariables, outputPath) {
	const uniqueCssVariables = removeDuplicateCssVariables(cssVariables);
	const content = `
import { css } from '@linaria/core';

export const rootStyles = css\`
  :global() {
    :root {
      ${uniqueCssVariables.join('\n      ')}
    }
  }
\`;
`;

	fs.writeFileSync(outputPath, content, 'utf8');
	console.log(`rootStyles.ts generated: ${outputPath}`);
}

// Define input and output directories
const jsonDir = path.join(process.cwd(), './src/tokens/figma/');
const cssDir = path.join(process.cwd(), './src/tokens/css/');
const rootStylesPath = path.join(process.cwd(), './src/tokens/css/rootStyles.ts');

// Process all JSON files in the input directory and generate individual CSS files
const allCssVariables = processJsonFiles(jsonDir, cssDir);

// Generate rootStyles.ts with all unique CSS variables
generateRootStylesTS(allCssVariables, rootStylesPath);

console.log('Processing complete.');
