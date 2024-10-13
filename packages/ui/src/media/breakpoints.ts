// Define the type for breakpoint keys
type BreakpointKey =
    | 'phone'
    | 'tabletPortrait'
    | 'tabletLandscape'
	| 'desktop'
	| 'largeDesktop'
	| 'bigDesktop';

/**
 * Defines the Breakpoints type.
 * This type contains sizes for predefined breakpoints and allows for additional custom keys.
 */
type Breakpoints = {
	[key in Exclude<BreakpointKey, 'custom'>]: number;
} & {
	[key: string]: number;
};

// Define the breakpoints
const breakpoints: Breakpoints = {
	phone: 576,
	tabletPortrait: 768,
	tabletLandscape: 992,
	desktop: 1200,
	largeDesktop: 1400,
	bigDesktop: 1800,
};

/**
 * Functions for generating media queries.
 * @typedef {Object} MediaQueries
 * @property {(key: BreakpointKey) => string} up - Generates a media query with a minimum width.
 * @property {(key: BreakpointKey) => string} down - Generates a media query with a maximum width.
 * @property {(start: BreakpointKey, end: BreakpointKey) => string} between - Generates a media query between two breakpoints.
 * @property {(key: BreakpointKey) => string} only - Generates a media query for a single breakpoint.
 * @property {(key: BreakpointKey) => string} not - Generates a media query that excludes a breakpoint.
 * @property {(min: number, max: number) => string} custom - Generates a custom media query with specified min and max widths.
 */
const media: {
	up: (key: BreakpointKey) => string;
	down: (key: BreakpointKey) => string;
	between: (start: BreakpointKey, end: BreakpointKey) => string;
	only: (key: BreakpointKey) => string;
	not: (key: BreakpointKey) => string;
	custom: (min: number, max: number) => string;
} = {
	/**
	 * Generates a media query with a minimum width.
	 * @param {BreakpointKey} key - The breakpoint key to use.
	 * @returns {string} The generated media query.
	 */
	up: (key: BreakpointKey): string => `@media (min-width: ${breakpoints[key]}px)`,

	/**
	 * Generates a media query with a maximum width.
	 * @param {BreakpointKey} key - The breakpoint key to use.
	 * @returns {string} The generated media query.
	 */
	down: (key: BreakpointKey): string => `@media (max-width: ${breakpoints[key]}px)`,

	/**
	 * Generates a media query between two breakpoints.
	 * @param {BreakpointKey} start - The starting breakpoint key.
	 * @param {BreakpointKey} end - The ending breakpoint key.
	 * @returns {string} The generated media query.
	 */
	between: (start: BreakpointKey, end: BreakpointKey): string =>
		`@media (min-width: ${breakpoints[start]}px) and (max-width: ${breakpoints[end]}px)`,

	/**
	 * Generates a media query for a single breakpoint.
	 * @param {BreakpointKey} key - The breakpoint key to use.
	 * @returns {string} The generated media query.
	 */
	only: (key: BreakpointKey): string =>
		`@media (min-width: ${breakpoints[key]}px) and (max-width: ${breakpoints[key + 1] || Infinity}px)`,

	/**
	 * Generates a media query that excludes a specific breakpoint.
	 * @param {BreakpointKey} key - The breakpoint key to exclude.
	 * @returns {string} The generated media query.
	 */
	not: (key: BreakpointKey): string => `@media not all and (min-width: ${breakpoints[key]}px)`,

	/**
	 * Generates a custom media query with specified minimum and maximum widths.
	 * @param {number} min - The minimum width.
	 * @param {number} max - The maximum width.
	 * @returns {string} The generated media query.
	 */
	custom: (min: number, max: number): string => `@media screen and (min-width: ${min}px) and (max-width: ${max}px)`,
};

// Export the media queries
export { media };
