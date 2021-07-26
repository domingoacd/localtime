import styled from "styled-components";

export const Blockquote = styled.blockquote`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.small};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: visibility 0.5s, opacity 0.5s;
  color: ${({ theme }) => theme.day.color.primary};
`;

export const QuoteAuthor = styled.span`
  font-weight: bold;
  margin-top: 1rem;
`;
