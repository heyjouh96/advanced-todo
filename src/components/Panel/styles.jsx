import styled from 'styled-components';

export const PanelContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* background: #ccc; */
  background: ${({ bgColor }) => bgColor};
  overflow-x: scroll;
  padding: 12px;
  box-sizing: border-box;
`;

export const ColumnsContainer = styled.div`
  display: -webkit-box;
  height: 780px;
`;