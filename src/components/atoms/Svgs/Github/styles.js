import styled from 'styled-components';
// import { StyledIconContainer } from 'components/atoms/IconComponent/styles';

// var hoistedWrapper = StyledIconContainer;

export const StyledSvg = styled.svg``;

const StyledPath = styled.path`
  // Animation
  transition: all 0.25s ease-in-out;

  ${StyledSvg}:hover & {
    // Color
    fill: #07B8ED;
  }
`;

export default StyledPath;
