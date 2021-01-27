
import React from 'react'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

import Show from './show'

const Home=({ children })=> {
  return (
    <>
      <ThemeProvider>
        <ColorModeProvider>
          <CSSReset />
          {children}
          <Show/>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}
export default Home
