import React from 'react';
import { styled } from '@linaria/react';
import { BoxProps, ResponsiveProps } from '../../types';
/* import type { BreakpointKey } from '../../media/breakpoints';
import { media } from '../../media/breakpoints'; */

/* const generateResponsiveStyles = (
	responsive: ResponsiveProps,
	callback: (style: Partial<BoxProps>, key: BreakpointKey) => string
) => {
	return Object.keys(responsive)
		.map((key: BreakpointKey) => {
			const style = responsive?.[key] || {};
			return `
      ${media.up(key)} {
        ${callback(style, key)}
      }
    `;
		})
		.join('');
}; */

// Styled component para Box
const StyledBox = styled.div<BoxProps & { responsive?: ResponsiveProps }>`
	max-width: ${({ maxW }) => maxW || 'none'};
	border-width: ${({ borderWidth }) => borderWidth || '0'};
	border-radius: ${({ borderRadius }) => borderRadius || '0'};
	overflow: ${({ overflow }) => overflow || 'visible'};
	box-shadow: ${({ boxShadow }) => boxShadow || 'none'};
	padding: ${({ p }) => p || '0'};
	color: ${({ color }) => color || 'black'};
	display: ${({ display }) => display || 'block'};
	flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	align-items: ${({ alignItems }) => alignItems || 'stretch'};
	flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
	gap: ${({ gap }) => gap || '0'};
	align-content: ${({ alignContent }) => alignContent || 'stretch'};
	flex-grow: ${({ flexGrow }) => flexGrow || '0'};
	flex-shrink: ${({ flexShrink }) => flexShrink || '1'};
	flex-basis: ${({ flexBasis }) => flexBasis || 'auto'};
	background-color: ${({ bgcolor }) => bgcolor || 'transparent'};

	@media (min-width: 200px) {
		min-height: 480px;
	}
`;

/* 	${({ responsive }) =>
		/* responsive
			/*? generateResponsiveStyles(
					responsive,
					style => `
				background-color: ${style.bgcolor || 'transparent'};
				display: ${style.display || 'block'};
				justify-content: ${style.justifyContent || 'flex-start'};
				align-items: ${style.alignItems || 'stretch'};
				flex-direction: ${style.flexDirection || 'row'};
				gap: ${style.gap || '0'};
				padding: ${style.p || '0'};`
				)
			: ''} */

/**
 * Componente Box.
 * @function Box
 * @param {BoxProps} props - Props del Box.
 * @returns {JSX.Element} El componente Box renderizado.
 */
export const Box: React.FC<BoxProps & { responsive?: ResponsiveProps }> = ({
	component: Component = 'div',
	maxW,
	borderWidth,
	borderRadius,
	overflow,
	bgcolor,
	boxShadow,
	p,
	display,
	flexDirection,
	justifyContent,
	alignItems,
	flexWrap,
	gap,
	alignContent,
	flexGrow,
	flexShrink,
	flexBasis,
	responsive,
	children,
	...rest
}) => {
	return (
		<StyledBox
			as={Component}
			maxW={maxW}
			borderWidth={borderWidth}
			borderRadius={borderRadius}
			overflow={overflow}
			boxShadow={boxShadow}
			p={p}
			display={display}
			flexDirection={flexDirection}
			justifyContent={justifyContent}
			alignItems={alignItems}
			flexWrap={flexWrap}
			gap={gap}
			alignContent={alignContent}
			flexGrow={flexGrow}
			flexShrink={flexShrink}
			flexBasis={flexBasis}
			responsive={responsive}
			bgcolor={bgcolor}
			{...rest}
		>
			{children}
		</StyledBox>
	);
};

Box.displayName = 'Box';
