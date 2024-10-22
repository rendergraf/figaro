export interface HeadingProps {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
	fontWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
	letterSpacing?: 'tight' | 'normal' | 'wide';
	variant?: 'primary' | 'secondary' | 'tertiary';
	children: React.ReactNode;
}
