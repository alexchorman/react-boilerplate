import styled from 'styled-components'
import { Colors } from '../../constants'

export const Button = styled.button`
  background: ${Colors.Green};
  border: none;
  border-radius: 10%;
  color: #333;
  padding: 10px;
  cursor: pointer;
  
  &:disabled {
    opacity: 50%;
    cursor: unset;
  }
`
