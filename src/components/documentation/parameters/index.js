/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-script-url */
import { Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import Duration from './submenu/Duration'
import Delay from './submenu/Delay'
import Late from './submenu/Late'
import EndDelay from './submenu/EndDelay'
import Direction from './submenu/Direction'
export default function Parameters() {
  function smoothScrollTo(target) {
    document.querySelector(target).scrollIntoView({
      behaviour: 'smooth',
    })
  }
  function getIfSmoothScrollInitially() {
    try {
      if (window.location.href.split('-')[1].split('/')[4]) {
        smoothScrollTo(`#${window.location.href.split('-')[1].split('/')[4]}`)
      } else {
        smoothScrollTo('#top')
      }
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    getIfSmoothScrollInitially()
  }, [window.location.href])
  return (
    <>
      <Grid container xs={12} id="top">
        <Grid
          container
          spacing={3}
          item
          xs={12}
          justifyContent="center"
          style={{ marginBottom: '20px' }}
        >
          <Grid item xs={12}>
            <Typography variant="h1">Parameters</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">
              {' '}
              We provide a variety of parameters which are used to tell stories
              and communicate emotions and ideas in a unique, easy-to-perceive
              way that all can relate to and understand your perspective.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          item
          id="Duration"
          style={{ marginBottom: '20px' }}
        >
          <Duration />
        </Grid>
        <Grid container xs={12} item id="Delay">
          <Delay />
        </Grid>
        <Grid container xs={12} item id="EndDelay">
          <EndDelay />
        </Grid>
        <Grid container xs={12} item id="Late">
          <Late />
        </Grid>
        <Grid container xs={12} item id="Direction">
          <Direction />
        </Grid>
      </Grid>
    </>
  )
}
