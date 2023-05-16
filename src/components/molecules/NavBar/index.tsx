import React from 'react'
import StyledNavBar, {
  BackgroundFilter,
  LogoLinkWrapper,
  NavMenu,
} from './styles'
// import { Logo } from '../../atoms/Logo'
import PropTypes, { shape } from 'prop-types'
import { NavItem } from '../../atoms/NavItem'
import ThemeButton from '../../atoms/themeSelector'
import { type Route } from '../../../routes'

interface Props {
  routes: Route[]
  isMobile: boolean
}

export const NavBar = ({
  routes,
  setter,
  // theme,
}: Props) => (
  <BackgroundFilter>
    <StyledNavBar>
      <LogoLinkWrapper>
        {/* <Logo theme={theme}/> */}
      </LogoLinkWrapper>
      <ThemeButton setter={setter}>Theme</ThemeButton>
      <NavMenu>
        {
          routes.map(({ label, id }: Route, index) => (
              <NavItem key={index} label={label} id={id}/>
          ))
        }
      </NavMenu>
    </StyledNavBar>
  </BackgroundFilter>
)

NavBar.propTypes = {
  routes: PropTypes.arrayOf(
    shape({
      id: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  setter: PropTypes.func,
  theme: PropTypes.object,
}
