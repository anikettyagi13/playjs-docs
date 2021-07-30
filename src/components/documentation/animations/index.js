/* eslint-disable no-script-url */
import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import AnimationEx from './submenu/AnimationEx'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import { NavigationReference } from '../../../Navigation/NavigationRefrence'
import AvailableAnimations from './submenu/AvailableAnimations'

export default function Animations() {
  return (
    <>
      <Switch>
        <Route
          exact
          path={NavigationReference.Animations.index}
          component={AnimationEx}
        />
        <Route
          exact
          path={NavigationReference.Animations['How To Use']}
          component={AnimationEx}
        />

        <Route
          path={NavigationReference.Animations['Available Animations']}
          component={AvailableAnimations}
        />
      </Switch>
    </>
  )
}
