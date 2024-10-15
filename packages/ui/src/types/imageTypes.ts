/**
 * @description Properties related to the image component.
 * @author Xavier Araque
 * @date 15/10/2024
 * @export ImageProps
 * @interface ImageProps
 */
export interface ImageProps {
	/** The source of the image */
	src: string;

	/** Alternate text for the image */
	alt: string;

	/** Defines the border radius can be 'none', 'xs', 'sm', 'md', 'lg', 'full' */
	borderRadius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'full';

	/** Size of the image box */
	boxSize?: string; // You can change this to a specific type if needed, like 'px' or '%'

	/** The object-fit property. can be 'fill', 'contain', 'cover', 'none', 'scale-down' */
	objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

	/** The loading attribute for the image, can be 'lazy' or 'eager' */
	loading?: 'lazy' | 'eager';

	/** The title attribute for the image */
	title?: string;

	/** The fallback source for the image */
	fallbackSrc?: string;
}
