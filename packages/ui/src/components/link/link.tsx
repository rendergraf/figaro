import React from 'react';
import { styled } from '@linaria/react';
import { ButtonType } from '../../types';

/**
 * Props for the Button component.
 * @interface LinkProps
 * @extends ButtonType
 * @extends Variant
 * @extends Size
 * @property {boolean} [isDisabled] - Indicates if the button is disabled.
 * @property {boolean} [isLoading] - Indicates if the button is in loading state.
 * @property {string} [borderRadius] - Specifies the border radius of the button.
 * @property {string} href - URL to navigate when the button is clicked.
 * @property {"_blank" | "_self" | "_parent" | "_top"} [target] - Specifies where to open the linked document.
 * @property {() => void} [onClick] - Function to execute when the button is clicked.
 * @property {string} [rel] - Specifies the relationship between the current document and the linked document.
 * @property {React.ReactNode} children - Content of the button.
 */
export interface LinkProps extends ButtonType {
	isDisabled?: boolean;
	isLoading?: boolean;
	borderRadius?: string;
	href: string | undefined;
	target?: '_blank' | '_self' | '_parent' | '_top';
	rel?: string;
	children: React.ReactNode;
}

const sizes = {
	xs: '4px 8px',
	sm: '6px 12px',
	md: '8px 16px',
	lg: '10px 20px',
	xl: '12px 24px',
};

const fontSizes = {
	xs: '12px',
	sm: '14px',
	md: '16px',
	lg: '18px',
	xl: '20px',
};

const variants = {
	primary: {
		background: '#426cf6',
		text: 'white',
		hover: '#2d5fd5',
	},
	secondary: {
		background: '#6c757d',
		text: 'white',
		hover: '#5a6268',
	},
	tertiary: {
		background: 'transparent',
		text: '#426cf6',
		hover: 'transparent',
		border: '1px solid #426cf6',
	},
	negative: {
		background: '#dc3545',
		text: 'white',
		hover: '#c82333',
	},
	success: {
		background: '#28a745',
		text: 'white',
		hover: '#218838',
	},
	neutral: {
		background: '#f8f9fa',
		text: '#212529',
		hover: '#f8f9fa',
	},
};

/**
 * Link estilizado.
 * @function StyledLink
 * @param {ButtonProps} props - Props del botón.
 * @returns {JSX.Element} El botón estilizado.
 */
const StyledLink = styled.a<LinkProps>`
	background-color: ${({ variant }) => variants[variant || 'primary'].background};
	color: ${({ variant }) => variants[variant || 'primary'].text};
	padding: ${({ size }) => sizes[size || 'md']};
	font-size: ${({ size }) => fontSizes[size || 'md']};
	border-radius: ${({ borderRadius }) => borderRadius || '4px'};
	border: ${({ variant }) => (variant === 'tertiary' ? variants.tertiary.border : 'none')};
	cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
	opacity: ${({ isDisabled }) => (isDisabled ? 0.6 : 1)};
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	text-decoration: none;
	transition:
		background-color 0.3s,
		color 0.3s;

	&:hover {
		background-color: ${({ variant, isDisabled }) =>
			isDisabled ? variants[variant || 'primary'].background : variants[variant || 'primary'].hover};
	}

	&:disabled {
		pointer-events: none;
		background-color: #d6d6d6;
		color: #8a8a8a;
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
 * Componente Link.
 * @function Link
 * @param {LinkProps} props - Props del link.
 * @returns {JSX.Element} El link renderizado.
 */
export const Link: React.FC<LinkProps> = ({
	size,
	variant,
	isDisabled = false,
	isLoading = false,
	borderRadius,
	href,
	target,
	rel,
	children,
}) => (
	<StyledLink
		size={size}
		variant={variant}
		isDisabled={isDisabled}
		borderRadius={borderRadius}
		href={isDisabled ? undefined : href}
		target={target}
		rel={rel}
		aria-disabled={isDisabled}
		aria-busy={isLoading}
		data-loading={isLoading ? true : undefined}
		aria-label={isLoading ? 'Loading...' : undefined}
	>
		{isLoading ? <Spinner /> : children}
	</StyledLink>
);

Link.displayName = 'Link';
