import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import { NavigationReference } from './NavigationRefrence'
import Layout from '../components/appBar'
import Download from '../Download'
export default function Navigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path={NavigationReference.home} component={Home}></Route>
        <Route path={NavigationReference.documentation} component={Layout} />
        <Route path={NavigationReference.download} component={Download} />
      </Switch>
    </Router>
  )
}
