import styled from 'styled-components'
import { FONT_FAMILY } from '../../../utils/constants'
import { media, SCREEN_SIZE } from '../../../utils/layout'

const StyledHeader = styled.div`
  // Color
  background: linear-gradient(#07B8ED73, #FFFFFF00);
  
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
  color: #E0E0E0;
  font-size: 28px;
  text-align: center;

  // Sizing
  margin: 0;
  width: 120px;
`

export default StyledHeader
