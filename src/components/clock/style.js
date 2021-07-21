import styled from "styled-components";

export const Time = styled.p`
  font-weight: bold;
  font-size: clamp(2rem, 22vw, 17rem);
  color: ${({ theme }) => theme.day.color.primary};
`;
