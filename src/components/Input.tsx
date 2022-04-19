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
>(({ error, errorMessage, mask, ...props }, ref) => {
  return (
    <Flex flexDirection="column" flex="1 1 0">
      {/* @ts-ignore*/}
      <StyledInput mask={mask ?? Array(255).fill(/.*/)} guide={false} {...props} error={error} />
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
    </Flex>
  )
})

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

  ::placeholder {
    color: #888889;
  }

  :hover {
    border: ${({ error }) => (error ? '1px solid rgba(255, 0, 0, 0.9)' : '1px solid rgba(0, 0, 0, 0.2)')};
  }

  :focus {
    border: ${({ error }) => (error ? '1px solid rgba(255, 0, 0, 0.9)' : '1px solid rgba(0, 0, 0, 0.3)')};
  }

  ::-webkit-input-placeholder:after {
    content: '*';
    color: red;
    vertical-align: top;
    font-size: 10px;
  }
`

const ErrorMessage = styled.div``
