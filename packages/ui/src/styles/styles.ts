/* export const appearances = {
	outline: {
		borderBottomWidth: '1px',
		borderTheRest: '1px',
	},
	filled: {
		borderBottomWidth: '1px',
		borderTheRest: '1px',
	},
	flushed: {
		borderBottomWidth: '1px',
		borderTheRest: '0px',
	},
}; */

export const createAppearance = (borderBottomWidth: string, borderTheRest: string) => ({
	borderBottomWidth,
	borderTheRest,
});

export const appearances = {
	outline: createAppearance('1px', '1px'),
	filled: createAppearance('1px', '1px'),
	flushed: createAppearance('1px', '0px'),
};

export const createVariant = (name: string) => ({
	surface: `var(--button-${name}-surface)`,
	text: `var(--button-${name}-text)`,
	hover: `color-mix(in srgb, var(--button-${name}-surface) 10%, var(--color-transparent))`,
});

export const variants = {
	primary: createVariant('primary'),
	secondary: createVariant('secondary'),
	tertiary: createVariant('tertiary'),
	neutral: createVariant('neutral'),
	success: createVariant('success'),
	warning: createVariant('warning'),
	error: createVariant('error'),
	info: createVariant('info'),
};

export const createPaddingSizes = (padding: string) => {
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

export const paddingSizes = {
	xs: createPaddingSizes('2px 4px'),
	sm: createPaddingSizes('3px 6px'),
	md: createPaddingSizes('4px 8px'),
	lg: createPaddingSizes('6px 12px'),
	xl: createPaddingSizes('8px 16px'),
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
