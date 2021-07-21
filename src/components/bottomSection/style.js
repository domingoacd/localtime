import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  line-height: 0.9;
`;

export const WelcomeText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-transform: uppercase;
  color: ${({ theme }) => theme.day.color.primary};
`;

export const LocationText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.day.color.primary};
`;

export const LeftSide = styled.div``;

export const RightSide = styled.div``;
