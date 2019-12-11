import styled from 'styled-components';

export const ColorsContainer = styled.div`

`;

export const ColorsGrid = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ColorCard = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ bgColor }) => bgColor};
`;