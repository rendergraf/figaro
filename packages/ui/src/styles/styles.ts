export type Appearance = {
	borderBottomWidth: string;
	borderTheRest: string;
};

export const createAppearance = (borderBottomWidth: string, borderTheRest: string): Appearance => ({
	borderBottomWidth,
	borderTheRest,
});

export type VariantName = 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'success' | 'warning' | 'error' | 'info';
export type Variant = {
	surface: string;
	text: string;
	hover: string;
	borderColor: string;
};
export const createVariantInput = (name: VariantName): Variant => ({
	surface: `var(--input-${name}-surface)`,
	text: `var(--input-${name}-text)`,
	hover: `color-mix(in srgb, var(--input-${name}-surface) 10%, var(--color-transparent))`,
	borderColor: `var(--input-${name}-borderColor)`,
});

// Variant Button
export const createVariantButton = (name: VariantName): Variant => ({
	surface: `var(--button-${name}-surface`,
	text: `var(--button-${name}-text)`,
	hover: `color-mix(in srgb, var(--button-${name}-surface) 90%, var(--color-transparent))`,
	borderColor: `var(--button-${name}-borderColor)`,
});

/* export const variants = {
	primary: createVariant('primary'),
	secondary: createVariant('secondary'),
	tertiary: createVariant('tertiary'),
	neutral: createVariant('neutral'),
	success: createVariant('success'),
	warning: createVariant('warning'),
	error: createVariant('error'),
	info: createVariant('info'),
}; */

export const createPadding = (padding: string) => {
	const values = padding.split(' ');

	switch (values.length) {
		case 1:
			return { top: values[0], right: values[0], bottom: values[0], left: values[0] };
		case 2:
			return { top: values[0], right: values[1], bottom: values[0], left: values[1] };
		case 3:
			return { top: values[0], right: values[1], bottom: values[2], left: values[1] };
		case 4:
			return { top: values[0], right: values[1], bottom: values[2], left: values[3] };
		default:
			throw new Error('Formato de padding inválido');
	}
};

export const fontSizes = {
	xs: '12px',
	sm: '14px',
	md: '16px',
	lg: '18px',
	xl: '20px',
};

export const height = {
	xs: '24px',
	sm: '26px',
	md: '28px',
	lg: '30px',
	xl: '32px',
};
