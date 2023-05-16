import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FONT_FAMILY } from '../../../utils/constants'
import { media, SCREEN_SIZE } from '../../../utils//layout'

const getButtonStyle = (propName) => ({ colorVariant, theme }) => {
  return theme.colors.button[colorVariant][propName]
}

const getFontFamily = (fontFamily) => ({ theme }) => {
  return theme.fonts[fontFamily]
}

const buttonProps = {
  colorVariant: PropTypes.string,
  theme: PropTypes.object,
}

const StyledThemeButton = styled('button', buttonProps)`
  background-color: ${getButtonStyle('background')};
  color: ${getButtonStyle('text')};
  height: 20px;
  border: 0;
  display: flex;
  font-size: 14px;
  border-radius: 4px;
  margin-top: 5px;
  cursor: pointer;
  font-family: ${getFontFamily(FONT_FAMILY.TERTIARY)};
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
