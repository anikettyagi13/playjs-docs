/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-script-url */
import { Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import AnimationFunction from './submenu/AnimationFunction'
import Iteration from './submenu/Iteration'
import Play from './submenu/Play'
import ReturnToInitial from './submenu/ReturnToInitial'
import Threshold from './submenu/Threshold'
import WhenVisible from './submenu/When Visible'

export default function Properties() {
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
            <Typography variant="h1">Properties</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">
              {' '}
              We provide a variety of Properties to make important decisions on
              animations, like when to start, iteration count and many more
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          item
          id="Iteration"
          style={{ marginBottom: '20px' }}
        >
          <Iteration />
        </Grid>
        <Grid
          container
          xs={12}
          item
          id="WhenVisible"
          style={{ marginBottom: '20px' }}
        >
          <WhenVisible />
        </Grid>
        <Grid container xs={12} item id="Threshold">
          <Threshold />
        </Grid>
        <Grid container xs={12} item id="ReturnToInitial">
          <ReturnToInitial />
        </Grid>
        <Grid container xs={12} item id="Play">
          <Play />
        </Grid>
        <Grid container xs={12} item id="AnimationFunction">
          <AnimationFunction />
        </Grid>
      </Grid>
    </>
  )
}
