import React from 'react';
import { styled } from '@linaria/react';
import { ButtonType } from '../../types';
import { createPaddingSizes } from '../../styles';

/**
 * Props for the Button component.
 * @interface ButtonProps
 * @extends ButtonType
 * @extends Variant
 * @extends Size
 * @property {boolean} [isDisabled] - Indicates if the button is disabled.
 * @property {boolean} [isLoading] - Indicates if the button is in loading state.
 * @property {string} [borderRadius] - Specifies the border radius of the button.
 * @property {() => void} [onClick] - Function to execute when the button is clicked.
 * @property {React.ReactNode} children - Content of the button.
 */
export interface ButtonProps extends ButtonType {
	isDisabled?: boolean;
	isLoading?: boolean;
	borderRadius?: string;
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
}

const paddingSizes = {
	xs: createPaddingSizes('4px 8px'),
	sm: createPaddingSizes('6px 12px'),
	md: createPaddingSizes('8px 16px'),
	lg: createPaddingSizes('10px 20px'),
	xl: createPaddingSizes('12px 24px'),
};

// Tamaños de fuente para los botones.
const fontSizes = {
	xs: '12px',
	sm: '14px',
	md: '16px',
	lg: '18px',
	xl: '20px',
};

// Variantes de estilo para los botones.
const variants = {
	primary: {
		surface: 'var(--button-primary)',
		text: 'white',
		hover: 'color-mix(in srgb, var(--button-primary) 90%, var(--color-transparent))',
	},
	secondary: {
		surface: 'var(--button-secondary)',
		text: 'white',
		hover: '#5a6268',
	},
	tertiary: {
		surface: 'var(--button-tertiary)',
		text: '#426cf6',
		hover: 'transparent',
		border: '1px solid #426cf6',
	},
	success: {
		surface: 'var(--color-status-success)',
		text: 'white',
		hover: '#218838',
	},
	warning: {
		surface: 'var(--color-status-success)',
		text: 'white',
		hover: '#218838',
	},
	error: {
		surface: '#dc3545',
		text: 'white',
		hover: '#c82333',
	},
	info: {
		surface: 'var(--button-tertiary)',
		text: '#426cf6',
		hover: 'transparent',
		border: '1px solid #426cf6',
	},
	neutral: {
		surface: '#f8f9fa',
		text: '#212529',
		hover: '#ededed',
	},
};

/**
 * Botón estilizado.
 * @function StyledButton
 * @param {ButtonProps} props - Props del botón.
 * @returns {JSX.Element} El botón estilizado.
 */
const StyledButton = styled.button<ButtonProps>`
	background-color: ${({ variant }) => variants[variant || 'primary'].surface};
	color: ${({ variant }) => variants[variant || 'primary'].text};
	padding: ${({ size }) => {
		const { top, right, bottom, left } = paddingSizes[size || 'xs'];
		return `${top} ${right} ${bottom} ${left}`;
	}};
	font-size: ${({ size }) => fontSizes[size || 'md']};
	border-radius: ${({ borderRadius }) => borderRadius || '4px'};
	border: ${({ variant }) => (variant === 'tertiary' ? variants.tertiary.border : 'none')};
	cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
	opacity: ${({ isDisabled }) => (isDisabled ? 0.6 : 1)};
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	transition:
		background-color 0.3s,
		color 0.3s;

	&:hover {
		background-color: ${({ variant, isDisabled }) =>
			isDisabled ? variants[variant || 'primary'].surface : variants[variant || 'primary'].hover};
	}

	&:disabled {
		background-color: #d6d6d6;
		color: #8a8a8a;
		cursor: not-allowed;
	}

	outline: 0;
	appearance: none;

	&:is(:focus-visible, [data-focus-visible]) {
		outline-style: solid;
		outline-offset: 0px;
		outline-width: '1px';
		outline-color: 'transparent';
		border-color: #8a8a8a;
	}
`;

/**
 * Componente Spinner para indicar carga.
 * @function Spinner
 * @returns {JSX.Element} Un div que representa un spinner de carga.
 */
const Spinner = styled.div`
	border: 2px solid rgba(255, 255, 255, 0.2);
	border-top: 2px solid white;
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

/**
 * Componente Button.
 * @function Button
 * @param {ButtonProps} props - Props del botón.
 * @returns {JSX.Element} El botón renderizado.
 */
export const Button: React.FC<ButtonProps> = ({
	size,
	variant,
	isDisabled = false,
	isLoading = false,
	borderRadius,
	onClick,
	className,
	children,
	...props
}) => (
	<StyledButton
		size={size}
		variant={variant}
		isDisabled={isDisabled}
		disabled={isDisabled || isLoading}
		borderRadius={borderRadius}
		onClick={onClick}
		type='button'
		aria-busy={isLoading}
		data-loading={isLoading ? true : undefined}
		aria-label={isLoading ? 'Loading...' : undefined}
		className={className}
		{...props}
	>
		{isLoading ? <Spinner /> : children}
	</StyledButton>
);

Button.displayName = 'Button';
