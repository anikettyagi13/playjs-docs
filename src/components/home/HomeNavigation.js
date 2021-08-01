import React, { createRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import { NavigationReference } from '../../Navigation/NavigationRefrence'
import GetApp from '@material-ui/icons/GetApp'

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: '#fff',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function HomeNavigation() {
  const classes = useStyles()
  const homeRef = createRef(null)
  function homePush() {
    console.log('asdas')
    homeRef.current.click()
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color} elevation={3}>
        <Toolbar>
          <svg
            width="25"
            height="25"
            viewBox="0 0 46 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              homePush()
            }}
          >
            <path
              d="M0 0L46 19.2468L0 38L13.6231 19.2468L0 0Z"
              fill="#0EDA3B"
            />
          </svg>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => {
              homePush()
            }}
          >
            <span id="play">PLAY</span> <span id="js">JS</span>
          </Typography>

          <div id="navs">
            <div>
              <Link
                to={NavigationReference.Targets.index}
                color="secondary"
                style={{ color: '#1B3038', textDecoration: 'none' }}
              >
                {' '}
                <span className="unhide">
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/service.png"
                    alt="DOCS"
                  />
                </span>
                <span className="hide">DOCUMENTATION</span>
              </Link>
            </div>
            <div>
              <a
                href={NavigationReference.github}
                color="secondary"
                style={{ color: '#1B3038', textDecoration: 'none' }}
              >
                <span className="unhide">
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                    alt="GITHUB"
                  />
                </span>
                <div className="hide">GITHUB</div>
              </a>
            </div>
            <div>
              <Link
                to={NavigationReference.download}
                color="secondary"
                style={{ color: '#1B3038', textDecoration: 'none' }}
              >
                <span className="unhide">
                  <GetApp />
                </span>
                <div className="hide">Download</div>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Link
        to={NavigationReference.home}
        ref={homeRef}
        style={{ display: 'none' }}
      >
        home
      </Link>
    </div>
  )
}
