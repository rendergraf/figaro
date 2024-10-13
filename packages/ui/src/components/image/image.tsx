// Image.tsx
import React, { useState } from 'react';
import { styled } from '@linaria/react';
import { ImageProps } from '../../types';

/**
 * Props para el componente Image.
 * @interface ImageProps
 * @property {('full' | 'xs' | 'sm' | 'md' | 'lg' | 'none')} [borderRadius] - Especifica el radio de borde de la imagen.
 * @property {string} [boxSize] - Especifica el tamaño de la caja de la imagen (ancho y alto).
 * @property {('cover' | 'contain' | 'fill' | 'none')} [objectFit] - Especifica cómo se debe ajustar la imagen dentro de su caja.
 * @property {string} src - URL de la imagen.
 * @property {string} alt - Texto alternativo de la imagen.
 * @property {'lazy' | 'eager'} [loading] - Controla el comportamiento de carga de la imagen.
 * @property {string} [title] - Título de la imagen, que se muestra como un tooltip.
 * @property {string} [fallbackSrc] - URL de la imagen de reemplazo si la imagen principal falla al cargar.
 */
const StyledImage = styled.img<ImageProps>`
  border-radius: ${({ borderRadius }) => {
		switch (borderRadius) {
			case 'full':
				return '50%';
			case 'xs':
				return '2px';
			case 'sm':
				return '4px';
			case 'md':
				return '8px';
			case 'lg':
				return '16px';
			case 'none':
			default:
				return '0';
		}
	}};
  width: ${({ boxSize }) => boxSize || 'auto'};
  height: ${({ boxSize }) => boxSize || 'auto'};
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
`;

/**
 * Componente Image.
 * @function Image
 * @param {ImageProps} props - Props de la imagen.
 * @returns {JSX.Element} La imagen renderizada.
 */
export const Image: React.FC<ImageProps> = ({
	borderRadius,
	boxSize,
	objectFit,
	src,
	alt,
	loading,
	title,
	fallbackSrc = 'https://placehold.co/150?text=Fallback+Image',
}) => {
	const [imgSrc, setImgSrc] = useState(src); // Estado para la URL de la imagen

  // Función que maneja el error de carga
  const handleError = () => {
    setImgSrc(fallbackSrc); // Cambia a la imagen de fallback si hay un error
  };
	return (
		<StyledImage
			src={imgSrc}
			alt={alt}
			loading={loading}
			title={title}
			borderRadius={borderRadius}
			boxSize={boxSize}
			objectFit={objectFit}
			onError={handleError}
		/>
	);
};

Image.displayName = 'Image';
