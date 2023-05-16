import styled from 'styled-components'
// import PropTypes from 'prop-types';
import { fontPx, media, SCREEN_SIZE } from '../../../utils/layout'
import { FONT_FAMILY, FONT_WEIGHT } from '../../../utils/constants'
import { NavLink } from 'react-router-dom'

const HeroContainer = styled.div`
  // Display
  display: flex;
  flex-direction: column;

  // Sizing
  margin: 24px 24px 88px 24px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Sizing
    margin: 0;
  }
`

export const PrimaryHeadingWrapper = styled.div`
  // Color
  color: #38E000;

  // Display
  display: flex;
  flex-direction: row;
`

export const PrimaryHeading = styled.h1`
  // Font
  font-size: 48px;
  line-height: 52px;

  // Sizing
  margin: 0 2px 0 0;

  ${media[SCREEN_SIZE.TABLET]} {
    // Font
    font-size: 96px;
    line-height: 110px;

    // Sizing
    margin: 0 8px 0 0;
  }
`

export const SecondaryHeadingWrapper = styled.div`
  // Color
  color: #C56CEF;

  // Display
  display: flex;
  flex-direction: row;
`

export const SecondaryHeading = styled.h3`
  // Font
  font-size: 16px;
  text-align: center;

  // Sizing
  margin: 0;

  ${media[SCREEN_SIZE.TABLET]} {
    // Font

    // Sizing
  }
`

export const SecondaryHeadingLinkWrapper = styled.h3`
  // Sizing
  margin: 0;

  text-decoration: none;

  ${media[SCREEN_SIZE.TABLET]} {
    // Font

    // Sizing
  }
`

export const SecondaryHeadingLink = styled(NavLink)`
  text-decoration: none;
`

export const StyledDivider = styled.div`
  // Color

  // Display
  display: flex;

  // Sizing

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    display: none;
  }
`

export const StyledHeroText = styled.div`
  // Display
  align-items: center;
  display: flex;
  flex-direction: column;

  // Sizing
  //margin-bottom: 24px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    align-items: flex-end;

    // Position
    position: absolute;
    bottom: ${fontPx(48)};
    right: ${fontPx(36)};
  }
`

export const SuffixHeading = styled.h1`
  // Font

  // Sizing

  ${media[SCREEN_SIZE.TABLET]} {
    // Font

    // Sizing
  }
`

export default HeroContainer
