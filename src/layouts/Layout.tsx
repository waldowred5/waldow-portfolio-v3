import React from 'react'
import Hero from '../pages/home/Hero'
import Projects from '../pages/home/Projects'
import Contact from '../pages/home/Contact'
import { NavBarController } from '../controllers/NavBar'

export const Layout = (props) => {
  return (
    <>
      <NavBarController {...props} />
      <Hero/>
      <Projects/>
      <Contact/>
    </>
  )
}
