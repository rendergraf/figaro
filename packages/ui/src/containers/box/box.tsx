// Box.tsx
import React from 'react';
import { styled } from '@linaria/react';
import { BoxProps } from '../../types';

// Styled component para Box
const StyledBox = styled.div<BoxProps>`
  max-width: ${({ maxW }) => maxW || 'none'};
  border-width: ${({ borderWidth }) => borderWidth || '0'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  overflow: ${({ overflow }) => overflow || 'visible'};
  background-color: ${({ bgcolor }) => bgcolor || 'transparent'};
  box-shadow: ${({ boxShadow }) => boxShadow || 'none'};
  padding: ${({ p }) => p || '0'};
  color: ${({ color }) => color || 'black'};
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'};
  align-content: ${({ alignContent }) => alignContent || 'stretch'}; /* Alineación del contenido */
  flex-grow: ${({ flexGrow }) => flexGrow || '0'}; /* Crecimiento del elemento */
  flex-shrink: ${({ flexShrink }) => flexShrink || '1'}; /* Reducción del elemento */
  flex-basis: ${({ flexBasis }) => flexBasis || 'auto'}; /* Tamaño base del elemento */
`;

/**
 * Componente Box.
 * @function Box
 * @param {BoxProps} props - Props del Box.
 * @returns {JSX.Element} El componente Box renderizado.
 */
export const Box: React.FC<BoxProps> = ({
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
  children,
  ...rest
}) => (
  <StyledBox
    as={Component}
    maxW={maxW}
    borderWidth={borderWidth}
    borderRadius={borderRadius}
    overflow={overflow}
    bgcolor={bgcolor}
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
    {...rest}
  >
    {children}
  </StyledBox>
);

Box.displayName = 'Box';
