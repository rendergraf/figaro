import React from 'react';
import * as S from './styled';
import { HeadingProps } from './types';

export const Heading: React.FC<HeadingProps> = ({
	as = 'h1',
	fontWeight = 'normal',
	size = 'h1',
	letterSpacing = 'normal',
	variant = 'primary',
	children,
	...props
}) => {
	return (
		<S.Heading as={as} fontWeight={fontWeight} size={size} letterSpacing={letterSpacing} variant={variant} {...props}>
			{children}
		</S.Heading>
	);
};
Heading.displayName = 'Heading';
