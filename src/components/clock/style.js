import styled from "styled-components";

export const Time = styled.p`
  font-weight: bold;
  font-size: clamp(2rem, 25vw, 20rem);
  color: ${({ theme }) => theme.day.color.primary};
`;
