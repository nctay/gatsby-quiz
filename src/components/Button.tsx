import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  min-height: 0.45rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background: #1545ec;
  border-radius: 90px;
  font-size: 0.16rem;
  line-height: 0.2rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: #fff;
  text-align: center;
  border: none;
  outline: none;
  margin: 0 auto;
  text-decoration: none;
  position: relative;
  transition: background 0.2s, box-shadow 0.15s;
  padding: 14px 44px;

  ::before {
    display: none;
    content: '';
    width: 120%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    left: -10%;
    filter: brightness(2);
    transition: transform 0.35s, box-shadow 0.35s;
  }

  :hover,
  :focus {
    cursor: pointer;
  }
  :active {
    cursor: pointer;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.25);
    transform: translateY(1px);
  }
  :disabled {
    background: #ccc;
    box-shadow: 0 0 0 #7a2d15;
  }
  span {
    align-self: center;
  }
`
export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <Wrapper {...props} />
}
