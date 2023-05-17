import React, { useLayoutEffect, useState } from 'react'
import { NavBar } from '../components/molecules/NavBar'
import routes from '../routes'
import { NavBarMobile } from '../components/molecules/NavBarMobile'
import { BREAKPOINTS, SCREEN_SIZE } from '../utils/layout'

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => { window.removeEventListener('resize', updateSize) }
  }, [])
  return size
}

export const NavBarController = (props) => {
  const [width] = useWindowSize()
  return (
    <>
      {width < BREAKPOINTS[SCREEN_SIZE.TABLET]
        ? <NavBar {...props} routes={routes}/>
        // ? <NavBarMobile {...props} routes={routes}/>
        : <NavBar {...props} routes={routes}/>
      }
    </>
  )
}
