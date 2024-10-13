// types.ts
export interface ImageProps {
	/** The source of the image */
	src: string;

	/** Alternate text for the image */
	alt: string;

	/** Defines the border radius */
	borderRadius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'full';

	/** Size of the image box */
	boxSize?: string; // You can change this to a specific type if needed, like 'px' or '%'

	/** The object-fit property */
	objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

	/** The loading attribute for the image */
	loading?: 'lazy' | 'eager';

	/** The title attribute for the image */
	title?: string;

	fallbackSrc?: string;
}
