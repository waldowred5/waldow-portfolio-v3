import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState({ theme: 'dark' })
  const [themeLoaded, setThemeLoaded] = useState(false)

  const setMode = (mode) => {
    setTheme(mode)
  }

  const getFonts = () => {
    return ['Kanit']
  }

  useEffect(() => {
    setTheme({ theme: 'dark' })
    setThemeLoaded(true)
  }, [])

  return {
    theme,
    themeLoaded,
    setMode,
    getFonts,
  }
}
