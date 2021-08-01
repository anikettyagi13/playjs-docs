import { Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function ERROR() {
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      alignContent="center"
      style={{ height: '70vh' }}
    >
      <div style={{ marginTop: '50px' }}></div>
      <Grid container item xs={12} justifyContent="center">
        <h1 style={{ fontSize: '100px' }}>404</h1>
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <Typography variant="h3"> PAGE NOT FOUND</Typography>
      </Grid>

      <svg
        width="210"
        height="240"
        viewBox="0 0 240 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          opacity: '0.4',
          //   marginTop: '-50px',
          zIndex: '-1',
          position: 'absolute',
        }}
      >
        <path d="M240 0L118.442 260L0 0L118.442 77L240 0Z" fill="#0EDA3B" />
      </svg>
    </Grid>
  )
}
