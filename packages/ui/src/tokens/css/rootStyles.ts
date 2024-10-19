import { css } from '@linaria/core';

export const rootStyles = css`
	:global() {
		:root {
			--border-radius-lg: 12px;
			--border-radius-md: 8px;
			--border-radius-none: 0px;
			--border-radius-sm: 4px;
			--border-radius-sx: 2px;
			--cero: 0px;
			--color-black-alpha-100: rgba(0, 0, 0, 0.06);
			--color-black-alpha-200: rgba(0, 0, 0, 0.08);
			--color-black-alpha-300: rgba(0, 0, 0, 0.16);
			--color-black-alpha-400: rgba(0, 0, 0, 0.24);
			--color-black-alpha-500: rgba(0, 0, 0, 0.36);
			--color-black-alpha-600: rgba(0, 0, 0, 0.48);
			--color-black-alpha-700: rgba(0, 0, 0, 0.64);
			--color-black-alpha-800: rgba(0, 0, 0, 0.80);
			--color-black-alpha-900: rgba(0, 0, 0, 0.92);
			--color-black: #000000;
			--color-blue-100: #bee3f8;
			--color-blue-200: #90cdf4;
			--color-blue-300: #63b3ed;
			--color-blue-400: #4299e1;
			--color-blue-500: #3182ce;
			--color-blue-600: #2b6cb0;
			--color-blue-700: #2c5282;
			--color-blue-800: #2a4365;
			--color-blue-900: #1a365d;
			--color-cyan-100: #c4f1f9;
			--color-cyan-200: #9decf9;
			--color-cyan-300: #76e4f7;
			--color-cyan-400: #0bc5ea;
			--color-cyan-500: #00b5d8;
			--color-cyan-600: #00a3c4;
			--color-cyan-700: #0987a0;
			--color-cyan-800: #086f83;
			--color-cyan-900: #065666;
			--color-gray-100: #edf2f7;
			--color-gray-200: #e2e8f0;
			--color-gray-300: #cbd5e0;
			--color-gray-400: #a0aec0;
			--color-gray-500: #718096;
			--color-gray-600: #718096;
			--color-gray-700: #2d3748;
			--color-gray-800: #1a202c;
			--color-gray-900: #171923;
			--color-green-100: #c6f6d5;
			--color-green-200: #9ae6b4;
			--color-green-300: #68d391;
			--color-green-400: #48bb78;
			--color-green-500: #38a169;
			--color-green-600: #25855a;
			--color-green-700: #276749;
			--color-green-800: #22543d;
			--color-green-900: #1c4532;
			--color-orange-100: #feebcb;
			--color-orange-200: #fbd38d;
			--color-orange-300: #f6ad55;
			--color-orange-400: #ed8936;
			--color-orange-500: #dd6b20;
			--color-orange-600: #c05621;
			--color-orange-700: #9c4221;
			--color-orange-800: #7b341e;
			--color-orange-900: #652b19;
			--color-pink-100: #fed7e2;
			--color-pink-200: #fbb6ce;
			--color-pink-300: #f687b3;
			--color-pink-400: #ed64a6;
			--color-pink-500: #d53f8c;
			--color-pink-600: #b83280;
			--color-pink-700: #97266d;
			--color-pink-800: #702459;
			--color-pink-900: #521b41;
			--color-purple-100: #e9d8fd;
			--color-purple-200: #d6bcfa;
			--color-purple-300: #b794f4;
			--color-purple-400: #9f7aea;
			--color-purple-500: #805ad5;
			--color-purple-600: #6b46c1;
			--color-purple-700: #553c9a;
			--color-purple-800: #44337a;
			--color-purple-900: #322659;
			--color-red-100: #fed7d7;
			--color-red-200: #feb2b2;
			--color-red-300: #fc8181;
			--color-red-400: #f56565;
			--color-red-500: #e53e3e;
			--color-red-600: #c53030;
			--color-red-700: #9b2c2c;
			--color-red-800: #822727;
			--color-red-900: #63171b;
			--color-teal-100: #b2f5ea;
			--color-teal-200: #81e6d9;
			--color-teal-300: #4fd1c5;
			--color-teal-400: #38b2ac;
			--color-teal-500: #319795;
			--color-teal-600: #2c7a7b;
			--color-teal-700: #285e61;
			--color-teal-800: #234e52;
			--color-teal-900: #1d4044;
			--color-transparent: rgba(255, 255, 255, 0.00);
			--color-white-alpha-100: rgba(255, 255, 255, 0.06);
			--color-white-alpha-200: rgba(255, 255, 255, 0.08);
			--color-white-alpha-300: rgba(255, 255, 255, 0.16);
			--color-white-alpha-400: rgba(255, 255, 255, 0.24);
			--color-white-alpha-500: rgba(255, 255, 255, 0.36);
			--color-white-alpha-600: rgba(255, 255, 255, 0.48);
			--color-white-alpha-700: rgba(255, 255, 255, 0.64);
			--color-white-alpha-800: rgba(255, 255, 255, 0.80);
			--color-white-alpha-900: rgba(255, 255, 255, 0.92);
			--color-white: #ffffff;
			--color-yellow-100: #fefcbf;
			--color-yellow-200: #faf089;
			--color-yellow-300: #f6e05e;
			--color-yellow-400: #ecc94b;
			--color-yellow-500: #d69e2e;
			--color-yellow-600: #b7791f;
			--color-yellow-700: #975a16;
			--color-yellow-800: #744210;
			--color-yellow-900: #5f370e;
			--font-font-size-lg: 0px;
			--font-font-size-md: 0px;
			--font-font-size-sm: 0px;
			--font-font-size-xs: 0px;
			--font-font-variant-normal: normal;
			--font-font-variant-small-caps: small-caps;
			--font-font-weight-bold: 700px;
			--font-font-weight-bolder: 900px;
			--font-font-weight-lighter: 200px;
			--font-font-weight-normal: 400px;
			--font-letter-spacing-lg: 12px;
			--font-letter-spacing-md: 8px;
			--font-letter-spacing-normal: 0px;
			--font-letter-spacing-sm: 4px;
			--font-letter-spacing-xs: 2px;
			--font-line-height-body-body: 0px;
			--font-line-height-body-heading: 0px;
			--font-style-italic: italic;
			--font-style-normal: normal;
			--font-style-oblicue: oblique;
			--font-text-align-center: center;
			--font-text-align-justify: justify;
			--font-text-align-left: left;
			--font-text-align-right: right;
			--font-text-decoration-line-through: line-through;
			--font-text-decoration-underline: underline;
			--font-text-shadow-lg-blur: 8px;
			--font-text-shadow-lg-x: 4px;
			--font-text-shadow-lg-y: 4px;
			--font-text-shadow-md-blur: 6px;
			--font-text-shadow-md-x: 3px;
			--font-text-shadow-md-y: 3px;
			--font-text-shadow-sm-blur: 4px;
			--font-text-shadow-sm-x: 2px;
			--font-text-shadow-sm-y: 2px;
			--font-text-shadow-xs-blur: 2px;
			--font-text-shadow-xs-x: 0px;
			--font-text-shadow-xs-y: 0px;
			--font-text-transform-capitalize: capitalize;
			--font-text-transform-lowercase: lowercase;
			--font-text-transform-none: none;
			--font-text-transform-uppercase: uppercase;
			--h2size: 39px;
			--half-unit: 4px;
			--quarter-unit: 2px;
			--size-lg: 18px;
			--size-md: 16px;
			--size-sm: 14px;
			--size-xs: 12px;
			--spacing-2xlg: 24px;
			--spacing-lg: 16px;
			--spacing-md: 12px;
			--spacing-sm: 8px;
			--spacing-xlg: 20px;
			--spacing-xs: 4px;
			--unit-half-quarter: 14px;
			--unit-half: 12px;
			--unit2-half: 20px;
			--unit2-quarter: 18px;
			--unit2: 16px;
			--unit3-half: 28px;
			--unit3: 24px;
			--unit4-half: 36px;
			--unit6: 48px;
			--unit8-half: 68px;
			--unit: 8px;
			--z-index-base: 0px;
			--z-index-header: 500px;
			--z-index-hide: -1px;
			--z-index-modal: 1000px;
			--z-index-navigation: 10px;
			--z-index-overlays: 900px;
			--z-index-preloader: 3000px;
			--z-index-toast: 2000px;
			
			}
	}
`;
