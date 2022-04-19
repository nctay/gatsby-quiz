import styled from 'styled-components'

export const Hide = styled.div<{ isHiding: boolean }>`
  width: 100%;
  height: ${({ isHiding }) => (isHiding ? 0 : 'auto')};
  opacity: ${({ isHiding }) => (isHiding ? 0 : 1)};
  overflow: hidden;
  transition: opacity 0.1s ease-in-out;
`
