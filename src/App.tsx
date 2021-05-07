import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Add } from './pages/Add'
import { Page, PageContent } from './components'
import { TaskPage } from './pages/TaskPage'

export function App() {
  return (
    <Page>
      <PageContent>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/add' component={Add} />
          <Route exact path='/tasks/:id' component={TaskPage} />
        </Switch>
      </PageContent>
    </Page>
  )
}
