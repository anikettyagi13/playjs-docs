import { Grid } from '@material-ui/core'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { NavigationReference } from '../../Navigation/NavigationRefrence'
export default function FinalScreen() {
  const docuRef = useRef(null)
  const githubRef = useRef(null)
  function openDocumentation(e) {
    docuRef.current.click()
  }
  function openGithub(e) {
    githubRef.current.click()
  }
  return (
    <Grid container item xs={12}>
      <Grid container item md={6} xs={12} justifyContent="center">
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          onClick={(e) => {
            openGithub(e)
          }}
        >
          <div className="card">
            <div className="card2">
              <h2>
                WANT TO
                <br /> CONTRIBUTE?
              </h2>
              <p>HEAD HERE</p>
            </div>
            <div className="cardimg">
              <img
                src="https://img.icons8.com/ios-glyphs/90/000000/github.png"
                alt="Github"
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={6}
        justifyContent="center"
        style={{ marginTop: '4px' }}
      >
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          onClick={openDocumentation}
        >
          <div className="card">
            <div className="card2">
              <h2>
                ANIMATE YOUR
                <br /> WEBSITE?
              </h2>

              <p>HEAD HERE</p>
            </div>
            <div className="cardimg">
              <img
                src="https://img.icons8.com/ios-glyphs/90/000000/service.png"
                alt="Documentation"
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <Link to={NavigationReference.Targets.index} ref={docuRef}></Link>
      <a
        href={NavigationReference.github}
        ref={githubRef}
        style={{ display: 'none' }}
      >
        m
      </a>
    </Grid>
  )
}
