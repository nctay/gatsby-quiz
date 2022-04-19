import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Text = styled.span<{
  color?: string
  display?: string
  fontWeight?: number
  fontSize?: number
  lineHeight?: number
  textAlign?: 'left' | 'right' | 'center'
}>`
  display: ${({ display }) => display ?? 'inline'};
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight ?? 500};
  font-size: ${({ fontSize }) => (fontSize ? fontSize / 100 : 20 / 100)}rem;
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight / 100 : 24)}rem;
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
  color: ${({ color }) => color ?? '#000000'};
`
export const Typography: React.FC<
  HTMLAttributes<HTMLSpanElement> & {
    color?: string
    display?: string
    fontWeight?: number
    fontSize?: number
    lineHeight?: number
    textAlign?: 'left' | 'right' | 'center'
  }
> = ({ children, display = 'block', ...rest }) => {
  return (
    <Text {...rest} display={display}>
      {children}
    </Text>
  )
}
