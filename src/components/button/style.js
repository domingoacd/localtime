import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.7rem;
  text-transform: uppercase;
  border-radius: 5rem;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.day.color.secondary};
  background-color: ${({ theme }) => theme.day.color.primary};
`;

export const Arrow = styled.span`
  display: block;
  width: 1rem;
  height: 1rem;
  transform: ${(props) => (props.rotate ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.5s;
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
`;
