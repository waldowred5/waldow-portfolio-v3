import React from 'react'
import { HeroController } from '../../controllers/Hero'

const Hero = () => {
  return (
    <div id='hero' style={{ display: 'flex', flexDirection: 'column' }}>
      <HeroController />
    </div>
  )
}

export default Hero
