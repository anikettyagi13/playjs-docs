import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  playground: {
    display: 'grid',
    margin: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'relative',
  },
  div: {
    // position: 'absolute',
    borderRadius: '5px',
    height: '50px',
    width: '50px',
    textAlign: 'center',
    display: 'grid',
    alignItems: 'center',
  },
  yellow: {
    backgroundColor: '#ECCE83',
  },
  red: {
    backgroundColor: '#E76F51',
  },
}))

export default function PlayGround({ class1, class2 }) {
  const classes = useStyles()
  return (
    <div className={classes.playground}>
      <div className={`${classes.div} ${classes.red} ${class2}`}>
        <Typography variant="subtitle1">.red</Typography>
      </div>
      <div className={`${classes.div} ${classes.yellow} ${class1}`}>
        <Typography variant="subtitle1">.yellow</Typography>
      </div>
      <div className={`${classes.div} ${classes.yellow} ${class1}`}>
        <Typography variant="subtitle1">.yellow</Typography>
      </div>
    </div>
  )
}
