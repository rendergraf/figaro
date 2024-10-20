import React from 'react';
import { ButtonProps } from './types';
import * as S from './styled';

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
