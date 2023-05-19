import React from 'react'
import { HeroText } from '../components/molecules/HeroText/HeroText'
import { HeroCanvas } from '../components/organisms/HeroCanvas/HeroCanvas'

export const HeroController = () => {
  return (
    <>
      <HeroCanvas/>
      <HeroText/>
    </>
  )
}
