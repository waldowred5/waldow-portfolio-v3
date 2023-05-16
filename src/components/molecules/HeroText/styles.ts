import styled from 'styled-components'
// import PropTypes from 'prop-types';
import { fontPx, media, SCREEN_SIZE } from '../../../utils/layout'
import { FONT_FAMILY, FONT_WEIGHT, HEADING_VARIANT } from '../../../utils/constants'
import { getFontFamily, getFontWeight } from '../../../utils/theme'
import { NavLink } from 'react-router-dom'

const getHeadingStyle = (colorVariant, propName) => ({ theme }) => {
  return theme.components.heading[colorVariant][propName]
}

const getDividerStyle = (propName) => ({ theme }) => {
  const { divider } = theme.components
  return divider[propName]
}

const getHeroTextStyle = (propName) => ({ theme }) => {
  const { heroText } = theme.components
  return heroText[propName]
}

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
  color: ${getHeadingStyle(HEADING_VARIANT.SECONDARY, 'color')};

  // Display
  display: flex;
  flex-direction: row;
`

export const PrimaryHeading = styled.h1`
  // Font
  font-family: ${getFontFamily(FONT_FAMILY.TERTIARY)};
  font-size: ${getHeroTextStyle('primaryHeadingSizeMobile')}px;
  font-weight: ${getFontWeight(FONT_WEIGHT.REGULAR)};
  line-height: ${getHeroTextStyle('primaryHeadingLineHeightMobile')}px;

  // Sizing
  margin: ${getHeroTextStyle('primaryHeadingMarginMobile')};

  ${media[SCREEN_SIZE.TABLET]} {
    // Font
    font-size: ${getHeroTextStyle('primaryHeadingSizeTablet')}px;
    line-height: ${getHeroTextStyle('primaryHeadingLineHeightTablet')}px;

    // Sizing
    margin: ${getHeroTextStyle('primaryHeadingMarginTablet')};
  }
`

export const SecondaryHeadingWrapper = styled.div`
  // Color
  color: ${getHeadingStyle(HEADING_VARIANT.TERTIARY, 'color')};

  // Display
  display: flex;
  flex-direction: row;
`

export const SecondaryHeading = styled.h3`
  // Font
  font-size: ${getHeroTextStyle('secondaryHeadingSizeMobile')}px;
  font-weight: ${getFontWeight(FONT_WEIGHT.REGULAR)};
  line-height: ${getHeroTextStyle('secondaryHeadingLineHeightMobile')}px;
  text-align: center;

  // Sizing
  margin: 0;

  ${media[SCREEN_SIZE.TABLET]} {
    // Font
    font-size: ${getHeroTextStyle('secondaryHeadingSizeTablet')}px;
    line-height: ${getHeroTextStyle('secondaryHeadingLineHeightTablet')}px;

    // Sizing
    margin: ${getHeroTextStyle('secondaryHeadingMargin')};
  }
`

export const SecondaryHeadingLinkWrapper = styled.h3`
  // Sizing
  margin: 0;

  text-decoration: none;

  ${media[SCREEN_SIZE.TABLET]} {
    // Font
    font-size: ${getHeroTextStyle('secondaryHeadingSizeTablet')}px;
    line-height: ${getHeroTextStyle('secondaryHeadingLineHeightTablet')}px;

    // Sizing
    margin: ${getHeroTextStyle('secondaryHeadingMargin')};
  }
`

export const SecondaryHeadingLink = styled(NavLink)`
  text-decoration: none;
`

export const StyledDivider = styled.div`
  // Color
  background: ${getDividerStyle('dividerColor')};

  // Display
  display: flex;

  // Sizing
  height: ${getDividerStyle('dividerSize')}px;
  margin-bottom: ${getHeroTextStyle('dividerMargin')}px;

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
  font-family: '${getFontFamily(FONT_FAMILY.SECONDARY)}', cursive;
  font-size: ${getHeroTextStyle('suffixHeadingSizeMobile')}px;
  font-weight: ${getFontWeight(FONT_WEIGHT.SEMI_BOLD)};
  line-height: ${getHeroTextStyle('suffixHeadingLineHeightMobile')}px;

  // Sizing
  margin: ${getHeroTextStyle('suffixHeadingMarginMobile')};

  ${media[SCREEN_SIZE.TABLET]} {
    // Font
    font-size: ${getHeroTextStyle('suffixHeadingSizeTablet')}px;
    line-height: ${getHeroTextStyle('suffixHeadingLineHeightTablet')}px;

    // Sizing
    margin: ${getHeroTextStyle('suffixHeadingMarginTablet')};
  }
`

export default HeroContainer
