import styled from 'styled-components'
import { fontPx } from '../../../utils/layout'
// import { getFontFamily, getFontWeight } from '../../../utils/theme'
// import { FONT_FAMILY, FONT_WEIGHT } from 'utils/constants'

const StyledBio = styled.div`
  // Display
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledHeading = styled.h1`
  // Color

  // Font
  font-size: ${fontPx(96)};

  // Sizing
  margin: 0 0 32px 0;
`

export default StyledBio
