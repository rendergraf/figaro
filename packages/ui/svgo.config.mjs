export default {
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					removeViewBox: false,
					cleanupIds: false,
					inlineStyles: {
						onlyMatchedOnce: false,
					},
				},
			},
		},
		{
			name: 'removeAttrs',
			params: {
				attrs: ['fill'],
			},
		},
		{
			name: 'addAttributesToSVGElement',
			params: {
				attributes: [{ fill: 'currentColor' }],
			},
		},
	],
};
