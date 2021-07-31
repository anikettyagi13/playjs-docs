import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GetAppIcon from '@material-ui/icons/GetApp'
import GitHubIcon from '@material-ui/icons/GitHub'
import { NavigationReference } from '../../Navigation/NavigationRefrence'
import { Link } from 'react-router-dom'

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
        <Link to={NavigationReference.download}>
          <GetAppIcon color="secondary" fontSize="20px" />
        </Link>
      </Grid>
      <Grid item>
        <a href={NavigationReference.github}>
          <GitHubIcon color="secondary" fontSize="20px" />
        </a>
      </Grid>
    </Grid>
  )
}
