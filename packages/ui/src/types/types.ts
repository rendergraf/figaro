import { variants, paddingSizes, appearances, fontSizes, height } from '../styles';

/**
 * Style variants for the input field.
 *
 * This object defines different visual styles for the input, including
 * color properties for the tint and text, allowing customization based
 * on the selected variant.
 *
 * @constant {Object} variants
 * @property {Object} primary - Primary style variant.
 * @property {string} primary.tint - The tint color for the primary variant.
 * @property {string} primary.text - The text color for the primary variant.
 * @property {Object} secondary - Secondary style variant.
 * @property {string} secondary.tint - The tint color for the secondary variant.
 * @property {string} secondary.text - The text color for the secondary variant.
 * @property {Object} tertiary - Tertiary style variant.
 * @property {string} tertiary.tint - The tint color for the tertiary variant.
 * @property {string} tertiary.text - The text color for the tertiary variant.
 * @property {Object} negative - Negative style variant.
 * @property {string} negative.tint - The tint color for the negative variant.
 * @property {string} negative.text - The text color for the negative variant.
 * @property {Object} success - Success style variant.
 * @property {string} success.tint - The tint color for the success variant.
 * @property {string} success.text - The text color for the success variant.
 * @property {Object} neutral - Neutral style variant.
 * @property {string} neutral.tint - The tint color for the neutral variant.
 * @property {string} neutral.text - The text color for the neutral variant.
 */
export interface Variant {
	variant?: keyof typeof variants;
}

/**
 * @description Properties related to the button padding size. It can be 'xs', 'sm', 'md', 'lg', 'xl'. Default value is 'md'.
 * @author Xavier Araque
 * @date 18/10/2024
 * @export PaddingSizes
 * @interface Size
 */
export interface Size {
	size?: keyof typeof paddingSizes;
}

/**
 * Defines the border appearance styles for different input variations.
 * Each appearance defines the border width for the bottom and the rest
 * of the borders (top, left, and right).
 *
 * @typedef {Object} Appearance
 * @property {string} borderBottomWidth - The width of the bottom border.
 * @property {string} borderTheRest - The width of the top, left, and right borders.
 *
 * @type {Object<string, Appearance>}
 * @property {Appearance} outline - The appearance style for outlined inputs.
 * @property {Appearance} filled - The appearance style for filled inputs.
 * @property {Appearance} flushed - The appearance style for flushed inputs.
 *
 * @example
 * const borderStyle = appearances.outline.borderBottomWidth; // '1px'
 */
export interface Appearance {
	appearance?: keyof typeof appearances;
}

/**
 * @description Properties related to the button font size. It can be 'xs', 'sm', 'md', 'lg', 'xl'. Default value is 'md'.
 * @author Xavier Araque
 * @date 18/10/2024
 * @export FontSizes
 * @interface FontSizes
 */
export interface FontSizes {
	fontSizes?: keyof typeof fontSizes;
}

/**
 * @description Properties related to the button height. It can be 'xs', 'sm', 'md', 'lg', 'xl'. Default value is 'md'.
 * @author Xavier Araque
 * @date 18/10/2024
 * @export Heights
 * @interface Heights
 */
export interface Heights {
	height?: keyof typeof height;
}
