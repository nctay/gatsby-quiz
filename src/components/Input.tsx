import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Typography } from './Typography'

export const Input = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { error?: boolean; errorMessage?: string }
>(({ error, errorMessage, ...props }, ref) => {
  return (
    <div>
      <StyledInput {...props} error={error} />
      {errorMessage && (
        <Typography fontSize={12} fontWeight={14} color="tomato" display="block" textAlign="center">
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})

const StyledInput = styled.input<{ error?: boolean }>`
  border: ${({ error }) => (error ? '1px solid tomato' : '1px solid #000000')};
  box-shadow: ${({ error }) => (error ? '0 4px 4px rgba(255,100,70,0.25)' : '0 4px 4px rgba(0, 0, 0, 0.25)')};
  background: #fbfbfb;
  border-radius: 10px;
  display: block;
  width: 100%;
  max-width: 275px;
  margin: 0 auto;
  padding: 15px;
  text-align: center;
  outline: none;
  font-size: 14px;
  line-height: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
`

const ErrorMessage = styled.div``
