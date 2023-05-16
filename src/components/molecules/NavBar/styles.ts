import styled from 'styled-components'
import { media, SCREEN_SIZE } from '../../../utils/layout'

export const BackgroundFilter = styled.div`
  // Display
  display: flex;

  // Position
  position: sticky;
  top: 0;
  z-index: 10;

  // Sizing
  box-sizing: border-box;
  height: 64px;
  margin-top: -64px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Sizing
    height: 90px;
    margin-top: -90px;
  }
`

const StyledNavBar = styled.nav`
  // Color

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
