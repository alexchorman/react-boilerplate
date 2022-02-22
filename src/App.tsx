import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './pages/Home'
import { Providers } from './providers'

export function App() {
  return (
    <Providers>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </Providers>
  )
}
