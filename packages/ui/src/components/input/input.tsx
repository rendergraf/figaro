import React from 'react';
import { styled } from '@linaria/react';
import { InputType } from '../../types';

// Tamaños del campo de entrada.
const sizes = {
	xs: '4px 8px',
	sm: '6px 12px',
	md: '8px 16px',
	lg: '10px 20px',
	xl: '12px 24px',
};

// Variantes de estilo para el campo de entrada.
const variants = {
	primary: {
		background: '#fff',
		text: '#333',
		border: '1px solid #ccc',
		hover: '1px solid #426cf6',
	},
	secondary: {
		background: '#f8f9fa',
		text: '#333',
		border: '1px solid #ccc',
		hover: '1px solid #6c757d',
	},
	tertiary: {
		background: 'transparent',
		text: '#426cf6',
		border: '1px solid #426cf6',
		hover: 'transparent',
	},
	negative: {
		background: '#dc3545',
		text: 'white',
		border: '1px solid #dc3545',
		hover: '#c82333',
	},
	success: {
		background: 'var(--color-status-success)',
		text: 'white',
		border: '1px solid var(--color-status-success)',
		hover: '#218838',
	},
	neutral: {
		background: '#f8f9fa',
		text: '#212529',
		border: '1px solid #ccc',
		hover: '#f8f9fa',
	},
};

const styles = {
	outline: {
		outline: 0,
		appearance: 'none',
		background: '#ffffff',
		color: '#426cf6',
		borderColor: '#f4f4f5',
		borderWidth: '1px',
	},
	filled: {
		outline: 0,
		appearance: 'none',
		background: '#426cf6',
		color: '#ffffff',
		borderColor: 'transparent',
		borderWidth: '1px',
	},
	flushed: {
		outline: 0,
		appearance: 'none',
		background: 'transparent',
		color: '#ffffff',
		borderColor: '#426cf6',
		borderWidth: '1px',
	},
};

// Props para el componente Field
export interface InputProps extends InputType {
	isDisabled?: boolean;
	borderRadius?: string;
	placeholder?: string;
}

// Campo de entrada estilizado
const InputStyled = styled.input<InputProps>`
	background-color: ${({ style }: { style?: keyof typeof styles }) => styles[style || 'outline'].background};
	border-color: ${({ style }: { style?: keyof typeof styles }) => styles[style || 'outline'].borderColor};
	border-width: ${({ style }: { style?: keyof typeof styles }) => styles[style || 'outline'].borderWidth};
	color: ${({ style }: { style?: keyof typeof styles }) => styles[style || 'outline'].color};

	border-width: ${({ style }: { style?: keyof typeof styles }) => styles[style || 'outline'].borderWidth};
	padding: ${({ size }) => sizes[size || 'md']};
	border-radius: ${({ borderRadius }) => borderRadius || '4px'};
	cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'text')};
	opacity: ${({ isDisabled }) => (isDisabled ? 0.6 : 1)};
	font-size: 16px;
	outline: 0;
	appearance: none;
	--focus-ring-color: color-mix(in srgb, var(--chakra-colors-blue-500) 50%, transparent);
	transition: border-color 0.2s;

	/* 	&:hover {
		border-color: ${({ variant, isDisabled }) =>
		isDisabled ? variants[variant || 'primary'].border : variants[variant || 'primary'].hover};
	} */

	&:focus {
		/* border-color: #426cf6; */
	}
`;

// Componente Field
export const Input: React.FC<InputProps> = ({
	size,
	variant,
	isDisabled = false,
	borderRadius,
	placeholder,
	style,
}) => (
	<InputStyled
		variant={variant}
		style={style}
		size={size}
		isDisabled={isDisabled}
		borderRadius={borderRadius}
		placeholder={placeholder}
		disabled={isDisabled}
		type='text' // Cambiado de 'input' a 'text'
		aria-disabled={isDisabled}
	/>
);

Input.displayName = 'Input';
