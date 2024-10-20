
import { css } from '@linaria/core';

export const rootStyles = css`
  :global() {
    :root {
      --color-white-alpha-100: rgba(255, 255, 255, 0.06);
      --color-black-alpha-100: rgba(0, 0, 0, 0.06);
      --color-black-alpha-200: rgba(0, 0, 0, 0.08);
      --color-black-alpha-300: rgba(0, 0, 0, 0.16);
      --color-black-alpha-400: rgba(0, 0, 0, 0.24);
      --color-black-alpha-500: rgba(0, 0, 0, 0.36);
      --color-black-alpha-600: rgba(0, 0, 0, 0.48);
      --color-black-alpha-700: rgba(0, 0, 0, 0.64);
      --color-black-alpha-800: rgba(0, 0, 0, 0.80);
      --color-black-alpha-900: rgba(0, 0, 0, 0.92);
      --color-white-alpha-200: rgba(255, 255, 255, 0.08);
      --color-white-alpha-300: rgba(255, 255, 255, 0.16);
      --color-white-alpha-400: rgba(255, 255, 255, 0.24);
      --color-white-alpha-500: rgba(255, 255, 255, 0.36);
      --color-white-alpha-600: rgba(255, 255, 255, 0.48);
      --color-white-alpha-700: rgba(255, 255, 255, 0.64);
      --color-white-alpha-800: rgba(255, 255, 255, 0.80);
      --color-white-alpha-900: rgba(255, 255, 255, 0.92);
      --color-gray-100: #edf2f7;
      --color-gray-200: #e2e8f0;
      --color-gray-300: #cbd5e0;
      --color-gray-400: #a0aec0;
      --color-gray-500: #718096;
      --color-gray-600: #718096;
      --color-gray-700: #2d3748;
      --color-gray-800: #1a202c;
      --color-gray-900: #171923;
      --color-red-100: #fed7d7;
      --color-red-200: #feb2b2;
      --color-red-300: #fc8181;
      --color-red-400: #f56565;
      --color-red-500: #e53e3e;
      --color-red-600: #c53030;
      --color-red-700: #9b2c2c;
      --color-red-800: #822727;
      --color-red-900: #63171b;
      --color-orange-100: #feebcb;
      --color-orange-200: #fbd38d;
      --color-orange-300: #f6ad55;
      --color-orange-400: #ed8936;
      --color-orange-500: #dd6b20;
      --color-orange-600: #c05621;
      --color-orange-700: #9c4221;
      --color-orange-800: #7b341e;
      --color-orange-900: #652b19;
      --color-yellow-100: #fefcbf;
      --color-yellow-200: #faf089;
      --color-yellow-300: #f6e05e;
      --color-yellow-400: #ecc94b;
      --color-yellow-500: #d69e2e;
      --color-yellow-600: #b7791f;
      --color-yellow-700: #975a16;
      --color-yellow-800: #744210;
      --color-yellow-900: #5f370e;
      --color-green-100: #c6f6d5;
      --color-green-200: #9ae6b4;
      --color-green-300: #68d391;
      --color-green-400: #48bb78;
      --color-green-500: #38a169;
      --color-green-600: #25855a;
      --color-green-700: #276749;
      --color-green-800: #22543d;
      --color-green-900: #1c4532;
      --color-teal-100: #b2f5ea;
      --color-teal-200: #81e6d9;
      --color-teal-300: #4fd1c5;
      --color-teal-400: #38b2ac;
      --color-teal-500: #319795;
      --color-teal-600: #2c7a7b;
      --color-teal-700: #285e61;
      --color-teal-800: #234e52;
      --color-teal-900: #1d4044;
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
      --color-purple-100: #e9d8fd;
      --color-purple-200: #d6bcfa;
      --color-purple-300: #b794f4;
      --color-purple-400: #9f7aea;
      --color-purple-500: #805ad5;
      --color-purple-600: #6b46c1;
      --color-purple-700: #553c9a;
      --color-purple-800: #44337a;
      --color-purple-900: #322659;
      --color-pink-100: #fed7e2;
      --color-pink-200: #fbb6ce;
      --color-pink-300: #f687b3;
      --color-pink-400: #ed64a6;
      --color-pink-500: #d53f8c;
      --color-pink-600: #b83280;
      --color-pink-700: #97266d;
      --color-pink-800: #702459;
      --color-pink-900: #521b41;
      --color-black: #000000;
      --color-white: #ffffff;
      --color-transparent: rgba(255, 255, 255, 0.00);
      --font-style-normal: "normal";
      --font-font-weight-lighter: 200px;
      --font-letter-spacing-normal: 0px;
      --font-font-variant-normal: "normal";
      --font-font-weight-normal: 400px;
      --font-letter-spacing-xs: var(--quarter-unit, 2px);
      --font-text-decoration-underline: "underline";
      --font-text-align-left: "left";
      --font-text-transform-lowercase: "lowercase";
      --font-style-italic: "italic";
      --font-font-size-xs: 0px;
      --font-text-transform-uppercase: "uppercase";
      --font-text-transform-capitalize: "capitalize";
      --font-text-align-right: "right";
      --font-text-align-center: "center";
      --font-text-align-justify: "justify";
      --font-letter-spacing-sm: var(--half-unit, 4px);
      --font-letter-spacing-md: var(--unit, 8px);
      --font-letter-spacing-lg: var(--unit-half, 12px);
      --font-font-variant-small-caps: "small-caps";
      --font-font-weight-bold: 700px;
      --font-font-weight-bolder: 900px;
      --font-font-size-sm: 0px;
      --font-font-size-md: 0px;
      --font-font-size-lg: 0px;
      --font-style-oblicue: "oblique";
      --font-text-transform-none: "none";
      --font-text-decoration-line-through: "line-through";
      --font-text-shadow-xs-x: 0px;
      --font-text-shadow-sm-x: 2px;
      --font-text-shadow-sm-y: 2px;
      --font-text-shadow-sm-blur: 4px;
      --font-text-shadow-xs-y: 0px;
      --font-text-shadow-xs-blur: 2px;
      --cero: 0px;
      --quarter-unit: 2px;
      --half-unit: 4px;
      --unit: 8px;
      --unit-half: 12px;
      --unit-half-quarter: 14px;
      --unit2: 16px;
      --unit2-quarter: 18px;
      --unit2-half: 20px;
      --unit3: 24px;
      --unit3-half: 28px;
      --unit4-half: 36px;
      --h2size: 39px;
      --unit6: 48px;
      --unit8-half: 68px;
      --size-xs: var(--unit-half, 12px);
      --size-sm: var(--unit-half-quarter, 14px);
      --size-md: var(--unit2, 16px);
      --size-lg: var(--unit2-quarter, 18px);
      --border-radius-sx: var(--quarter-unit, 2px);
      --border-radius-sm: var(--half-unit, 4px);
      --border-radius-md: var(--unit, 8px);
      --border-radius-lg: var(--unit-half, 12px);
      --border-radius-none: 0px;
      --z-index-base: 0px;
      --z-index-hide: -1px;
      --z-index-navigation: 10px;
      --z-index-header: 500px;
      --z-index-overlays: 900px;
      --z-index-modal: 1000px;
      --z-index-toast: 2000px;
      --z-index-preloader: 3000px;
      --font-line-height-body-body: 0px;
      --font-line-height-body-heading: 0px;
      --font-text-shadow-md-x: 3px;
      --font-text-shadow-md-y: 3px;
      --font-text-shadow-md-blur: 6px;
      --font-text-shadow-lg-x: 4px;
      --font-text-shadow-lg-y: 4px;
      --font-text-shadow-lg-blur: 8px;
      --spacing-xs: var(--half-unit, 4px);
      --spacing-sm: var(--unit, 8px);
      --spacing-md: var(--unit-half, 12px);
      --spacing-lg: var(--unit2, 16px);
      --spacing-xlg: var(--unit2-half, 20px);
      --spacing-2xlg: var(--unit3, 24px);
      --surface-danger: var(--color-red-500, #e53e3e);
      --surface-success: var(--color-green-400, #48bb78);
      --surface-primary: var(--color-blue-500, #3182ce);
      --surface-secondary: var(--color-yellow-500, #d69e2e);
      --surface-warning: var(--color-orange-400, #ed8936);
      --surface-error: var(--color-red-500, #e53e3e);
      --surface-info: var(--color-cyan-500, #00b5d8);
      --surface-neutral: var(--color-gray-100, #edf2f7);
      --surface-transparent: rgba(255, 255, 255, 0.00);
      --text-danger: var(--color-red-500, #e53e3e);
      --text-success: var(--color-green-400, #48bb78);
      --text-primary: var(--color-blue-500, #3182ce);
      --text-secondary: var(--color-yellow-500, #d69e2e);
      --text-warning: var(--color-orange-500, #dd6b20);
      --text-error: var(--color-red-500, #e53e3e);
      --text-info: var(--color-cyan-500, #00b5d8);
      --border-color-danger: var(--color-red-500, #e53e3e);
      --border-color-success: var(--color-green-400, #48bb78);
      --border-color-primary: var(--color-blue-500, #3182ce);
      --border-color-secondary: var(--color-yellow-500, #d69e2e);
      --border-color-warning: var(--color-orange-500, #dd6b20);
      --border-color-error: var(--color-red-500, #e53e3e);
      --border-color-info: var(--color-cyan-500, #00b5d8);
      --border-color-transparent: var(--color-transparent, rgba(255, 255, 255, 0.00));
      --border-radius-xs: var(--quarter-unit, 2px);
      --border-radius-full: 9999px;
      --border-size-none: 0px;
      --border-size-xs: 1px;
      --border-size-ms: 2px;
      --border-size-md: 3px;
      --border-size-lg: 4px;
      --spacing-1: 4px;
      --spacing-2: 6px;
      --spacing-3: 8px;
      --spacing-4: 12px;
      --components-button-primary: var(--color-blue-500, #3182ce);
      --components-button-primary-hover: var(--color-blue-600, #2b6cb0);
      --components-button-primary-focused: var(--color-blue-300, #63b3ed);
      --components-button-primary-pressed: var(--color-blue-700, #2c5282);
      --components-button-secondary: var(--color-yellow-500, #d69e2e);
      --components-button-secondary-hover: var(--color-yellow-600, #b7791f);
      --components-button-secondary-focused: var(--color-yellow-300, #f6e05e);
      --components-button-secondary-pressed: var(--color-yellow-700, #975a16);
      --font-family-title: "Roboto";
      --font-family-body: "Roboto";
      --font-weight-thin: "100";
      --font-weight-extra-ligth: "200";
      --font-weight-ligth: "300";
      --font-weight-regular: "400";
      --font-weight-medium: "500";
      --font-weight-semi-bold: "600";
      --font-weight-bold: "700";
      --font-weight-extra-bold: "800";
      --font-weight-black: "900";
      --font-size-xs: var(--unit-half, 12px);
      --font-size-sm: var(--unit-half-quarter, 14px);
      --font-size-md: var(--unit2, 16px);
      --font-size-lg: var(--unit2-quarter, 18px);
      --font-size-h6: var(--unit2-half, 20px);
      --font-size-h5: var(--unit3, 24px);
      --font-size-h4: var(--unit3-half, 28px);
      --font-size-h3: var(--unit4-half, 36px);
      --font-size-h2: var(--h2size, 39px);
      --font-size-h1: var(--unit6, 48px);
      --font-line-height-body: 0px;
      --font-line-height-heading: 0px;
      --button-primary: var(--surface-primary, #3182ce);
      --button-secondary: var(--surface-secondary, #d69e2e);
      --button-tertiary: var(--surface-transparent, rgba(255, 255, 255, 0.00));
      --button-neutral: var(--surface-success, #48bb78);
      --button-success: var(--surface-success, #48bb78);
      --button-error: var(--surface-error, #e53e3e);
      --button-info: var(--surface-info, #00b5d8);
      --surface-tertiary: var(--color-gray-100, #edf2f7);
      --button-primary-surface: var(--surface-primary, #3182ce);
      --button-primary-text: var(--color-white, #ffffff);
      --button-primary-borderColor: var(--color-transparent, rgba(255, 255, 255, 0.00));
      --button-secondary-surface: var(--surface-secondary, #d69e2e);
      --button-tertiary-surface: var(--color-gray-500, #718096);
      --button-secondary-text: var(--color-white, #ffffff);
      --button-secondary-borderColor: var(--color-transparent, rgba(255, 255, 255, 0.00));
      --button-tertiary-text: var(--color-white, #ffffff);
      --button-neutral-surface: var(--surface-neutral, #edf2f7);
      --button-tertiary-borderColor: var(--color-transparent, rgba(255, 255, 255, 0.00));
      --button-success-surface: var(--surface-success, #48bb78);
      --button-neutral-text: var(--color-black, #000000);
      --button-warning-surface: var(--surface-warning, #ed8936);
      --button-warning-text: var(--color-white, #ffffff);
      --button-error-surface: var(--surface-error, #e53e3e);
      --button-error-text: var(--color-white, #ffffff);
      --button-info-surface: var(--surface-info, #00b5d8);
      --button-info-text: var(--color-white, #ffffff);
      --button-neutral-borderColor: var(--color-transparent, rgba(255, 255, 255, 0.00));
      --button-success-text: var(--color-white, #ffffff);
      --button-success-borderColor: var(--color-transparent, rgba(255, 255, 255, 0.00));
      --button-warning-borderColor: var(--color-transparent, rgba(255, 255, 255, 0.00));
      --button-error-borderColor: var(--color-transparent, rgba(255, 255, 255, 0.00));
      --button-info-borderColor: var(--color-transparent, rgba(255, 255, 255, 0.00));
      --input-primary-surface: var(--surface-primary, #3182ce);
      --input-primary-borderColor: var(--surface-primary, #3182ce);
      --input-primary-text: var(--color-black, #000000);
      --input-secondary-surface: var(--surface-secondary, #d69e2e);
      --input-secondary-borderColor: var(--surface-secondary, #d69e2e);
      --input-tertiary-surface: var(--color-gray-500, #718096);
      --input-tertiary-borderColor: var(--color-gray-500, #718096);
      --input-secondary-text: var(--color-black, #000000);
      --input-neutral-surface: var(--surface-neutral, #edf2f7);
      --input-neutral-borderColor: var(--surface-neutral, #edf2f7);
      --input-tertiary-text: var(--color-black, #000000);
      --input-success-surface: var(--surface-success, #48bb78);
      --input-success-borderColor: var(--surface-success, #48bb78);
      --input-neutral-text: var(--color-black, #000000);
      --input-warning-surface: var(--surface-warning, #ed8936);
      --input-warning-borderColor: var(--surface-warning, #ed8936);
      --input-warning-text: var(--color-black, #000000);
      --input-error-surface: var(--surface-error, #e53e3e);
      --input-error-borderColor: var(--surface-error, #e53e3e);
      --input-info-surface: var(--surface-info, #00b5d8);
      --input-error-text: var(--color-black, #000000);
      --input-info-borderColor: var(--surface-info, #00b5d8);
      --input-info-text: var(--color-black, #000000);
      --input-success-text: var(--color-black, #000000);
    }
  }
`;
