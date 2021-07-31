/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import FirstScreen from './FirstScreen'
import {
  TextAnimations,
  SVGAnimation,
  TextCleaner,
  BorderAnimation,
  LoadingAnimation,
  OnViewAnimation,
  AnimateBlock,
  AnimateStar,
} from './LandingAnimations'
import FinalScreen from './FinalScreen'
import { Grid } from '@material-ui/core'
import SecondScreen from './SecondScreen'
import ThirdScreen from './ThirdScreen'
import ForthScreen from './ForthScreen'
export default function LandingAnimation() {
  const [playHTML, setPlayHTML] = useState('PLAY')
  const [jsHTML, setJsHTML] = useState('JS')
  useEffect(() => {
    let html = TextCleaner('PLAY', 'play_words')
    setPlayHTML(html)
    TextAnimations('.play_words')
    let js = TextCleaner('JS', 'js_words')
    setJsHTML(js)
    TextAnimations('.js_words', 1400)
    SVGAnimation()
    BorderAnimation()
    LoadingAnimation()
    OnViewAnimation('.animateText', 0.3)
    AnimateBlock()
    AnimateStar()
  })

  return (
    <main>
      <Grid container item xs={12}>
        <Grid container item xs={12}>
          <FirstScreen playHTML={playHTML} jsHTML={jsHTML} />
        </Grid>
        <Grid container item xs={12} style={{ marginTop: '50px' }}>
          <SecondScreen />
        </Grid>
        <Grid container item xs={12} style={{ marginTop: '100px' }}>
          <ThirdScreen />
        </Grid>
        <Grid container item xs={12} style={{ marginTop: '100px' }}>
          <ForthScreen />
        </Grid>
        <Grid
          container
          item
          xs={12}
          style={{
            marginTop: '100px',
            backgroundColor: '#e9e9e9',
            padding: '80px 0px',
          }}
        >
          <FinalScreen />
        </Grid>
      </Grid>
    </main>
  )
}
