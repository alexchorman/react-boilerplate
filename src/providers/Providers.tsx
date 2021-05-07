import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import { TasksProvider } from './Tasks'

interface Props {
  children: ReactNode
}

export function Providers(props: Props) {
  return (
    <BrowserRouter>
      <TasksProvider>
        <GlobalStyle />
        {props.children}
      </TasksProvider>
    </BrowserRouter>
  )
}
