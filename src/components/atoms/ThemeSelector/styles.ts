import styled from 'styled-components'
import PropTypes from 'prop-types'
import { media, SCREEN_SIZE } from '../../../utils/layout'

const buttonProps = {
  color: PropTypes.string,
  theme: PropTypes.object,
}

const StyledThemeButton = styled('button', buttonProps)`
  background-color: #071D3A;
  color: #FFFFFF;
  height: 20px;
  border: 0;
  display: flex;
  font-size: 14px;
  border-radius: 4px;
  margin-top: 5px;
  cursor: pointer;
  font-family: Bangers, sans-serif;
  justify-content: center;
  align-items: center;
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 72px;
  right: 14px;

  ${media[SCREEN_SIZE.TABLET]} {
    top: 100px;
  }
`

export default StyledThemeButton
