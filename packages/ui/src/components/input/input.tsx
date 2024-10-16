import React from 'react';
import { styled } from '@linaria/react';
import { lighten } from 'polished'; // Importa lighten desde polished
import { InputType } from '../../types';

/**
 * Size configurations for the input field.
 *
 * This object defines the padding sizes for different input variations,
 * allowing for consistent styling based on the selected size.
 *
 * @constant {Object} sizes
 * @property {string} xs - Extra small size (4px vertical, 8px horizontal).
 * @property {string} sm - Small size (6px vertical, 12px horizontal).
 * @property {string} md - Medium size (8px vertical, 16px horizontal).
 * @property {string} lg - Large size (10px vertical, 20px horizontal).
 * @property {string} xl - Extra large size (12px vertical, 24px horizontal).
 */
const sizes = {
	xs: '4px 8px',
	sm: '6px 12px',
	md: '8px 16px',
	lg: '10px 20px',
	xl: '12px 24px',
};

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
const variants = {
	primary: {
		tint: '#426cf6',
		text: '#000f42',
	},
	secondary: {
		tint: '#ffd000',
		text: '#000000',
	},
	tertiary: {
		tint: '#bd42f6',
		text: '#61007b',
	},
	negative: {
		tint: '#dc3545',
		text: '#4d0000',
	},
	success: {
		tint: '#00bf29',
		text: '#000000',
	},
	neutral: {
		tint: '#9d9d9d',
		text: '#212529',
	},
};

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
const appearances = {
	outline: {
		borderBottomWidth: '1px',
		borderTheRest: '1px',
	},
	filled: {
		borderBottomWidth: '1px',
		borderTheRest: '1px',
	},
	flushed: {
		borderBottomWidth: '1px',
		borderTheRest: '0px',
	},
};

/**
 * @description Properties related to the input component.
 * @author Xavier Araque
 * @date 16/10/2024
 * @export InputProps
 * @interface InputProps
 * @extends {InputType}
 */
export interface InputProps extends InputType {
	isDisabled?: boolean;
	borderRadius?: string;
	placeholder?: string;
}

/**
 * Styled input component using Linaria.
 * This component supports different variants and appearances, allowing
 * customization of its style based on the context in which it is used.
 *
 * @component
 * @param {Object} props - The properties for the input component.
 * @param {('xs' | 'sm' | 'md' | 'lg' | 'xl')} [props.size='md'] - The size of the input field.
 * Can be one of: 'xs', 'sm', 'md', 'lg', 'xl'.
 * @param {('primary' | 'secondary' | 'tertiary' | 'negative' | 'success' | 'neutral')} [props.variant='primary'] -
 * The style variant of the input field, defining the background and text colors.
 * @param {('outline' | 'filled' | 'flushed')} [props.appearance='outline'] - The appearance of the input field.
 * Defines how borders and background are presented.
 * @param {boolean} [props.isDisabled=false] - Indicates if the input field is disabled.
 * If true, the cursor will change to 'not-allowed' and opacity will be reduced.
 *
 * @returns {React.ReactElement} The styled input component.
 *
 * @example
 * <InputStyled size="lg" variant="secondary" appearance="filled" />
 */
const InputStyled = styled.input<InputProps>`
	background-color: ${({ variant, appearance }) =>
		appearance === 'filled' ? lighten(0.35, variants[variant || 'neutral'].tint) : 'transparent'};
	color: ${({ variant }) => variants[variant || 'neutral'].text};
	border-color: ${({ appearance, variant }) =>
		appearance === 'filled' ? 'transparent' : variants[variant || 'neutral'].tint};
	border-radius: ${({ borderRadius, appearance }) => (appearance === 'flushed' ? '0' : borderRadius || '4px')};
	padding: ${({ size }: { size?: keyof typeof sizes }) => sizes[size || 'md']};
	border-top-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderTheRest};
	border-right-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderTheRest};
	border-bottom-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderBottomWidth};
	border-left-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderTheRest};
	cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'text')};
	opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)};
	font-size: 16px;
	outline: 0;
	appearance: none;
	transition:
		border-color 0.2s,
		box-shadow 0.2s;

	&:is(:focus-visible, [data-focus-visible]) {
		outline-style: solid;
		outline-offset: 0px;
		outline-width: ${({ appearance }) => (appearance === 'flushed' ? '0px' : '1px')};
		outline-color: ${({ variant }) => variants[variant || 'neutral'].tint};
		box-shadow: ${({ appearance, variant }) =>
			appearance === 'flushed' ? `0px 1px 0px 0px ${variants[variant || 'neutral'].tint}` : 'none'};
		border-color: ${({ variant }) => variants[variant || 'neutral'].tint};
	}

	&:focus {
		box-shadow: ${({ appearance, variant }) =>
			appearance === 'flushed' ? `0px 1px 0px 0px ${variants[variant || 'neutral'].tint}` : 'none'};
	}
`;

/**
 * A styled input component for text input.
 *
 * This component allows for customization through various props, including size,
 * variant, appearance, and more. It utilizes the styled-components library for
 * consistent styling across different input variations.
 *
 * @component
 * @param {Object} props - The props for the Input component.
 * @param {keyof typeof sizes} [props.size] - The size of the input, controlling padding.
 * @param {keyof typeof variants} [props.variant] - The visual style variant of the input.
 * @param {boolean} [props.isDisabled=false] - Indicates if the input should be disabled.
 * @param {string} [props.borderRadius] - Custom border radius for the input.
 * @param {string} [props.placeholder] - Placeholder text for the input field.
 * @param {keyof typeof appearances} [props.appearance] - The appearance style of the input.
 *
 * @returns {JSX.Element} The rendered Input component.
 *
 * @example
 * <Input
 *   size="md"
 *   variant="primary"
 *   isDisabled={false}
 *   borderRadius="4px"
 *   placeholder="Enter text"
 *   appearance="outline"
 * />
 */
export const Input: React.FC<InputProps> = ({
	size,
	variant,
	isDisabled = false,
	borderRadius,
	placeholder,
	appearance,
}) => (
	<InputStyled
		variant={variant}
		appearance={appearance}
		size={size}
		isDisabled={isDisabled}
		borderRadius={borderRadius}
		placeholder={placeholder}
		disabled={isDisabled}
		type='text'
		aria-disabled={isDisabled}
	/>
);

Input.displayName = 'Input';
