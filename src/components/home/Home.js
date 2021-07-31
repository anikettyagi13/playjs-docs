import { Container } from '@material-ui/core'
import React from 'react'
import './home.css'
import HomeNavigation from './HomeNavigation'
import LandingMain from './LandingMain'

export default function Home() {
  return (
    <>
      <Container maxWidth={false} disableGutters={true}>
        <HomeNavigation />
        <LandingMain />
      </Container>
    </>
  )
}
