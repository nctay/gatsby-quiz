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
    appearance: checkbox;
    outline: transparent;
  }
`
const StyledLabel = styled.label`
  line-height: 28px;
  font-size: 14px;
  cursor: pointer;
`
