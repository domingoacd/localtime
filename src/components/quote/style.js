import styled from "styled-components";

export const Blockquote = styled.blockquote`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.day.color.primary};
`;

export const QuoteAuthor = styled.span`
  font-weight: bold;
  margin-top: 1rem;
`;
