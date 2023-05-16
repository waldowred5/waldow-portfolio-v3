import styled from 'styled-components'
import { getFontFamily } from '../../../utils//theme'
import { FONT_FAMILY } from '../../../utils/constants'
import { media, SCREEN_SIZE } from '../../../utils/layout'

const getPageHeaderStyle = (propName) => ({ theme }) => {
  const { pageHeader } = theme.components
  return pageHeader[propName]
}

const StyledHeader = styled.div`
  // Color
  background: linear-gradient(${getPageHeaderStyle('linearGradient')});
  
  // Display
  align-items: center;
  display: flex;
  justify-content: flex-end;
  
  // Sizing
  height: 64px;
  
  ${media[SCREEN_SIZE.TABLET]} {    
    // Sizing
    height: 90px;
  }  
`

export const StyledHeading = styled.p`
  // Display
  align-items: center;
  justify-content: center;
  
  // Font
  color: ${getPageHeaderStyle('fontColor')};
  font-size: ${getPageHeaderStyle('fontSize')}px;
  font-family: ${getFontFamily(FONT_FAMILY.TERTIARY)};
  text-align: center;

  // Sizing
  margin: 0;
  width: 120px;
`

export default StyledHeader
