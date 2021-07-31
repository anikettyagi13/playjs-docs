import { makeStyles, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Code from './components/Code&PlayGround/Code'
import HomeNavigation from './components/home/HomeNavigation'
import { NavigationReference } from './Navigation/NavigationRefrence'
const styles = makeStyles({
  code: {
    padding: '20px',
    height: '30px',
    borderRadius: '3px',
  },
  codeText: {
    marginRight: '5px',
  },
})

export default function Download() {
  const classes = styles()
  const code =
    '<span class="addBluish">import</span> <span class="exceptBlue">play</span><span class="addBluish">from</span><span class="addBrownish">"play.js"</span>'
  return (
    <>
      <HomeNavigation />
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        style={{ marginTop: '30px' }}
        spacing={2}
      >
        <Grid
          container
          item
          xs={12}
          style={{ textAlign: 'center', marginTop: '30px' }}
          justifyContent="center"
        >
          <Typography variant="h1">DOWNLOAD</Typography>
        </Grid>

        <Grid
          conatiner
          item
          xs={12}
          lg={7}
          justifyContent="centerPlace"
          style={{ marginTop: '30px' }}
        >
          <Grid
            container
            item
            xs={11}
            style={{ textAlign: 'center', marginLeft: '5px' }}
            // justifyContent="center"
          >
            <Typography variant="h3">DEPENDING ON USAGE</Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent="space-between"
            alignContent="center"
            style={{ marginTop: '20px' }}
          >
            <Typography variant="p" style={{ marginLeft: '5px' }}>
              ES6 MODULE
            </Typography>
            <a
              href={NavigationReference.downloadLink.es6}
              download
              style={{ color: '#0EDA3B' }}
            >
              DOWNLOAD
            </a>
          </Grid>
          <Grid
            item
            container
            className={`code ${classes.code}`}
            alignContent="center"
            // justifyContent="center"
          >
            <span className={`addBluish ${classes.codeText}`} style={{}}>
              import{' '}
            </span>{' '}
            <span className={`exceptBlue ${classes.codeText}`}>play </span>{' '}
            <span className={`addBluish ${classes.codeText}`}>from </span>{' '}
            <span className={`addBrownish ${classes.codeText}`}>
              "play.js"{' '}
            </span>{' '}
            {/* <Code codeBlock={code} dontFormat={true}></Code> */}
          </Grid>
        </Grid>
        <Grid
          conatiner
          item
          xs={12}
          lg={7}
          justifyContent="centerPlace"
          style={{ marginTop: '30px' }}
        >
          <Grid
            container
            item
            xs={12}
            justifyContent="space-between"
            alignContent="center"
            style={{ marginTop: '20px' }}
          >
            <Typography variant="p" style={{ marginLeft: '5px' }}>
              CommonJS
            </Typography>
            <a
              href={NavigationReference.downloadLink.export}
              download
              style={{ color: '#0EDA3B' }}
            >
              DOWNLOAD
            </a>
          </Grid>
          <Grid
            item
            container
            className={`code ${classes.code}`}
            alignContent="center"
            // justifyContent="center"
          >
            <span className={`addBluish ${classes.codeText}`} style={{}}>
              const{' '}
            </span>{' '}
            <span className={`exceptBlue ${classes.codeText}`}>play </span>{' '}
            <span className={`addBluish ${classes.codeText}`}>
              {' '}
              = require({' '}
            </span>{' '}
            <span className={`addBrownish ${classes.codeText}`}>
              "play.js"{' '}
            </span>{' '}
            <span className={`addBluish ${classes.codeText}`}> ) </span>{' '}
            {/* <Code codeBlock={code} dontFormat={true}></Code> */}
          </Grid>
        </Grid>
        <Grid
          conatiner
          item
          xs={12}
          lg={7}
          justifyContent="centerPlace"
          style={{ marginTop: '30px' }}
        >
          <Grid
            container
            item
            xs={12}
            justifyContent="space-between"
            alignContent="center"
            style={{ marginTop: '20px' }}
          >
            <Typography variant="p" style={{ marginLeft: '5px' }}>
              In HTML file
            </Typography>
            <a
              href={NavigationReference.downloadLink.html}
              download
              style={{ color: '#0EDA3B' }}
            >
              DOWNLOAD
            </a>
          </Grid>
          <Grid
            item
            container
            className={`code ${classes.code}`}
            alignContent="center"
            // justifyContent="center"
          >
            <span className={`addBluish ${classes.codeText}`} style={{}}>
              {'<script src='}
            </span>{' '}
            <span className={`addBrownish ${classes.codeText}`}>
              "play.min.js"{' '}
            </span>{' '}
            <span className={`addBluish ${classes.codeText}`}>
              {' '}
              {'></script>'}{' '}
            </span>{' '}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
