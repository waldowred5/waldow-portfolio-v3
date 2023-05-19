import styled from 'styled-components'
import { media, SCREEN_SIZE } from '../../utils/layout'

const StyledTwoColumns = styled.div`
  // Display
  display: flex;
  justify-content: center;
`

export const ColumnDivider = styled.div`
  // Color

  // Display
  display: flex;

  // Sizing
  margin: 48px 0;
  max-width: 300px;
  width: 100%;

  ${media[SCREEN_SIZE.TABLET]} {
    // Sizing
    height: 100%;
    margin: 0 48px;

    &::after {
      // Position
      position: absolute;
      // Required for 100% ColumnDivider height
    }
  }
`

export const ColumnWrapper = styled.div`
  // Display
  align-items: center;
  display: flex;
  flex-direction: column;

  // Sizing
  margin: 48px 24px 128px 24px;

  ${media[SCREEN_SIZE.TABLET]} {
    // Display
    align-items: flex-start;
    flex-direction: row-reverse;
    justify-content: center;
  }

  ${media[SCREEN_SIZE.DESKTOP]} {
    // Sizing
    max-width: 1024px;
  }
`

export const PrimaryColumn = styled.div`
  // Display
  //display: block;
`

export const SecondaryColumn = styled.div`
  // Display
  //display: block;
`

export default StyledTwoColumns
