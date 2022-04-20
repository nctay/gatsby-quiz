import React from 'react'
import { Header } from './Header'
import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  height: 100%;
  @media (max-width: 800px) {
    max-width: 480px;
  }
`
const ContentWrapper = styled.div`
  margin: 0 24px;
  height: 100%;
`
export const Layout: React.FC = ({ children }) => {
  return (
    <Content>
      <ContentWrapper>{children}</ContentWrapper>
    </Content>
  )
}
