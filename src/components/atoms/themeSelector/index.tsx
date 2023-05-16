import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { useTheme } from '../../../theme/useTheme'
import StyledThemeButton, { StyledContainer } from './styles'
import PropTypes from 'prop-types'
import { BUTTON_VARIANT } from '../../../utils/constants'

const ThemeSelector = ({ children, setter }) => {
  const [data] = useState(['dark', 'light'])
  const [themes, setThemes] = useState([])
  const { setMode } = useTheme()

  const themeSwitcher = (selectedTheme) => {
    setMode(selectedTheme)
    setter(selectedTheme)
  }

  useEffect(() => {
    setThemes(_.keys(data))
  }, [data])

  const ThemeButton = ({ theme }) => {
    return (
      <StyledThemeButton
        colorVariant={BUTTON_VARIANT.SECONDARY}
        onClick={() => { themeSwitcher(theme) }}
        theme={theme}
      >
        Theme: {theme.name}
      </StyledThemeButton>
    )
  }

  ThemeButton.propTypes = {
    theme: PropTypes.object,
  }

  return (
    <StyledContainer>
      {
        (themes.length > 0) && themes.map((theme) => (
          <ThemeButton
            key={data[theme].id}
            theme={data[theme]}
          >
            {children}
          </ThemeButton>
        ))
      }
    </StyledContainer>
  )
}

ThemeSelector.propTypes = {
  children: PropTypes.node,
  colorVariant: PropTypes.string,
  newTheme: PropTypes.string,
  onClick: PropTypes.func,
  setter: PropTypes.func,
}

export default ThemeSelector
