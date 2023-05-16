import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

const getNavItemStyle = (propName) => ({ theme }) => {
  const { navItem } = theme.components.navBar;
  return navItem[propName];
};

const StyledNavItemMobile = styled.li`
  // Color
  background: #007A62;
  
  // Display
  display: flex;
  flex-direction: column;
  
  // Interaction
  cursor: pointer;
  
  // Shape
  border-radius: 2px;

  .active {
    // Color
    background: #07B8ED;
    
    // Display
    display: flex;

    // Shape
    border-radius: 2px;
  }
`;

export const NavLink = styled(LinkS)`
  // Display
  display: flex;
  
  // Sizing
  box-sizing: border-box;
  height: ${getNavItemStyle('mobileHeight')}px;  
  width: ${getNavItemStyle('mobileWidth')}px;
`;

export default StyledNavItemMobile;
