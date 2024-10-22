import { styled } from '@linaria/react';
import { HeadingProps } from './types';

export const Heading = styled.h1<HeadingProps>`
	font-weight: ${({ fontWeight }) =>
		fontWeight === 'bold'
			? 'var(--font-weight-bold)'
			: fontWeight === 'semibold'
				? 'var(--font-weight-semi-bold)'
				: fontWeight === 'medium'
					? 'var(--font-weight-medium)'
					: fontWeight === 'light'
						? 'var(--font-weight-light)' // Añadido aquí
						: 'var(--font-weight-regular)'};
	font-size: ${({ size }) => {
		return size === 'h1'
			? 'var(--font-size-h1)'
			: size === 'h2'
				? 'var(--font-size-h2)'
				: size === 'h3'
					? 'var(--font-size-h3)'
					: size === 'h4'
						? 'var(--font-size-h4)'
						: size === 'h5'
							? 'var(--font-size-h5)'
							: size === 'h6'
								? 'var(--font-size-h6)'
								: size === 'lg'
									? 'var(--font-size-lg)'
									: size === 'md'
										? 'var(--font-size-md)'
										: size === 'sm'
											? 'var(--font-size-sm)'
											: 'var(--font-size-xs)';
	}};
	letter-spacing: ${({ letterSpacing }) =>
		letterSpacing === 'tight'
			? 'var(--font-letter-spacing-tight, -0.8px)'
			: letterSpacing === 'wide'
				? 'var(--font-letter-spacing-wide, 0.8px)'
				: 'var(--font-letter-spacing-normal, 0px)'};
	color: ${({ variant }) =>
		variant === 'primary'
			? 'var(--color-primary)'
			: variant === 'secondary'
				? 'var(--color-secondary)'
				: 'var(--color-tertiary)'};
`;
