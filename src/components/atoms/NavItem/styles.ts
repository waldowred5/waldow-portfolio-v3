import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { fontPx, media, SCREEN_SIZE } from '../../../utils/layout'
import { FONT_FAMILY } from '../../../utils/constants'
import { getNavBarStyle } from '../../molecules/NavBar/styles'
import { getFontFamily } from '../../../utils/theme'

const getNavItemStyle = (propName) => ({ theme }) => {
  const { navItem } = theme.components.navBar
  return navItem[propName]
}

const StyledNavItem = styled.li`
  // Display
  display: flex;
  flex-direction: column;

  // Interaction
  cursor: pointer;

  .active {
    // Display
    display: flex;
  }

  ${media[SCREEN_SIZE.TABLET]} {
    .active {
      // Color
      background: linear-gradient(${getNavItemStyle('linearGradientActive')});

      // Sizing
      border-bottom: ${getNavItemStyle('borderBottomActive')};
    }
  }
`

export const NavLink = styled(LinkS)`
  // Animation
  transition: background-color 0.50s linear;

  // Display
  display: none;
  justify-content: center;
  align-items: center;

  // Sizing
  box-sizing: border-box;
  height: ${getNavBarStyle('heightMobile')}px;
  width: ${fontPx(120)};

  .active {
    // Display
    display: flex;
  }

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    display: flex;

    // Sizing
    height: ${getNavBarStyle('heightTablet')}px;

    :not(.active) &:hover {
      // Color
      background: linear-gradient(${getNavItemStyle('linearGradientHover')});

      // Sizing
      border-bottom: ${getNavItemStyle('borderBottomHover')};
    }
  }
`

export const NavLabel = styled.p`
  // Font
  font-size: ${getNavItemStyle('fontSize')}px;
  font-family: ${getFontFamily(FONT_FAMILY.TERTIARY)};
  color: ${getNavItemStyle('fontColor')};

  // Sizing
  margin: 0;

  ${media[SCREEN_SIZE.TABLET]} {
    ${NavLink}:hover & {
      // Position
      position: relative;
      top: 2px;
    }

    ${NavLink}.active & {
      // Position
      position: relative;
      top: 2px;
    }
  }
`

export default StyledNavItem
