import React from 'react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { BoxProps, ResponsiveProps } from '../../types';
import { media } from '../../media/breakpoints';
import type { BreakpointKey } from '../../media/breakpoints';


// Styled component para Box
const StyledBox = styled.div<BoxProps>`
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

  ${media.up('phone')} {
    background-color: ${({ responsive }) => responsive?.phone?.bgcolor || 'transparent'};
    display: ${({ responsive }) => responsive?.phone?.display || 'block'};
    justify-content: ${({ responsive }) => responsive?.phone?.justifyContent || 'flex-start'};
    align-items: ${({ responsive }) => responsive?.phone?.alignItems || 'stretch'};
    flex-direction: ${({ responsive }) => responsive?.phone?.flexDirection || 'row'};
    gap: ${({ responsive }) => responsive?.phone?.gap || '0'};
    padding: ${({ responsive }) => responsive?.phone?.p || '0'};
  }

  ${media.up('tabletPortrait')} {
    background-color: ${({ responsive }) => responsive?.tabletPortrait?.bgcolor || 'transparent'};
    display: ${({ responsive }) => responsive?.tabletPortrait?.display || 'block'};
    justify-content: ${({ responsive }) => responsive?.tabletPortrait?.justifyContent || 'flex-start'};
    align-items: ${({ responsive }) => responsive?.tabletPortrait?.alignItems || 'stretch'};
    flex-direction: ${({ responsive }) => responsive?.tabletPortrait?.flexDirection || 'row'};
    gap: ${({ responsive }) => responsive?.tabletPortrait?.gap || '0'};
    padding: ${({ responsive }) => responsive?.tabletPortrait?.p || '0'};
  }

  ${media.up('tabletLandscape')} {
    background-color: ${({ responsive }) => responsive?.tabletLandscape?.bgcolor || 'transparent'};
    display: ${({ responsive }) => responsive?.tabletLandscape?.display || 'block'};
    justify-content: ${({ responsive }) => responsive?.tabletLandscape?.justifyContent || 'flex-start'};
    align-items: ${({ responsive }) => responsive?.tabletLandscape?.alignItems || 'stretch'};
    flex-direction: ${({ responsive }) => responsive?.tabletLandscape?.flexDirection || 'row'};
    gap: ${({ responsive }) => responsive?.tabletLandscape?.gap || '0'};
    padding: ${({ responsive }) => responsive?.tabletLandscape?.p || '0'};
  }

  ${media.up('desktop')} {
    background-color: ${({ responsive }) => responsive?.desktop?.bgcolor || 'transparent'};
    display: ${({ responsive }) => responsive?.desktop?.display || 'block'};
    justify-content: ${({ responsive }) => responsive?.desktop?.justifyContent || 'flex-start'};
    align-items: ${({ responsive }) => responsive?.desktop?.alignItems || 'stretch'};
    flex-direction: ${({ responsive }) => responsive?.desktop?.flexDirection || 'row'};
    gap: ${({ responsive }) => responsive?.desktop?.gap || '0'};
    padding: ${({ responsive }) => responsive?.desktop?.p || '0'};
  }

  ${media.up('largeDesktop')} {
    background-color: ${({ responsive }) => responsive?.largeDesktop?.bgcolor || 'transparent'};
    display: ${({ responsive }) => responsive?.largeDesktop?.display || 'block'};
    justify-content: ${({ responsive }) => responsive?.largeDesktop?.justifyContent || 'flex-start'};
    align-items: ${({ responsive }) => responsive?.largeDesktop?.alignItems || 'stretch'};
    flex-direction: ${({ responsive }) => responsive?.largeDesktop?.flexDirection || 'row'};
    gap: ${({ responsive }) => responsive?.largeDesktop?.gap || '0'};
    padding: ${({ responsive }) => responsive?.largeDesktop?.p || '0'};
  }

  ${media.up('bigDesktop')} {
    background-color: ${({ responsive }) => responsive?.bigDesktop?.bgcolor || 'transparent'};
    display: ${({ responsive }) => responsive?.bigDesktop?.display || 'block'};
    justify-content: ${({ responsive }) => responsive?.bigDesktop?.justifyContent || 'flex-start'};
    align-items: ${({ responsive }) => responsive?.bigDesktop?.alignItems || 'stretch'};
    flex-direction: ${({ responsive }) => responsive?.bigDesktop?.flexDirection || 'row'};
    gap: ${({ responsive }) => responsive?.bigDesktop?.gap || '0'};
    padding: ${({ responsive }) => responsive?.bigDesktop?.p || '0'};
  }
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
  responsive,
  children,
  ...rest
}) => {

  return (
    (
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
    )
  )
};

Box.displayName = 'Box';
