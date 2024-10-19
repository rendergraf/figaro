const fs = require('fs');

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

		switch (resolvedValue.resolvedType) {
			case 'COLOR':
				cssVarValue = rgbaToCssVariable(value);
				break;
			case 'FLOAT':
				cssVarValue = typeof value === 'number' ? value.toString() : value;
				break;
			case 'STRING':
				cssVarValue = `"${value}"`;
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

function processCollections(data) {
	const { collections, variables } = data;

	Object.keys(collections).forEach(collectionId => {
		const collection = collections[collectionId];
		const { variableIds, name } = collection;
		let cssVariables = [];

		variableIds.forEach(variableId => {
			const variable = variables[variableId];
			if (variable) {
				const cssVar = generateCssVariable(variable, variables);
				if (cssVar) {
					cssVariables.push(cssVar);
				}
			}
		});

		const fileName = `${name.toLowerCase().replace(/\s+/g, '-')}.css`;
		const fileContent = `:root {\n  ${cssVariables.join('\n  ')}\n}`;
		fs.writeFileSync(fileName, fileContent, 'utf8');
		console.log(`File generated: ${fileName}`);
	});
}

function processJsonFile(jsonFilePath) {
	const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
	const data = JSON.parse(jsonData);
	processCollections(data);
}

// Example usage
processJsonFile('./src/tokens/figma/rootStyles.json');

console.log('Processing complete.');
