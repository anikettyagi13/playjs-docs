import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { StarDumb } from './StarsDumb'

export default function ForthScreen() {
  return (
    <Grid container item xs={12}>
      <Grid
        container
        item
        md={6}
        xs={12}
        className="centerPlace"
        alignContent="center"
      >
        <StarDumb />
      </Grid>
      <Grid container item md={6} xs={12} className="centerPlace2">
        <Grid container item xs={12}>
          <Grid item xs={1}>
            <div id="center_line" className="hide2" />
          </Grid>
          <Grid container item xs={10} alignContent="center">
            <Grid item xs={12} className="text animateText">
              <h2 className="h2 text">
                SVG
                <br />
                MORPHING
              </h2>
              <Typography variant="p" style={{ width: '70%' }}>
                Animating SVGs were never soo easy. Smooth SVG morphing is made
                possible by PLAYjs
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
