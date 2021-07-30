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

export default function PlayGround({ class1, class2, useSVG }) {
  const classes = useStyles()
  return (
    <>
      {useSVG ? (
        <>
          <svg
            style={{ margin: 'auto' }}
            id="play_icon"
            width="150"
            height="150"
            viewBox="0 0 260 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`${class1}`}
              d="M0 0L260 121.558L0 240L178 121.558L0 0Z"
              fill="#0EDA3B"
            />
          </svg>
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  )
}
