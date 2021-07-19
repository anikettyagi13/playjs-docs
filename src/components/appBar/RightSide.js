import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GetAppIcon from '@material-ui/icons/GetApp'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) => ({}))
export default function RightSide() {
  const classes = useStyles()
  return (
    <Grid
      container
      //   item
      justifyContent="flex-end"
      spacing={3}
      //   alignItems="center"
      style={{ marginTop: '1px' }}
    >
      <Grid item>
        <GetAppIcon color="secondary" fontSize="20px" />
      </Grid>
      <Grid item>
        <GitHubIcon color="secondary" fontSize="20px" />
      </Grid>
    </Grid>
  )
}
