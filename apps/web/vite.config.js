import { defineConfig } from 'vite';
import wyw from '@wyw-in-js/vite';

import svgr from 'vite-plugin-svgr';

export default defineConfig(() => ({
	plugins: [
		wyw({
			debug: true,
			evaluate: true,
			displayName: true,
			variableNameSlug: context => `${context.precedingCss.match(/([\w-]+)\s*:\s*$/)[1]}____${context.valueSlug}`,
			variableNameConfig: 'var',
			include: ['**/*.{ts,tsx}'],
			babelOptions: {
				presets: ['@babel/preset-typescript', '@babel/preset-react', '@wyw-in-js'],
			},
		}),
		svgr({
			svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
			include: '**/*.svg',
		}),
	],
}));
