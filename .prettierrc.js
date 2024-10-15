// .prettierrc.js
module.exports = {
	bracketSpacing: true,
	useTabs: true, // Utiliza tabulaciones
	tabWidth: 2, // Ancho de tabulación
	printWidth: 120,
	singleQuote: true,
	jsxSingleQuote: true,
	semi: true,
	trailingComma: 'es5',
	arrowParens: 'avoid',
	jsonRecursiveSort: true,
	importOrder: ['^@/(.*)$', '^[./]'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
};
