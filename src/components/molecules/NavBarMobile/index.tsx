import React from 'react'
import {
  BackgroundFilter,
  BackgroundFilterMobile,
  LogoLinkWrapper,
  NavMenu,
  NavMenuMobile,
  StyledNavBar,
} from './styles'
// import { Logo } from 'components/atoms/Logo'
import PropTypes, { shape } from 'prop-types'
import { NavItem } from '../../atoms/NavItem'
import ThemeButton from '../../atoms/ThemeSelector'
import { NavItemMobile } from '../../atoms/NavItemMobile'
import { type Route } from '../../../routes'

interface Props {
  routes: Route[]
  isMobile: boolean
}

const RoutesList = ({
  isMobile,
  routes,
}: Props) => {
  return (
    <>
      {
        routes.map((route, index) => (
          isMobile
            ? <NavItemMobile key={index} label={route.label} id={route.id}/>
            : <NavItem key={index} label={route.label} id={route.id}/>
        ))}
    </>
  )
}

RoutesList.propTypes = {
  isMobile: PropTypes.bool,
  routes: PropTypes.arrayOf(
    shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })),
}

export const NavBarMobile = ({
  routes,
  setter,
  theme,
}) => (
  <>
    <BackgroundFilter>
      <StyledNavBar>
        <LogoLinkWrapper to={'/'}>
          {/* <Logo theme={theme}/> */}
        </LogoLinkWrapper>
        <ThemeButton setter={setter}/>
        <NavMenu>
          <RoutesList isMobile={false} routes={routes}/>
        </NavMenu>
      </StyledNavBar>
    </BackgroundFilter>
    <BackgroundFilterMobile>
      <NavMenuMobile>
        <RoutesList isMobile={true} routes={routes}/>
      </NavMenuMobile>
    </BackgroundFilterMobile>
  </>
)

NavBarMobile.propTypes = {
  routes: PropTypes.arrayOf(
    shape({
      id: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  setter: PropTypes.func,
  theme: PropTypes.object,
}
