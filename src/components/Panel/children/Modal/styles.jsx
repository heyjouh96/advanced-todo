import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  width: 700px;
  height: 580px;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 100;
  pointer-events: none;
  transition: opacity 0.5s;
`;