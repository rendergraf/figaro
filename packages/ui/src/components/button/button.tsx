import React from 'react';
import { ButtonProps } from './types';
import * as S from './styled';

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
/* export interface ButtonProps extends ButtonType {
	isDisabled?: boolean;
	isLoading?: boolean;
	borderRadius?: string;
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
} */

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
	<S.Button
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
		{isLoading ? <S.Spinner /> : children}
	</S.Button>
);

Button.displayName = 'Button';
