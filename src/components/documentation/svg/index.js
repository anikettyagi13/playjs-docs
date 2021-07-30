/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-script-url */
import { Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import SVGMORPHING from './submenu/svgMorphing'
export default function SVG() {
  function smoothScrollTo(target) {
    console.log(target)
    document.querySelector(target).scrollIntoView({
      behaviour: 'smooth',
    })
  }
  function getIfSmoothScrollInitially() {
    try {
      if (window.location.href.split('-')[1].split('/')[4]) {
        smoothScrollTo(`#${window.location.href.split('-')[1].split('/')[4]}`)
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
      <Grid container xs={12}>
        <Grid
          container
          spacing={3}
          item
          xs={12}
          justifyContent="center"
          style={{ marginBottom: '20px' }}
        >
          <Grid item xs={12}>
            <Typography variant="h1">SVG</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">
              {' '}
              SVGs are used to make the website more beautiful and for a better
              user experience.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          item
          id="svgMorphing"
          style={{ marginBottom: '20px' }}
        >
          <SVGMORPHING />
        </Grid>
      </Grid>
    </>
  )
}
