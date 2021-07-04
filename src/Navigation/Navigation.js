import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import Documentation from '../components/documentation/Documentation'
export default function Navigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/documentation" component={Documentation} />
      </Switch>
    </Router>
  )
}
