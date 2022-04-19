import React from 'react'
import styled from 'styled-components'

export type SpacerProps = {
  width?: number | string
  height?: number | string
  grow?: number
  shrink?: number
}
const InnerSpacer = styled.div<SpacerProps>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width || '1px')};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height || '1px')};
  flex-grow: ${({ grow }) => grow};
  flex-shrink: ${({ shrink }) => shrink ?? 0};
`
export const Spacer: React.FC<SpacerProps> = (props) => <InnerSpacer {...props} />
