import React from 'react'
import StyledNavBar, {
  BackgroundFilter,
  NavMenu,
} from './styles'
// import { Logo } from '../../atoms/Logo'
import { NavItem } from '../../atoms/NavItem/NavItem'
// import ThemeButton from '../../atoms/ThemeSelector'
import { type Route } from '../../../routes'
import { NavItemMobile } from '../../atoms/NavItemMobile/NavItemMobile'

interface Props {
  routes: Route[]
  isMobile: boolean
  setter: (theme: any) => void
  theme: object
}

export const NavBar = ({
  routes,
  isMobile,
  setter,
  theme,
}: Props) => {
  return (
    <BackgroundFilter>
      <StyledNavBar>
        <NavMenu>
          {
            routes.map(({
              label,
              id,
            }: Route, index) => (
              isMobile
                ? <NavItemMobile key={index} label={label} id={id}/>
                : <NavItem key={index} label={label} id={id}/>
            ))
          }
        </NavMenu>
        {/* <ThemeButton setter={setter}>Theme</ThemeButton> */}
      </StyledNavBar>
    </BackgroundFilter>
  )
}
