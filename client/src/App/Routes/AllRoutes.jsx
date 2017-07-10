import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { routes } from './_routes'

function NoMatch() {
  return <Redirect to={{ pathname: '/' }} />
}

function Routes() {
  return (
    <Switch>
      {routes.map((route, i) => <Route {...route} key={i} exact />)}
      <Route component={NoMatch} />
    </Switch>
  )
}

export default Routes
