import { Button, Divider, Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import TargetArrays from './TargetArrays/TargetArrays'
import TargetStrings from './TargetStrings/TargetStrings'

export default function Targets() {
  function smoothScrollTo(target) {}
  return (
    <Grid container xs={12}>
      <Grid
        container
        spacing={3}
        item
        xs={12}
        justifyContent="center"
        // style={{ textAlign: 'center' }}
      >
        <Grid item xs={12}>
          <Typography variant="h1">SELECTING TAGETS</Typography>
        </Grid>
        {/* <Divider /> */}
        <Grid item xs={12}>
          <Typography variant="h3">
            {' '}
            We define targets as objects that are meant to be selected for
            further <em>ANIMATIONS</em>. There are two types of selectors
            available to us in PLAYJS.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ul>
            <li>
              {' '}
              <Typography variant="h6">
                {' '}
                <a
                  onClick={(e) => smoothScrollTo('Strings')}
                  href="#Strings"
                  style={{ color: '#F4A261', cursor: 'pointer' }}
                >
                  STRINGS
                </a>
              </Typography>
            </li>
            <li>
              {' '}
              <Typography variant="h6">
                {' '}
                <a
                  id="link"
                  href="#Arrays"
                  style={{ color: '#F4A261', cursor: 'pointer' }}
                >
                  ARRAYS
                </a>
              </Typography>
            </li>
          </ul>
        </Grid>
        {/* <br /> */}
      </Grid>
      <Grid
        container
        xs={12}
        item
        id="Strings"
        style={{ marginBottom: '20px' }}
      >
        <TargetStrings />
      </Grid>
      <Grid container xs={12} item id="Arrays">
        <TargetArrays />
      </Grid>
    </Grid>
  )
}
