import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const QuizAnswer: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 0.5rem;
  font-size: 0.14rem;
  line-height: 0.17rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  padding: 0.1rem 0.15rem;
  text-align: center;
  cursor: pointer;
  transition: all 300ms;
  user-select: none;
  width: 100%;
  background: #ffffff;
  border: 0.01rem solid rgba(0, 0, 0, 0.1);
  :hover,
  :active,
  :focus {
    background: royalBlue;
    color: #fff;
  }
`

export default QuizAnswer
