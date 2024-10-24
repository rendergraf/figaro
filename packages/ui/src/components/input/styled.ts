import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { InputType } from './types';
import {
	getColorTheme,
	height,
	fontSizes,
	variantsInput,
	createAppearance,
	createPadding,
	FlexMixin,
	Padding,
} from '../../styles';

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
	${FlexMixin({
		direction: 'column',
		align: 'flex-start',
		justify: 'center',
		gap: 'var(--unit)',
	})};
	width: 100%;
	box-sizing: border-box;
`;

export const Input = styled.input<InputType>`
	background-color: ${({ variant, appearance }) =>
		appearance === 'filled'
			? `color-mix(in srgb, ${getColorTheme({ variant })} 10%, var(--color-transparent))`
			: 'var(--color-transparent)'};
	color: ${({ variant }) => getColorTheme({ variant, light: '--color-black', dark: '--color-white' })};

	border-style: double;
	appearance: none;
	text-align: start;
	min-width: 0px;
	flex-grow: 1;
	outline: 0;
	transition:
		border-color 0.2s,
		box-shadow 0.2s;
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
			: variantsInput[variant || 'neutral'].borderColor};
	border-top-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderTheRest};
	border-right-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderTheRest};
	border-bottom-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderBottomWidth};
	border-left-width: ${({ appearance }: { appearance?: keyof typeof appearances }) =>
		appearances[appearance || 'outline'].borderTheRest};
	font-size: ${({ size }) => fontSizes[size || 'md']};
	border-radius: ${({ borderRadius, appearance }) =>
		appearance === 'flushed' ? '0' : borderRadius || 'var(--half-unit)'};
	/* color: ${({ variant }) => variantsInput[variant || 'neutral'].text}; */

	z-index: var(--z-index-first);

	&:is(:focus-visible, [data-focus-visible]) {
		outline-width: ${({ appearance }) => (appearance === 'flushed' ? '0px' : '1px')};
		outline-color: ${({ variant }) => variantsInput[variant || 'neutral'].borderColor};
		box-shadow: ${({ appearance, variant }) =>
			appearance === 'flushed' ? `0px 1px 0px 0px ${variantsInput[variant || 'neutral'].borderColor}` : 'none'};
		border-color: ${({ variant }) => variantsInput[variant || 'neutral'].borderColor};
		outline-style: solid;
		outline-offset: 0px;
	}

	&:focus {
		box-shadow: ${({ appearance, variant }) =>
			appearance === 'flushed' ? `0px 1px 0px 0px ${variantsInput[variant || 'neutral'].borderColor}` : 'none'};
	}
`;

export const Row = styled.div`
	${FlexMixin({
		direction: 'row',
	})};
	width: 100%;
`;

export const WrapperButton = styled.div<InputType>`
	color: ${({ variant }) => getColorTheme({ variant, light: '--color-black', dark: '--color-white' })};
	z-index: var(--z-index-navigation);
	position: absolute;
	right: var(--unit);
	${FlexMixin({
		align: 'center',
	})};
	${Padding({
		right: 'var(--unit)',
		left: 'var(--unit)',
	})}
	button {
		${Padding({
			all: 'var(--half-unit) + var(--quarter-unit)',
		})}
		width: 32px;
	}
`;

export const HelperText = styled.span<InputType>`
	color: ${({ variant }) => getColorTheme({ variant, light: '--color-black', dark: '--color-white' })};
	font-size: var(--font-size-sm);
`;

export const Prefix = styled.span<InputType>`
	border-right: 1px solid light-dark(var(--color-black-alpha-300), var(--color-white-alpha-300));
	position: absolute;
	flex-shrink: 0;
	left: var(--unit);
	color: ${({ variant }) => getColorTheme({ variant, light: '--color-gray-800', dark: '--color-gray-100' })};
	${FlexMixin({
		align: 'center',
	})};
	${Padding({
		right: 'var(--unit)',
		left: 'var(--unit)',
	})}
`;

export const Sufix = styled.span<InputType>`
	position: absolute;
	right: ${({ showPasswordToggle }) => (showPasswordToggle ? '54px' : '16px')};
	border-left: 1px solid light-dark(var(--color-black-alpha-300), var(--color-white-alpha-300));
	flex-shrink: 0;
	color: ${({ variant }) => getColorTheme({ variant, light: '--color-black', dark: '--color-white' })};
	${FlexMixin({
		align: 'center',
	})};
	${Padding({
		right: 'var(--unit)',
		left: 'var(--unit)',
	})}
`;
