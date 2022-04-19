import styled, { css } from 'styled-components'

export type TFlexProps = {
  height?: number | string
  width?: number | string
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | 'inherit' | 'initial' | 'unset'
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
    | 'flex-start'
    | 'flex-end'
  alignContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
  alignItems?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'self-start'
    | 'self-end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
  flexShrink?: number | string
  flexGrow?: number | string
  flex?: string
}
export const Flex = styled.div<TFlexProps>`
  display: flex;
  ${(props) => css`
    ${props.height || typeof props.height === 'number'
      ? `height: ${typeof props.height === 'number' ? `${props.height}px` : props.height};`
      : ''}
    ${props.width || typeof props.width === 'number'
      ? `width: ${typeof props.width === 'number' ? `${props.width}px` : props.width};`
      : ''}
    flex-direction: ${props.flexDirection ?? 'row'};
    ${props.wrap ? `wrap: ${props.wrap};` : ''}
    ${props.justifyContent ? `justify-content: ${props.justifyContent}` : ''};
    ${props.alignContent ? `align-content: ${props.alignContent};` : ''}
    ${props.alignItems ? `align-items: ${props.alignItems}` : ''};
    ${props.flexShrink || typeof props.flexShrink === 'number'
      ? `flex-shrink: ${typeof props.flexShrink === 'number' ? `${props.flexShrink}` : props.flexShrink};`
      : ''}
    ${props.flexGrow || typeof props.flexGrow === 'number'
      ? `flex-grow: ${typeof props.flexGrow === 'number' ? `${props.flexGrow}` : props.flexGrow};`
      : ''}
    ${props.flex ? `flex: ${props.flex};` : ''}
  `}
`
