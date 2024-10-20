import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { InputType } from './types';
import { height, fontSizes, createVariantInput, createAppearance, createPadding } from '../../styles';

export const variants = {
	primary: createVariantInput('primary'),
	secondary: createVariantInput('secondary'),
	tertiary: createVariantInput('tertiary'),
	neutral: createVariantInput('neutral'),
	success: createVariantInput('success'),
	warning: createVariantInput('warning'),
	error: createVariantInput('error'),
	info: createVariantInput('info'),
};

export const appearances = {
	outline: createAppearance('1px', '1px'),
	filled: createAppearance('1px', '1px'),
	flushed: createAppearance('1px', '0px'),
};

export const paddingSizes = {
	xs: createPadding('2px 4px'),
	sm: createPadding('3px 6px'),
	md: createPadding('4px 8px'),
	lg: createPadding('6px 12px'),
	xl: createPadding('8px 16px'),
};

export const Wrapper = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	gap: var(--unit);
	box-sizing: border-box;
`;

export const Input = styled.input<InputType>`
	outline: 0;
	appearance: none;
	flex-grow: 1;
	border-style: double;
	text-align: start;
	min-width: 0px;
	height: ${({ size }) => height[size || 'md']};
	cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'text')};
	opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)};
	padding: ${({ size }) => {
		const { top, right, bottom, left } = paddingSizes[size || 'xs'];
		return `${top} ${right} ${bottom} ${left}`;
	}};
	padding-inline-end: ${({ showPasswordToggle }) => (showPasswordToggle ? '40px' : '0')};
	border-color: ${({ appearance, variant, error, success }) =>
		appearance === 'filled'
			? error
				? 'var(--surface-error)'
				: success
					? 'var(--surface-success)'
					: 'var(--color-transparent)'
			: variants[variant || 'neutral'].borderColor};
	border-top-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderTheRest};
	border-right-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderTheRest};
	border-bottom-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderBottomWidth};
	border-left-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderTheRest};
	font-size: ${({ size }) => fontSizes[size || 'md']};
	/* 	border-color: ${({ error, success, variant }) =>
		error ? 'red' : success ? 'green' : variants[variant || 'neutral'].surface}; */
	transition:
		border-color 0.2s,
		box-shadow 0.2s;
	border-radius: ${({ borderRadius, appearance }) => (appearance === 'flushed' ? '0' : borderRadius || '4px')};
	color: ${({ variant }) => variants[variant || 'neutral'].text};
	background-color: ${({ variant, appearance }) =>
		appearance === 'filled'
			? `color-mix(in srgb, ${variants[variant || 'neutral']?.surface || 'var(--color-gray-500)'} 10%, var(--color-transparent))`
			: 'var(--color-transparent)'};
	z-index: 1;

	&:is(:focus-visible, [data-focus-visible]) {
		outline-style: solid;
		outline-offset: 0px;
		outline-width: ${({ appearance }) => (appearance === 'flushed' ? '0px' : '1px')};
		outline-color: ${({ variant }) => variants[variant || 'neutral'].borderColor};
		box-shadow: ${({ appearance, variant }) =>
			appearance === 'flushed' ? `0px 1px 0px 0px ${variants[variant || 'neutral'].borderColor}` : 'none'};
		border-color: ${({ variant }) => variants[variant || 'neutral'].borderColor};
	}

	&:focus {
		box-shadow: ${({ appearance, variant }) =>
			appearance === 'flushed' ? `0px 1px 0px 0px ${variants[variant || 'neutral'].borderColor}` : 'none'};
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;

export const WrapperButton = styled.div`
	display: flex;
	position: absolute;
	align-items: center;
	right: var(--unit);
	padding-right: var(--unit);
	padding-left: var(--unit);
	z-index: 3;
`;

export const HelperText = styled.span`
	font-size: 16px;
`;

export const Prefix = styled.span`
	position: absolute;
	display: flex;
	flex-shrink: 0;
	align-items: center;
	left: var(--unit);
	padding-left: var(--unit);
	padding-right: var(--unit);
	border-right: 1px solid var(--color-gray-100);
`;

export const Sufix = styled.span<InputType>`
	position: absolute;
	display: flex;
	flex-shrink: 0;
	align-items: center;
	padding-left: var(--unit);
	padding-right: var(--unit);
	right: ${({ showPasswordToggle }) => (showPasswordToggle ? '54px' : '16px')};
	border-left: 1px solid var(--color-gray-100);
`;

export const Button = css`
	padding: var(--half-unit) + var(--quarter-unit);
`;