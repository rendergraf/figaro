import { defineConfig } from 'vite';
import wyw from '@wyw-in-js/vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(() => ({
	plugins: [
		wyw({
			include: ['**/*.{ts,tsx}'],
			babelOptions: {
				presets: ['@babel/preset-typescript', '@babel/preset-react'],
			},
		}),
		svgr({
			svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
			include: '**/*.svg',
		}),
	],
}));
