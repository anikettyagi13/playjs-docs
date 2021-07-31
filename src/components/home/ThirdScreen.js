import { Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function ThirdScreen() {
  return (
    <Grid container item xs={12}>
      <Grid container item md={6} xs={12} className="hide2">
        <Grid container item xs={12}>
          <Grid
            container
            item
            xs={10}
            alignContent="center"
            className="centerPlace3 animateText"
            style={{
              width: '80%',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Grid
              container
              item
              style={{ width: '80%', justifyContent: 'center' }}
            >
              <h2 className="h2">
                CSS
                <br />
                TRANSITIONS
              </h2>
            </Grid>

            <Typography
              variant="p"
              style={{ width: '80%', justifyContent: 'center' }}
            >
              Animating multiple elements, with CSS Transitions and properties
              made easy. Animations are now as easy as defining start and end to
              the elements.
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <div id="center_line" className="hide2" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={6}>
        <div className="block" />
      </Grid>
      <Grid
        container
        item
        md={6}
        xs={12}
        className="unhide2"
        style={{ marginTop: '40px' }}
      >
        <Grid container item xs={12}>
          <Grid
            container
            item
            xs={12}
            alignContent="center"
            className="centerPlace3 animateText"
            style={{
              width: '100%',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Grid container item xs={12} style={{ justifyContent: 'center' }}>
              <h2 className="h2">
                CSS
                <br />
                TRANSITIONS
              </h2>
            </Grid>

            <Typography variant="p" style={{ width: '80%' }}>
              Animating multiple elements, with CSS Transitions and properties
              made easy. Animations are now as easy as defining start and end to
              the elements.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
