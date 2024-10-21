export default {
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					// Deshabilitar un plugin predeterminado
					cleanupIds: false,

					// Personalizar los estilos en línea
					inlineStyles: {
						onlyMatchedOnce: false,
					},
				},
			},
		},
		{
			// Reemplazar todos los atributos fill con currentColor
			name: 'replaceAttrs',
			params: {
				attrs: {
					fill: 'currentColor',
				},
			},
		},
	],
};
