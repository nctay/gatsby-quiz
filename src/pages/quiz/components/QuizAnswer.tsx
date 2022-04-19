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
  margin-bottom: 0.15rem;
  background: #e9e9e9;
  border-radius: 0.1rem;
  box-shadow: 0 0.04rem 0.04rem rgba(0, 0, 0, 0.25);
  border: 0.01rem solid #000000;
  padding: 0.05rem 0.15rem;
  text-align: center;
  cursor: pointer;
  transition: all 300ms;
  user-select: none;
  width: 100%;
  :hover,
  :active,
  :focus {
    background: royalBlue;
    color: #fff;
  }
  :active {
    box-shadow: 0rem 0rem 0rem rgba(0, 0, 0, 0.25);
    transform: translateY(0.01rem);
  }
`

export default QuizAnswer
