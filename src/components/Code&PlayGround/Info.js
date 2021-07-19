import { Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function Info({ info }) {
  return (
    <Grid item xs={12} className="play-info">
      <Typography variant="subtitle2">NOTE-: {info}</Typography>
    </Grid>
  )
}
