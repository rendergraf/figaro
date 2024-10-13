/**
 * Properties related to the button variant.
 * @interface Variant
 */
export interface Variant {
    /** Button variant. */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'negative' | 'success' | 'neutral';
}

/**
 * Properties related to the button size.
 * @interface Size
 */
export interface Size {
    /** Button size. */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
