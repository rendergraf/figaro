import { css } from '@linaria/core';

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
	surface: `var(--button-${name}-surface)`,
	text: `var(--button-${name}-text)`,
	hover: `color-mix(in srgb, var(--button-${name}-surface) 85%, var(--color-transparent))`,
	borderColor: `var(--button-${name}-borderColor)`,
});

export const variantNames: VariantName[] = [
	'primary',
	'secondary',
	'tertiary',
	'neutral',
	'success',
	'warning',
	'error',
	'info',
];

export const variantsButton = variantNames.reduce(
	(acc, name) => {
		acc[name] = createVariantButton(name);
		return acc;
	},
	{} as Record<(typeof variantNames)[number], Variant>
);

export const variantsInput = variantNames.reduce(
	(acc, name) => {
		acc[name] = createVariantInput(name);
		return acc;
	},
	{} as Record<(typeof variantNames)[number], Variant>
);

type VariantKeys = keyof typeof variantsButton & keyof typeof variantsInput;

export const getColorTheme = ({
	inv = false,
	variant = 'primary',
	light,
	dark,
}: {
	variant?: VariantKeys;
	light?: string;
	dark?: string;
	inv?: boolean;
} = {}): string => {
	const variantStyles = variantsButton[variant];

	const lightColor = light ? `var(${light})` : variantStyles.surface;
	const darkColor = dark ? `var(${dark})` : variantStyles.text;

	return inv ? `light-dark(${darkColor} , ${lightColor})` : `light-dark(${lightColor} , ${darkColor})`;
};

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
	xs: 'var(--font-size-xs)',
	sm: 'var(--font-size-sm)',
	md: 'var(--font-size-md)',
	lg: 'var(--font-size-lg)',
	xl: 'var(--font-size-xl)',
};

export const height = {
	xs: '24px',
	sm: '26px',
	md: '28px',
	lg: '30px',
	xl: '32px',
};

export const FlexMixin = (
	options: {
		direction?: string;
		justify?: string;
		align?: string;
		wrap?: string | boolean;
		gap?: string;
	} = {}
): string => {
	const { direction, justify, align, wrap, gap } = options;

	let styles = 'display: flex;\n';

	if (direction) {
		styles += `flex-direction: ${direction};\n`;
	}

	if (justify) {
		styles += `justify-content: ${justify};\n`;
	}

	if (align) {
		styles += `align-items: ${align};\n`;
	}

	if (typeof wrap === 'boolean') {
		styles += wrap ? 'flex-wrap: wrap;\n' : 'flex-wrap: nowrap;\n';
	} else if (wrap) {
		styles += `flex-wrap: ${wrap};\n`;
	}

	if (gap) {
		styles += `gap: ${gap};\n`;
	}

	return styles;
};

export const FontMixin = (
	options: {
		size?: string;
		height?: string;
		weight?: string;
	} = {}
): string => {
	const { size, height, weight } = options;

	let styles = '';

	if (size) {
		styles += `font-size: ${size};\n`;
	}

	if (height) {
		styles += `line-height: ${height};\n`;
	}

	if (weight) {
		styles += `font-weight: ${weight};\n`;
	}

	return styles;
};

interface MarginOptions {
	all?: string;
	x?: string;
	y?: string;
	bottom?: string;
	left?: string;
	right?: string;
	top?: string;
}

export const MarginMixin = (options: MarginOptions = {}): string => {
	const { all = 'initial', x = all, y = all, bottom = y, left = x, right = x, top = y } = options;

	let styles = '';

	styles += `margin-block-end: ${bottom};\n`;
	styles += `margin-block-start: ${top};\n`;
	styles += `margin-inline-end: ${right};\n`;
	styles += `margin-inline-start: ${left};\n`;

	// Soporte para navegadores antiguos
	styles += `
	@supports not (margin-block-end: 1rem) {
			margin-bottom: ${bottom};
			margin-left: ${left};
			margin-right: ${right};
			margin-top: ${top};
	}
	`;

	return styles;
};

// Define la interfaz para las opciones de Padding
interface PaddingOptions {
	all?: string;
	x?: string;
	y?: string;
	bottom?: string;
	left?: string;
	right?: string;
	top?: string;
}

// Función para generar los estilos de padding
export const Padding = (options: PaddingOptions = {}): string => {
	const { all = 'initial', x = all, y = all, bottom = y, left = x, right = x, top = y } = options;

	let styles = '';

	styles += `padding-block-end: ${bottom};\n`;
	styles += `padding-block-start: ${top};\n`;
	styles += `padding-inline-end: ${right};\n`;
	styles += `padding-inline-start: ${left};\n`;

	// Soporte para navegadores antiguos
	styles += `
	@supports not (padding-block-end: 1rem) {
			padding-bottom: ${bottom};
			padding-left: ${left};
			padding-right: ${right};
			padding-top: ${top};
	}
	`;

	return styles;
};

// Define la interfaz para las opciones de Position
interface PositionOptions {
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
}

// Función para generar los estilos de posición
export const Position = (options: PositionOptions = {}): string => {
	const { top = 'initial', right = 'initial', bottom = 'initial', left = 'initial' } = options;

	let styles = '';

	styles += `inset-block-end: ${bottom};\n`;
	styles += `inset-block-start: ${top};\n`;
	styles += `inset-inline-end: ${right};\n`;
	styles += `inset-inline-start: ${left};\n`;

	// Compatibilidad con navegadores antiguos
	styles += `
	@supports not (inset-block-end: ${bottom}) {
			bottom: ${bottom};
	}

	@supports not (inset-block-start: ${top}) {
			top: ${top};
	}

	@supports not (inset-block: ${top}) {
			bottom: ${bottom};
			top: ${top};
	}

	@supports not (inset-inline-end: ${left}) {
			left: ${left};
	}

	@supports not (inset-inline-end: ${right}) {
			right: ${right};
	}

	@supports not (inset-inline: ${left}) {
			left: ${left};
			right: ${right};
	}
	`;

	return styles;
};

// Define la interfaz para las opciones de Size
interface SizeOptions {
	height?: string;
	maxHeight?: string;
	maxWidth?: string;
	minHeight?: string;
	minWidth?: string;
	width?: string;
}

// Función para generar los estilos de tamaño
export const Size = (options: SizeOptions = {}): string => {
	const {
		height = 'auto',
		maxHeight = 'none',
		maxWidth = 'none',
		minHeight = 'auto',
		minWidth = 'auto',
		width = 'auto',
	} = options;

	let styles = '';

	styles += `block-size: ${height};\n`;
	styles += `inline-size: ${width};\n`;
	styles += `max-block-size: ${maxHeight};\n`;
	styles += `max-inline-size: ${maxWidth};\n`;
	styles += `min-block-size: ${minHeight};\n`;
	styles += `min-inline-size: ${minWidth};\n`;

	// Compatibilidad con navegadores antiguos
	styles += `
	@supports not (block-size: 1rem) {
			height: ${height};
			max-height: ${maxHeight};
			min-height: ${minHeight};
	}

	@supports not (inline-size: 1rem) {
			width: ${width};
			max-width: ${maxWidth};
			min-width: ${minWidth};
	}
	`;

	return styles;
};

// Define la interfaz para las opciones de BorderRadius
interface BorderRadiusOptions {
	all?: string;
	topLeft?: string;
	topRight?: string;
	bottomLeft?: string;
	bottomRight?: string;
}

// Función para generar los estilos de border-radius
export const BorderRadius = (options: BorderRadiusOptions = {}): string => {
	const { all = '0', topLeft = all, topRight = all, bottomLeft = all, bottomRight = all } = options;

	let styles = '';

	styles += `border-end-end-radius: ${bottomRight};\n`;
	styles += `border-end-start-radius: ${bottomLeft};\n`;
	styles += `border-start-end-radius: ${topRight};\n`;
	styles += `border-start-start-radius: ${topLeft};\n`;

	// Compatibilidad con navegadores antiguos
	styles += `
	@supports not (border-end-end-radius: 1px) {
			border-bottom-left-radius: ${bottomLeft};
			border-bottom-right-radius: ${bottomRight};
			border-top-left-radius: ${topLeft};
			border-top-right-radius: ${topRight};
	}
	`;

	return styles;
};

// Define la interfaz para las opciones de Border
interface BorderOptions {
	all?: string;
	x?: string;
	y?: string;
	bottom?: string;
	left?: string;
	right?: string;
	top?: string;
}

// Función para generar los estilos de border
export const Border = (options: BorderOptions = {}): string => {
	const { all = 'none', x = all, y = all, bottom = y, left = x, right = x, top = y } = options;

	let styles = '';

	styles += `border-block-end: ${bottom};\n`;
	styles += `border-block-start: ${top};\n`;
	styles += `border-inline-end: ${right};\n`;
	styles += `border-inline-start: ${left};\n`;

	// Compatibilidad con navegadores antiguos
	styles += `
	@supports not (border-block-end: 1px solid transparent) {
			border-bottom: ${bottom};
			border-left: ${left};
			border-right: ${right};
			border-top: ${top};
	}
	`;

	return styles;
};

// Clase base para display flex
export const flex = css`
	display: flex;
`;

// Clase para dirección de flex
export const flexRow = css`
	flex-direction: row;
`;

// Clase para alineación de elementos
export const itemsStretch = css`
	align-items: stretch;
`;

// Clase para justificar el contenido
export const justifyStart = css`
	justify-content: flex-start;
`;

// Clase para no envolver el contenido
export const flexNowrap = css`
	flex-wrap: nowrap;
`;

export const BoxShadow = css`
	box-shadow:
		0 0 2px var(--color-black-higher),
		0 8px 12px -12px var(--color-black-higher);
`;

export const BoxShadowHover = css`
	transition: box-shadow 0.2s cubic-bezier(0.25, 0.8, 0.25, 0.1) 0.1s;

	&:hover {
		box-shadow:
			0 0 2px var(--color-black-higher),
			0 12px 16px -12px var(--color-black-higher);
	}
`;

export const BoxShadowWithHover = css`
	${BoxShadow}
	${BoxShadowHover}
`;

interface GridOptions {
	cols?: number;
	gap?: string;
}

export const GridMixin = (options: GridOptions = {}): string => {
	const { cols = 1, gap = '0' } = options;

	let styles = '';

	styles += `display: grid;\n`;
	styles += `grid-template-columns: repeat(${cols}, 1fr);\n`;

	styles += `gap: ${gap};\n`;

	return styles;
};
