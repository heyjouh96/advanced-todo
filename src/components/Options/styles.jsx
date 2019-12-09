import styled, { css } from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  background: #eaeaea;
  padding: 12px;
  box-sizing: border-box;
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