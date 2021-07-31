import { Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavigationReference } from '../../Navigation/NavigationRefrence'

import { MouseOver, MouseLeave } from './LandingAnimations'
export default function FirstScreen({ playHTML, jsHTML }) {
  function MouseOverTarget(target) {
    MouseOver(target)
  }
  return (
    <Grid container item xs={12}>
      <Grid item md={12} className="hide">
        <svg
          width="150"
          height="150"
          viewBox="0 0 260 240"
          id="left_play"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L260 121.558L0 240L77 121.558L0 0Z"
            fill="#0EDA3B"
            fill-opacity="0.5"
          />
        </svg>
      </Grid>
      <Grid item xs={12}>
        <div id="section">
          <section id="section_play_js">
            <span
              id="play_section"
              dangerouslySetInnerHTML={{ __html: playHTML }}
            ></span>{' '}
            <span
              id="js_section"
              dangerouslySetInnerHTML={{ __html: jsHTML }}
            ></span>
            <svg
              id="play_icon"
              width="150"
              className="hide"
              height="150"
              viewBox="0 0 260 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="play_icon_path"
                d="M0 0L260 121.558L0 240L178 121.558L0 0Z"
                fill="#0EDA3B"
              />
            </svg>
            <svg
              id="play_icon"
              width="110"
              height="110"
              className="unhide"
              viewBox="0 0 260 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="play_icon_path"
                d="M0 0L260 121.558L0 240L178 121.558L0 0Z"
                fill="#0EDA3B"
              />
            </svg>
          </section>
        </div>
        <svg
          width="92"
          height="150"
          id="right_play"
          className="hide"
          viewBox="0 0 92 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L260 121.558L0 240L77 121.558L0 0Z"
            fill="#0EDA3B"
            fill-opacity="0.5"
          />
        </svg>
      </Grid>
      <div className="links">
        <div
          className="github icon"
          onMouseEnter={() => MouseOverTarget('.github img')}
          onMouseLeave={() => MouseLeave('.github img')}
          style={{ margin: '0px 30px 0px 0x' }}
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
            alt="GITHUB"
          />
          <div>GITHUB</div>
        </div>
        <div
          className="docs icon"
          onMouseEnter={() => MouseOverTarget('.docs img')}
          onMouseLeave={() => MouseLeave('.docs img')}
          style={{ margin: '0px 0px 0px 30x' }}
        >
          <Link
            to={NavigationReference.Targets.index}
            color="secondary"
            style={{ color: '#1B3038', textDecoration: 'none' }}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/service.png"
              alt="DOCS"
            />
            <div>DOCUMENTATION</div>
          </Link>
        </div>
      </div>
    </Grid>
  )
}
