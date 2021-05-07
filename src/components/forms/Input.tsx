import React, { InputHTMLAttributes, useCallback } from 'react'
import styled from 'styled-components'
import { Colors } from '../../constants'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string
  onChange(newValue: string): void
}

const Label = styled.label`
  color: ${Colors.Gray};
  min-width: 100px;
  display: inline-block;
`

const Input = ({ label, onChange, className, ...props }: InputProps) => {
  const wrappedOnChange = useCallback((e) => onChange(e.target.value), [])
  return (
    <div className={className}>
      {label && <Label>{label}</Label>}
      <input type='text' {...props} onChange={wrappedOnChange}/>
    </div>
  )
}

export const styledInput = styled(Input)`
  input {
    height: 30px;
    color: ${Colors.Gray}
  }
  margin-bottom: 5px;
`

export {styledInput as Input}
