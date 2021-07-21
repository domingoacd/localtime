import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 2rem 3rem;
  background-size: cover;
  background-image: url(${(props) => props.bgImage});
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
