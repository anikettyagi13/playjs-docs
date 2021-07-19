import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import Navigation from './Navigation/Navigation'
import theme from './Theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  )
}

export default App
