/**
 * @description Properties related to the button variant. It can be 'primary', 'secondary', 'tertiary', 'negative', 'success', 'neutral'. Default value is 'primary'.
 * @author Xavier Araque
 * @date 15/10/2024
 * @export Variant
 * @interface Variant
 */
export interface Variant {
	/** Button variant. can be 'primary', 'secondary', 'tertiary', 'negative', 'success', 'neutral'. */
	variant?: 'primary' | 'secondary' | 'tertiary' | 'negative' | 'success' | 'neutral';
}

/**
 * @description Properties related to the button size.
 * @author Xavier Araque
 * @date 15/10/2024
 * @export Size
 * @interface Size
 */
export interface Size {
	/** Button size. Can be 'xs', 'sm', 'md', 'lg', 'xl'. */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * @description Properties related to the button style. It can be 'outline', 'filled', 'flushed'. Default value is 'filled'.
 * @author Xavier Araque
 * @date 15/10/2024
 * @export Styles
 * @interface Styles
 */
export interface Appearance {
	appearance?: 'outline' | 'filled' | 'flushed';
}
