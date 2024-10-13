const fs = require('fs');
const path = require('path');

// Función para convertir valores RGBA a formato HEX o RGBA según si tiene alpha o no
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

// Función para convertir nombres de variables
function formatVariableName(name) {
	return `--${name.replace(/\//g, '-')}`;
}

// Función para resolver alias
function resolveAlias(variable, allVariables) {
	const aliasId = variable.valuesByMode['1:1']?.id;
	if (aliasId) {
		const aliasVariable = allVariables.find(v => v.id === aliasId);
		return aliasVariable ? aliasVariable.resolvedValuesByMode['1:1'].resolvedValue : undefined;
	}
	return undefined;
}

// Función para generar la variable CSS final
function generateCssVariable(variable, allVariables) {
	const { name, type, resolvedValuesByMode } = variable;
	const resolvedValue = getResolvedValue(variable, allVariables);
	const aliasName = resolvedValuesByMode['1:1']?.aliasName;

	if (type === 'COLOR') {
		return handleColorType(name, aliasName, resolvedValue);
	}

	if (type === 'FLOAT') {
		return handleFloatType(name, resolvedValue);
	}

	if (type === 'STRING') {
		return handleStringType(name, resolvedValue);
	}

	return [];
}

function getResolvedValue(variable, allVariables) {
	const value = variable.resolvedValuesByMode['1:1'] || {};
	return value.resolvedValue || resolveAlias(variable, allVariables);
}

function handleColorType(name, aliasName, resolvedValue) {
	if (aliasName) {
		const cssVarName = formatVariableName(aliasName);
		const fallbackValue = rgbaToCssVariable(resolvedValue);
		return [
			`${formatVariableName(aliasName)}: ${fallbackValue};`,
			`${formatVariableName(name)}: var(${cssVarName}, ${fallbackValue});`,
		];
	} else if (resolvedValue) {
		const cssVarName = formatVariableName(name);
		return [`${cssVarName}: ${rgbaToCssVariable(resolvedValue)};`];
	}
	return [`${formatVariableName(name)}: transparent;`];
}

function handleFloatType(name, resolvedValue) {
	if (name.includes('font/weight') || name.includes('zIndex')) {
		return [`${formatVariableName(name)}: ${resolvedValue !== undefined ? resolvedValue : '0'};`];
	}
	return [`${formatVariableName(name)}: ${resolvedValue !== undefined ? resolvedValue + 'px' : '0px'};`];
}

function handleStringType(name, resolvedValue) {
	return [`${formatVariableName(name)}: ${resolvedValue !== undefined ? resolvedValue : ''};`];
}

// Función principal para recorrer el JSON y generar variables CSS
function generateCssVariables(primitives) {
	const variables = primitives.variables;

	if (!variables || variables.length === 0) {
		console.log('No variables found in JSON');
		return ':root {}';
	}

	const cssVariables = new Set();
	const primitiveVariables = new Set();

	variables.forEach(variable => {
		const generatedVariables = generateCssVariable(variable, variables);
		generatedVariables.forEach(cssVar => {
			if (cssVar.includes('var(')) {
				cssVariables.add(cssVar);
			} else {
				primitiveVariables.add(cssVar);
			}
		});
	});

	const sortedPrimitives = Array.from(primitiveVariables).sort();
	const sortedVariables = Array.from(cssVariables).sort();

	return `:root {\n${sortedPrimitives.join('\n')}\n${sortedVariables.join('\n')}\n}`;
}

// Función para procesar un archivo individual y generar archivos CSS y TS
function processFile(jsonFilePath, varsCssPath, outputFilePath) {
	const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
	const primitives = JSON.parse(jsonData);

	// Genera las variables CSS
	const cssContent = generateCssVariables(primitives);

	// Verifica si el archivo varsCssPath existe, si no, lo crea con contenido predeterminado
	if (!fs.existsSync(varsCssPath)) {
		const fileName = path.basename(varsCssPath, '.ts');
		const initialContent = `import { css } from '@linaria/core';\n\nconst ${fileName} = css\`\n\t:global() {\n\t\t:root {}\n\t}\n\`;\n\nexport default ${fileName};\n`;
		fs.writeFileSync(varsCssPath, initialContent, 'utf8');
		console.log(`Archivo ${fileName}.ts creado.`);
	}

	// Modifica el archivo varsCssPath para insertar las variables generadas en :root
	let varsCssContent = fs.readFileSync(varsCssPath, 'utf8');
	const rootStart = varsCssContent.indexOf(':root {');
	const rootEnd = varsCssContent.indexOf('}', rootStart) + 1;

	if (rootStart !== -1 && rootEnd !== -1) {
		const newVarsCssContent = varsCssContent.slice(0, rootStart) + cssContent + varsCssContent.slice(rootEnd);
		fs.writeFileSync(varsCssPath, newVarsCssContent, 'utf8');
		console.log(`Archivo ${path.basename(varsCssPath)} modificado con las nuevas variables CSS.`);
	} else {
		console.log('No se encontró el bloque :root en varsCss.ts');
	}

	// Guarda las variables CSS en un archivo .css
	fs.writeFileSync(outputFilePath, cssContent, 'utf8');
	console.log(`Archivo CSS generado en: ${outputFilePath}`);
}

// Función para procesar todos los archivos JSON en el directorio
function processAllFiles() {
	const jsonDir = path.join(process.cwd(), './src/tokens/figma/');
	const themeDir = path.join(process.cwd(), './src/tokens/css/');
	const cssDir = path.join(process.cwd(), './src/tokens/css/autocomplete/');

	// Lee todos los archivos .json en el directorio
	const jsonFiles = fs.readdirSync(jsonDir).filter(file => file.endsWith('.json'));

	if (jsonFiles.length === 0) {
		console.log('No se encontraron archivos JSON en el directorio.');
		return;
	}

	jsonFiles.forEach(jsonFile => {
		const jsonFilePath = path.join(jsonDir, jsonFile);
		const fileName = path.basename(jsonFile, '.json');
		const varsCssPath = path.join(themeDir, `${fileName}.ts`);
		const outputFilePath = path.join(cssDir, `css-variable-autocomplete.css`);

		// Procesa cada archivo JSON
		processFile(jsonFilePath, varsCssPath, outputFilePath);
	});
}

processAllFiles();
