import React, { useEffect, useState } from 'react'
import { GlobalStyles } from './globalStyles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { useTheme } from './theme/useTheme'
import { ThemeProvider } from 'styled-components'

const App = () => {
  const {
    theme,
    themeLoaded,
  } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)

  useEffect(() => {
    setSelectedTheme(theme)
  }, [themeLoaded])

  return (
    <>
      {
        themeLoaded && <ThemeProvider theme={selectedTheme}>
          <GlobalStyles/>
          <Router>
            <Routes>
              <Route
                path="*"
                element={<Layout/>}
              />
            </Routes>
          </Router>
        </ThemeProvider>
      }
    </>
  )
}

export default App
