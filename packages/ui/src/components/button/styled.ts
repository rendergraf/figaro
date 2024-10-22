import { styled } from '@linaria/react';
import { variantsButton, createPadding, FlexMixin, fontSizes, getColorTheme } from '../../styles';
import { ButtonProps } from './types';

const paddingSizes = {
	xs: createPadding('0px 8px'),
	sm: createPadding('0px 12px'),
	md: createPadding('0px 16px'),
	lg: createPadding('0px 20px'),
	xl: createPadding('0px 24px'),
};

const sizeMap = {
	xs: '32px',
	sm: '36px',
	md: '40px',
	lg: '44px',
	xl: '48px',
};

export const Button = styled.button<ButtonProps>`
	height: ${({ size = 'md' }) => sizeMap[size]};
	background-color: ${({ variant }) => getColorTheme({ variant })};
	color: ${({ variant }) => getColorTheme({ variant, inv: true })};
	min-width: ${({ size = 'md' }) => sizeMap[size]};

	padding: ${({ size }) => {
		const { top, right, bottom, left } = paddingSizes[size || 'xs'];
		return `${top} ${right} ${bottom} ${left}`;
	}};
	font-size: ${({ size }) => fontSizes[size || 'md']};
	text-transform: uppercase;
	border-radius: ${({ borderRadius }) => borderRadius || 'var(--half-unit)'};
	border-color: ${({ variant }) => variantsButton[variant || 'primary'].borderColor};
	cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
	opacity: ${({ isDisabled }) => (isDisabled ? 0.6 : 1)};
	${FlexMixin({
		direction: 'row',
		align: 'center',
		justify: 'center',
		gap: '8px',
	})};
	transition:
		background-color 0.3s,
		color 0.3s,
		border-color 0.3s;

	&:hover {
		background-color: ${({ variant, isDisabled }) =>
			isDisabled ? variantsButton[variant || 'primary'].surface : variantsButton[variant || 'primary'].hover};
		border-color: ${({ variant }) =>
			variant === 'tertiary'
				? `color-mix(in srgb, var(--button-tertiary-borderColor) 80%, var(--color-transparent) )`
				: variantsButton[variant || 'primary'].borderColor};
		color: ${({ variant }) =>
			variant === 'tertiary'
				? `color-mix(in srgb, var(--button-tertiary-text) 80%, var(--color-transparent) )`
				: variantsButton[variant || 'primary'].text};
	}

	&:disabled {
		background-color: #d6d6d6;
		color: #8a8a8a;
		cursor: not-allowed;
	}

	outline: 0;
	appearance: none;
	border-style: solid;

	/* 	&:is(:focus-visible, :active, [data-focus-visible]) {
		outline-style: solid;
		outline-offset: 0px;
		outline-width: '1px';
		outline-color: 'transparent';
		border-color: #8a8a8a;
	} */
`;

/**
 * Componente Spinner para indicar carga.
 * @function Spinner
 * @returns {JSX.Element} Un div que representa un spinner de carga.
 */
export const Spinner = styled.div`
	border: 2px solid color-mix(in srgb, var(--color-white) 10%, var(--color-transparent));
	border-top: 2px solid var(--color-white);
	border-radius: 50%;
	width: 16px;
	height: 16px;
	animation: spin 0.8s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
