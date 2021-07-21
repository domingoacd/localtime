import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 3rem;
  background-size: cover;
  background-image: url(${(props) => props.bgImage});
`;
