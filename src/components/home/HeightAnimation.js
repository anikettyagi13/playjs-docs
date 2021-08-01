import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  red: {
    backgroundColor: theme.palette.red.main,
    width: '50px',
    height: '50px',
    margin: 'auto',
    borderRadius: ' 0 0 25px 25px',
  },
  yellow: {
    backgroundColor: theme.palette.yellow.main,
    width: '50px',
    height: '50px',
    margin: 'auto',
    borderRadius: ' 0 0 25px 25px',
  },
  heightRequired: {
    minHeight: '250px',
    // borderTop: '1px solid #dedede',
    // borderLeft: '1px solid #dedede',
  },
}))

export default function HeightAnimation() {
  const classes = useStyles()
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      className={classes.heightRequired}
      //   alignContent="flex-end"
    >
      <Grid item>
        <div className={`${classes.red} animateBlock `}></div>
      </Grid>
      <Grid item>
        <div className={`${classes.yellow} animateBlock `}></div>
      </Grid>
      <Grid item>
        <div className={`${classes.red} animateBlock `}></div>
      </Grid>
      <Grid item>
        <div className={`${classes.yellow} animateBlock `}></div>
      </Grid>
      <Grid item>
        <div className={`${classes.red} animateBlock `}></div>
      </Grid>
    </Grid>
  )
}
