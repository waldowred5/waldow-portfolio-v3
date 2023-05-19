import styled from 'styled-components'
import { media, SCREEN_SIZE } from '../../../utils/layout'

const HeroContainer = styled.div`
  // Color
  color: #FFFFFF;
  
  // Display
  display: grid;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-template-rows: 0.65fr 1fr 1fr;

  // Sizing
  height: 100vh;
  width: 100vw;
`

export const PrimaryHeadingWrapper = styled.div`
  // Display
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PrefixPrimaryHeading = styled.h1`
  // Font
  font-size: 32px;
  font-weight: 100;
  line-height: 32px;

  // Sizing
  margin: 0;

  ${media[SCREEN_SIZE.TABLET]} {
    // Font
    font-size: 72px;
    line-height: 72px;
  }

  ${media[SCREEN_SIZE.DESKTOP]} {
    // Font
    font-size: 96px;
    line-height: 96px;
  }
`

export const PrimaryHeading = styled.h1`
  // Font
  font-size: 64px;
  line-height: 72px;
  font-weight: 800;
  text-shadow: 1px 1px 2px #000000;

  // Sizing
  margin: 0;

  ${media[SCREEN_SIZE.TABLET]} {
    // Font
    font-size: 144px;
    line-height: 144px;
  }

  ${media[SCREEN_SIZE.DESKTOP]} {
    // Font
    font-size: 208px;
    line-height: 208px;
  }
`

export const HorizontalSeparator = styled.div`
  // Color
  background-color: #FFFFFF;
  box-shadow: 1px 1px 2px #000000;
  
  // Sizing
  height: 2px;
  width: 80vw;
  margin: 20px 0;
`

export const SecondaryHeadingWrapper = styled.div`
  // Display
  display: flex;
  flex-direction: column;
  row-gap: 18px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    row-gap: 24px;
  }
`

export const SecondaryHeadingGridWrapper = styled.div`
  // Display
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  align-items: center;
  justify-content: center;

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    row-gap: 24px;
  }

  ${media[SCREEN_SIZE.DESKTOP]} {
    // Display
    flex-direction: row;
    column-gap: 24px;
  }
`

export const VerticalSeparator = styled.div`  
  // Color
  background-color: #FFFFFF;
  box-shadow: 1px 1px 2px #000000;

  // Display
  display: none;
  
  // Sizing
  width: 2px;
  height: 24px;

  ${media[SCREEN_SIZE.DESKTOP]} {
    // Display
    display: flex;
  }
`

export const SecondaryHeading = styled.h3`
  // Font
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  text-shadow: 1px 1px 2px #000000;

  ${media[SCREEN_SIZE.TABLET]} {
    // Font
    font-size: 36px;
    line-height: 36px;
  }
`

export default HeroContainer
