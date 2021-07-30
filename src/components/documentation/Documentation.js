import { Divider, Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router'
import { NavigationReference } from '../../Navigation/NavigationRefrence'
import theme from '../../Theme'
import Animations from './animations'
import Targets from './targets'
import logo from '../../images/logo.png'
import Parameters from './parameters'
import Properties from './properties'
// import { Redirect } from 'react-router-dom'

export default function Documentation() {
  return (
    <>
      <Switch>
        <Route path={NavigationReference.Targets.index} component={Targets} />
        <Route
          path={NavigationReference.Animations.index}
          component={Animations}
        />
        <Route
          path={NavigationReference.Parameters.index}
          component={Parameters}
        />
        <Route
          path={NavigationReference.Properties.index}
          component={Properties}
        />
      </Switch>
      <Grid container item xs={12} style={{ marginTop: '60px' }}>
        <Divider
          orientation="horizontal"
          style={{ height: '1px', width: '100%' }}
          fullWidth
        />
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: '30px' }}
        >
          <a href={`/playjs-docs#${NavigationReference.home}`}>
            <img
              src={logo}
              alt="PLAY JS"
              style={{ width: '100px', height: '20px' }}
            />
          </a>

          <Typography variant="p" style={{ marginTop: '-10' }}>
            © Aniket Tyagi
          </Typography>
          <a
            href={NavigationReference.Github}
            style={{ marginLeft: '10px', marginTop: '3px' }}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
              alt="Github"
            />
          </a>
        </Grid>
      </Grid>
    </>
  )
}
