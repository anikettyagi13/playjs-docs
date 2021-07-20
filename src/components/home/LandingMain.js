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
import { StarDumb } from './StarsDumb'
import FinalScreen from './FinalScreen'
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
    OnViewAnimation('.info', 0.3)
    AnimateBlock()
    AnimateStar()
  })

  return (
    <main>
      <FirstScreen playHTML={playHTML} jsHTML={jsHTML} />
      <section id="center_placed">
        <div id="section_div">
          <svg
            className="svg"
            width="350"
            height="350"
            viewBox="0 0 414 374"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="loading_path_1"
              d="M414 187C414 290.277 321.323 374 207 374C92.6771 374 0 290.277 0 187C0 83.7228 92.6771 0 207 0C321.323 0 414 83.7228 414 187ZM136.429 187C136.429 222.21 168.025 250.752 207 250.752C245.975 250.752 277.571 222.21 277.571 187C277.571 151.79 245.975 123.248 207 123.248C168.025 123.248 136.429 151.79 136.429 187Z"
              fill="#F4A261"
            />
            <path
              id="loading_path_2"
              d="M414 187C414 290.277 321.323 374 207 374C92.6771 374 0 290.277 0 187C0 83.7228 92.6771 0 207 0C321.323 0 414 83.7228 414 187ZM87.2223 187C87.2223 246.76 140.849 295.205 207 295.205C273.151 295.205 326.778 246.76 326.778 187C326.778 127.24 273.151 78.795 207 78.795C140.849 78.795 87.2223 127.24 87.2223 187Z"
              fill="#1A2F38"
            />
          </svg>
          <div className="space info" style={{ opacity: 0 }}>
            <div id="center_line" />
            <span>
              <h2 className="h2">
                COOL
                <br />
                ANIMATIONS
              </h2>
              <p>
                Animations are getting more and more important in websites.
                <br />
                <br />
                PlayJS is a powerful JavaScript animation library, which takes
                care of the nitty gritty of animations and provides you with a
                simple easy to use INTERFACE.
                <br />
                <br /> PlayJS helps to animate <strong>
                  DOM elements
                </strong> , <strong> CSS properties</strong> and
                <strong> SVGs</strong>.{' '}
              </p>
            </span>
          </div>
        </div>
      </section>
      <section id="center_placed">
        <div id="section_div">
          <div className="space info" style={{ opacity: 0 }}>
            <span className="right">
              <h2 className="h2">
                CSS
                <br />
                TRANSITIONS
              </h2>
              <p>
                Animating multiple elements, with CSS Transitions and properties
                made easy. Animations are now as easy as defining start and end
                to the elements.
              </p>
            </span>
            <div id="center_line" />
          </div>
          <div className="svg">
            <div className="block" />
          </div>
        </div>
      </section>
      <section id="center_placed">
        <div id="section_div">
          <StarDumb />

          <div className="space info" style={{ opacity: 0 }}>
            <div id="center_line" />
            <span>
              <h2 className="h2">
                SVG
                <br /> MORPHING
              </h2>
              <p>
                Animating SVGs were never soo easy. Smooth SVG morphing is made
                possible by PLAYjs
              </p>
            </span>
          </div>
        </div>
      </section>
      <FinalScreen />
    </main>
  )
}
