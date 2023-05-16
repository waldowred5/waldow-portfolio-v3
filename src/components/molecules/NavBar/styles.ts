import styled from 'styled-components'
import { media, SCREEN_SIZE } from '../../../utils//layout'

export const getNavBarStyle = (propName) => ({ theme }) => {
  const { navBar } = theme.components
  return navBar[propName]
}

export const BackgroundFilter = styled.div`
  // Color
  background: ${getNavBarStyle('backgroundColor')};

  // Display
  display: flex;

  // Position
  position: sticky;
  top: 0;
  z-index: 10;

  // Sizing
  box-sizing: border-box;
  height: ${getNavBarStyle('heightMobile')}px;
  margin-top: -${getNavBarStyle('heightMobile')}px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Sizing
    height: ${getNavBarStyle('heightTablet')}px;
    margin-top: -${getNavBarStyle('heightTablet')}px;
  }
`

const StyledNavBar = styled.nav`
  // Color
  background: linear-gradient(${getNavBarStyle('linearGradient')});

  // Display
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
`

export const LogoLinkWrapper = styled.div`
  // Display
  display: flex;
`

export const NavMenu = styled.ul`
  // Display
  display: flex;
  align-items: center;

  // Sizing
  padding: 0;
  margin: 0;
`

export default StyledNavBar
