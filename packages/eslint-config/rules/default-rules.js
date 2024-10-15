const defaultRules = {
	//indent: ['error', 'tab'], // Cambiar a tabulaciones
	/* '@typescript-eslint/indent': ['error', 'tab'], */
	'prettier/prettier': [
		'error',
		{
			tabWidth: 2,
			singleQuote: true,
			useTabs: true,
			insertPragma: false,
		},
	],
	'@typescript-eslint/no-non-null-assertion': 'off',
	'react/react-in-jsx-scope': 'off',
	'react/prop-types': 'off',
	'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
	'no-console': 'warn',
	'max-len': ['error', 200],
	'no-use-before-define': ['error', 'nofunc'],
	complexity: ['error', 30],
	'max-params': ['error', 4],
	'max-statements': ['error', 30],
};

module.exports = defaultRules;
