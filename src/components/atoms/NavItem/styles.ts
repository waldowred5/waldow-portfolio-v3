import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { fontPx, media, SCREEN_SIZE } from '../../../utils/layout'
import { FONT_FAMILY } from '../../../utils/constants'

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
      background: linear-gradient(#FFFFFF00, #07B8ED59);

      // Sizing
      border-bottom: 4px solid #07B8ED;
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
  width: ${fontPx(120)};

  .active {
    // Display
    display: flex;
  }

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    display: flex;

    // Sizing

    :not(.active) &:hover {
      // Color
      background: linear-gradient(#FFFFFF00, #38E00033);

      // Sizing
      border-bottom: 4px solid #38E00080;
    }
  }
`

export const NavLabel = styled.p`
  // Font
  font-size: 28px;
  color: #E0E0E0;

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
