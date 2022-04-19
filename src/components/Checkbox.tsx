import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

export const Checkbox = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { error?: boolean; errorMessage?: string; label: string }
>(({ error, errorMessage, ...props }, ref) => {
  return (
    <div>
      <input type="checkbox" id={props.label} checked={props.checked} onChange={props.onChange} />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  )
})
