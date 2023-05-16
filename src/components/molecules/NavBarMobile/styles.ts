import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const getNavBarStyle = (propName) => ({ theme }) => {
  const { navBar } = theme.components;
  return navBar[propName];
};

export const BackgroundFilter = styled.div`
  // Color
  background: ${getNavBarStyle('backgroundColor')};

  // Display
  display: flex;

  // Position
  position: sticky;
  top: 0;
  z-index: 10;

  // Sizing
  box-sizing: border-box;
  height: ${getNavBarStyle('heightMobile')}px;
  margin-top: calc(2 * -${getNavBarStyle('heightMobile')}px);
`;

export const StyledNavBar = styled.nav`
  // Color
  background: linear-gradient(${getNavBarStyle('linearGradient')});

  // Display
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const LogoLinkWrapper = styled(Link)`
  // Display
  display: flex;
`;

export const BackgroundFilterMobile = styled.div`
  // Color
  background: linear-gradient(${getNavBarStyle('linearGradientMobile')});

  // Display
  display: flex;
  justify-content: center;

  // Position
  position: fixed;
  bottom: 0;
  z-index: 10;

  // Sizing
  box-sizing: border-box;
  height: calc(${getNavBarStyle('heightMobile')}px * 1.34);
  width: 100vw;
`;

export const NavMenu = styled.ul`
  // Display
  display: flex;
  align-items: center;

  // Sizing
  padding: 0;
  margin: 0;
`;

export const NavMenuMobile = styled.ul`
  // Display
  align-items: center;
  display: flex;
  justify-content: space-between;
  
  // Sizing
  padding: 0;
  margin-top: 22px;
  margin-bottom: 0;
  max-width: 280px;
  width: 60vw;
`;
