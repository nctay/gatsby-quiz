import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Typography } from './Typography'
import { Flex } from './Flex'

export const Checkbox = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { error?: boolean; errorMessage?: string; label: string }
>(({ error, errorMessage, ...props }, ref) => {
  return (
    <Flex alignItems="center" style={{ cursor: 'pointer' }}>
      <StyledInput type="checkbox" id={props.label} checked={props.checked} onChange={props.onChange} />
      <StyledLabel htmlFor={props.label}>{props.label}</StyledLabel>
    </Flex>
  )
})

const StyledInput = styled.input`
  margin-right: 10px;
  height: 24px;
  width: 24px;
  background: #ffffff;
  outline: 0.01rem solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  appearance: none;
  cursor: pointer;
  :hover {
    outline: 0.01rem solid rgba(0, 0, 0, 0.2);
  }

  :focus {
    outline: 0.01rem solid rgba(0, 0, 0, 0.3);
  }
  :checked {
    appearance: auto;
    outline: none;
  }
`
const StyledLabel = styled.label`
  line-height: 0.28rem;
  font-size: 0.16rem;
  cursor: pointer;
`
