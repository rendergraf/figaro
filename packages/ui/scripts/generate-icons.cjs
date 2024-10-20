const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Carpetas de íconos
const rawIconsDir = './src/icons/raw';
const processedIconsDir = './src/icons/processed';
const iconComponentFile = './src/components/icons/icon.tsx';
const indexFile = './src/components/icons/index.ts';

// Crear carpetas si no existen
if (!fs.existsSync(processedIconsDir)) {
	fs.mkdirSync(processedIconsDir, { recursive: true });
}

// Configura la ejecución de svgo
const optimizeIcons = () => {
	return new Promise((resolve, reject) => {
		exec(
			`svgo --folder=${rawIconsDir} --output=${processedIconsDir} --config=./svgo.config.mjs`,
			(err, stdout, stderr) => {
				if (err) {
					reject(`Error al optimizar íconos: ${stderr}`);
				} else {
					console.log('Íconos optimizados correctamente:', stdout);
					resolve();
				}
			}
		);
	});
};

// Leer archivos de la carpeta de íconos procesados
const getIcons = dir => {
	return fs.readdirSync(dir).filter(file => file.endsWith('.svg'));
};

// Generar el código de importaciones e iconMap
const generateIconComponent = icons => {
	if (icons.length === 0) {
		console.error('No se encontraron íconos optimizados.');
		return;
	}

	const imports = icons
		.map(icon => {
			const iconName = path.basename(icon, '.svg');
			return `import { ReactComponent as ${capitalize(iconName)} } from '../../icons/processed/${iconName}.svg';`;
		})
		.join('\n');

	const iconMapEntries = icons
		.map(icon => {
			const iconName = path.basename(icon, '.svg');
			return `${iconName}: ${capitalize(iconName)}`;
		})
		.join(',\n  ');

	const componentTemplate = `// No edit this file, this file is generated by generate-icons.js
${imports}

const iconMap = {
  ${iconMapEntries}
};

export const Icon = ({ name, size = 24, color = 'currentColor' }: { name: keyof typeof iconMap; size?: number; color?: string }) => {
  const SvgIcon = iconMap[name];
  return SvgIcon ? <SvgIcon width={size} height={size} fill={color} /> : null;
};

Icon.displayName = 'Icon';
`;

	fs.writeFileSync(iconComponentFile, componentTemplate, 'utf-8');
	console.log('Componente de íconos generado correctamente');
};

// Función para generar el archivo index.ts
const generateIndexFile = () => {
	const indexContent = `export * from './icon';\n`;
	fs.writeFileSync(indexFile, indexContent, 'utf-8');
	console.log('Archivo index.ts generado correctamente');
};

// Función para capitalizar nombres de íconos
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

// Ejecutar todo el flujo
const run = async () => {
	try {
		// Optimizar íconos con svgo
		await optimizeIcons();

		// Leer íconos optimizados
		const icons = getIcons(processedIconsDir);

		// Generar componente de íconos dinámico
		generateIconComponent(icons);

		// Generar archivo index.ts
		generateIndexFile();
	} catch (error) {
		console.error(error);
	}
};

run();
