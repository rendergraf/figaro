import { styled } from '@linaria/react';
import { createVariantButton, createPadding, FlexMixin, fontSizes } from '../../styles';
import { ButtonProps } from './types';

const paddingSizes = {
	xs: createPadding('4px 8px'),
	sm: createPadding('6px 12px'),
	md: createPadding('8px 16px'),
	lg: createPadding('10px 20px'),
	xl: createPadding('12px 24px'),
};

export const variants = {
	primary: createVariantButton('primary'),
	secondary: createVariantButton('secondary'),
	tertiary: createVariantButton('tertiary'),
	neutral: createVariantButton('neutral'),
	success: createVariantButton('success'),
	warning: createVariantButton('warning'),
	error: createVariantButton('error'),
	info: createVariantButton('info'),
};
/**
 * Botón estilizado.
 * @function StyledButton
 * @param {ButtonProps} props - Props del botón.
 * @returns {JSX.Element} El botón estilizado.
 */
export const Button = styled.button<ButtonProps>`
	background-color: ${({ variant }) => variants[variant || 'primary'].surface};
	color: ${({ variant }) => variants[variant || 'primary'].text};
	padding: ${({ size }) => {
		const { top, right, bottom, left } = paddingSizes[size || 'xs'];
		return `${top} ${right} ${bottom} ${left}`;
	}};
	font-size: ${({ size }) => fontSizes[size || 'md']};
	text-transform: uppercase;
	border-radius: ${({ borderRadius }) => borderRadius || 'var(--half-unit)'};
	border-color: ${({ variant }) => variants[variant || 'primary'].borderColor};
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
			isDisabled ? variants[variant || 'primary'].surface : variants[variant || 'primary'].hover};
		border-color: ${({ variant }) =>
			variant === 'tertiary'
				? `color-mix(in srgb, var(--button-tertiary-borderColor) 80%, var(--color-transparent) )`
				: variants[variant || 'primary'].borderColor};
		color: ${({ variant }) =>
			variant === 'tertiary'
				? `color-mix(in srgb, var(--button-tertiary-text) 80%, var(--color-transparent) )`
				: variants[variant || 'primary'].text};
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
