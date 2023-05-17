import React from 'react'
import { HeroController } from '../../controllers/Hero'

const Hero = () => {
  return (
    <div id='hero' style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <HeroController />
    </div>
  )
}

export default Hero
