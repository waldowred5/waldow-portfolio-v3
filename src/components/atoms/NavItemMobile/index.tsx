import React from 'react';
import PropTypes from 'prop-types';
import StyledNavItemMobile, { NavLink } from './styles';

export const NavItemMobile = ({ label, id }) => {
  return (
    <StyledNavItemMobile>
      <NavLink
        to={id}
        activeClass='active'
        duration={500}
        spy={true}
        smooth={true}
      />
    </StyledNavItemMobile>
  );
};

NavItemMobile.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};
