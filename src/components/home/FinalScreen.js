import React, { createRef, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../Navigation/Navigation'
import { NavigationReference } from '../../Navigation/NavigationRefrence'
export default function FinalScreen() {
  const docuRef = useRef(null)
  function openDocumentation() {
    docuRef.current.click()
  }
  return (
    <section
      id="center_placed"
      style={{
        position: 'relative',
        height: '100vh',
        backgroundColor: '#eeeeee',
      }}
    >
      <div className="card info git">
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
      <div className="card info doci" onClick={openDocumentation}>
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
      <Link to={NavigationReference.Targets.index} ref={docuRef}></Link>
    </section>
  )
}
