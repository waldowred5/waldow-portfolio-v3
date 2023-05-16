import styled from 'styled-components';

const StyledSocialLinks = styled.div`
  // Display
  display: flex;
  flex-direction: column;
  justify-content: center;

  // Sizing
  height: calc(100vh - 64px);
  max-width: 1024px;
  min-width: 320px;
  row-gap: 16px;
`;

export const MiddleRow = styled.div`
  // Display
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  // Sizing
  margin: 24px 0;
`;

export const StyledRow = styled.div`
  // Display
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default StyledSocialLinks;
