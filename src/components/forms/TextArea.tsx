import React, { TextareaHTMLAttributes, useCallback } from 'react'
import styled from 'styled-components'
import { Colors } from '../../constants'

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label?: string
  onChange(newValue: string): void
}

const Label = styled.label`
  color: ${Colors.Gray};
  min-width: 100px;
  display: inline-block;
`

const TextArea = ({ label, onChange, className, ...props }: TextAreaProps) => {
  const wrappedOnChange = useCallback((e) => onChange(e.target.value), [])
  return (
    <div className={className}>
      {label && <Label>{label}</Label>}
      <textarea {...props} onChange={wrappedOnChange}/>
    </div>
  )
}

export const styledTextArea = styled(TextArea)`
  textarea {
    width: 250px;
    color: ${Colors.Gray}
  }
  margin-bottom: 15px;
`

export {styledTextArea as TextArea}
