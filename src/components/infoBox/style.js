import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  display: flex;
  gap: 20vw;
  padding: 3rem;
  transform: translateY(100%);
  transition: transform 0.5s;
  margin: 0 -${({ theme }) => theme.spacing.xPadding};
  background-color: rgba(255, 255, 255, 0.7);
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const InfoElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  line-height: 0.8;
`;

export const InfoName = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.day.color.third};
`;

export const Info = styled.h3`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.day.color.secondary};
`;
