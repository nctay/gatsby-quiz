import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Typography } from './Typography'
import { Flex } from './Flex'
import MaskedInput, { MaskedInputProps } from 'react-text-mask'

export const Input = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { error?: boolean; errorMessage?: string } & {
    mask?: MaskedInputProps['mask']
  }
>(({ error, errorMessage, mask, placeholder, required, ...props }, ref) => {
  return (
    <Wrapper flexDirection="column" flex="1 1 0">
      <StyledInput
        placeholder=" "
        mask={mask ?? Array(100).fill(/.*/)}
        guide={false}
        {...props}
        error={error}
      />
      <Placeholder>
        {placeholder}
        {required && <Asterisk>{' *'}</Asterisk>}
      </Placeholder>
      {errorMessage && (
        <Typography
          fontSize={12}
          lineHeight={14}
          color="red"
          display="block"
          textAlign="center"
          style={{ width: '100%' }}
        >
          {errorMessage}
        </Typography>
      )}
    </Wrapper>
  )
})

const Asterisk = styled.span`
  color: #e36666;
`
const Placeholder = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  height: 48px;
  left: 21px;
  margin: auto;
  color: #888889;
  font-size: 16px;
  line-height: 48px;
`
const Wrapper = styled(Flex)`
  position: relative;
  input:not(:placeholder-shown) + ${Placeholder} {
    display: none;
  }
`
const StyledInput = styled(MaskedInput)<{ error?: boolean }>`
  height: 48px;
  width: 100%;
  font-size: 16px;
  line-height: 28px;
  background: #ffffff;
  border: 0.01rem solid rgba(0, 0, 0, 0.1);
  border: ${({ error }) => (error ? '1px solid rgba(255, 0, 0, 0.9)' : '1px solid rgba(0, 0, 0, 0.1)')};
  box-sizing: border-box;
  border-radius: 10px;
  padding: 15px 20px;
  outline: none;

  :hover {
    border: ${({ error }) => (error ? '1px solid rgba(255, 0, 0, 0.9)' : '1px solid rgba(0, 0, 0, 0.2)')};
  }

  :focus {
    border: ${({ error }) => (error ? '1px solid rgba(255, 0, 0, 0.9)' : '1px solid rgba(0, 0, 0, 0.3)')};
  }
`

const ErrorMessage = styled.div``
