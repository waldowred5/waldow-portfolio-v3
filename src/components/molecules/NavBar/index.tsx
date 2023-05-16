import React from 'react'
import StyledNavBar, {
  BackgroundFilter,
  LogoLinkWrapper,
  NavMenu,
} from './styles'
// import { Logo } from '../../atoms/Logo'
import { NavItem } from '../../atoms/NavItem'
import ThemeButton from '../../atoms/ThemeSelector'
import { type Route } from '../../../routes'

interface Props {
  routes: Route[]
  setter: (theme: any) => void
  theme: object
}

export const NavBar = ({
  routes,
  setter,
  theme,
}: Props) => {
  return (
    <BackgroundFilter>
      <StyledNavBar>
        <LogoLinkWrapper>
          {/* <Logo theme={theme}/> */}
        </LogoLinkWrapper>
        <ThemeButton setter={setter}>Theme</ThemeButton>
        <NavMenu>
          {
            routes.map(({
              label,
              id,
            }: Route, index) => (
              <NavItem key={index} label={label} id={id}/>
            ))
          }
        </NavMenu>
      </StyledNavBar>
    </BackgroundFilter>
  )
}
