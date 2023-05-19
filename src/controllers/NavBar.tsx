import React, { useLayoutEffect, useState } from 'react'
import { NavBar } from '../components/molecules/NavBar/NavBar'
import routes from '../routes'
import { BREAKPOINTS, SCREEN_SIZE } from '../utils/layout'

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])
  return size
}

export const NavBarController = (props) => {
  const [width] = useWindowSize()
  const isMobile = width < BREAKPOINTS[SCREEN_SIZE.TABLET]

  return (
    <NavBar {...props} routes={routes} isMobile={isMobile}/>
  )
}
