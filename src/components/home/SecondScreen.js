import { Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function SecondScreen() {
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
        <svg
          className="svg"
          width="300"
          height="300"
          viewBox="0 0 414 374"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="loading_path_1"
            d="M414 187C414 290.277 321.323 374 207 374C92.6771 374 0 290.277 0 187C0 83.7228 92.6771 0 207 0C321.323 0 414 83.7228 414 187ZM136.429 187C136.429 222.21 168.025 250.752 207 250.752C245.975 250.752 277.571 222.21 277.571 187C277.571 151.79 245.975 123.248 207 123.248C168.025 123.248 136.429 151.79 136.429 187Z"
            fill="#F4A261"
          />
          <path
            id="loading_path_2"
            d="M414 187C414 290.277 321.323 374 207 374C92.6771 374 0 290.277 0 187C0 83.7228 92.6771 0 207 0C321.323 0 414 83.7228 414 187ZM87.2223 187C87.2223 246.76 140.849 295.205 207 295.205C273.151 295.205 326.778 246.76 326.778 187C326.778 127.24 273.151 78.795 207 78.795C140.849 78.795 87.2223 127.24 87.2223 187Z"
            fill="#1A2F38"
          />
        </svg>
      </Grid>
      <Grid container item md={6} xs={12} className="centerPlace2">
        <Grid container item xs={12}>
          <Grid item xs={1}>
            <div id="center_line" className="hide2" />
          </Grid>
          <Grid container item xs={10} alignContent="center">
            <Grid item xs={12} className="text animateText">
              <h2 className="h2 text">
                COOL
                <br />
                ANIMATIONS
              </h2>
              <Typography variant="p" style={{ width: '70%' }}>
                Animations are getting more and more important in websites.
                <br />
                <br />
                PlayJS is a powerful JavaScript animation library, which takes
                care of the nitty gritty of animations and provides you with a
                simple easy to use INTERFACE.
                <br />
                <br /> PlayJS helps to animate <strong>
                  DOM elements
                </strong> , <strong> CSS properties</strong> and
                <strong> SVGs</strong>.{' '}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
