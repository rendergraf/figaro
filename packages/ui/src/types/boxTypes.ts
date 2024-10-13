import { CSSProperties } from 'react';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
	component?: keyof JSX.IntrinsicElements; // Permite especificar el tipo de elemento HTML
	maxW?: string; // Ancho máximo
	borderWidth?: string; // Ancho del borde
	borderRadius?: string; // Radio del borde
	overflow?: CSSProperties['overflow']; // Controla el desbordamiento
	bgcolor?: string; // Color de fondo
	boxShadow?: string; // Sombra de la caja
	p?: string; // Padding
    color?: string; // Color del texto
    display?: React.CSSProperties['display']; // Propiedad display
    flexDirection?: React.CSSProperties['flexDirection']; // Dirección del flex
    justifyContent?: React.CSSProperties['justifyContent']; // Justificación del contenido
    alignItems?: React.CSSProperties['alignItems'];
    flexWrap?: React.CSSProperties['flexWrap'];
    gap?: string;
    alignContent?: React.CSSProperties['alignContent'];
    flexGrow?: React.CSSProperties['flexGrow'];
    flexShrink?: React.CSSProperties['flexShrink'];
    flexBasis?: React.CSSProperties['flexBasis'];
}