import React from 'react'
import StyledNavItem, { NavLink } from './styles'

interface Props {
  label: string
  id: string
}

export const NavItemMobile = ({
  label,
  id,
}: Props) => {
  return (
    <StyledNavItem>
      <NavLink
        to={id}
        activeClass="active"
        duration={500}
        spy={true}
        smooth={true}
      >
        TEST
      </NavLink>
    </StyledNavItem>
  )
}
