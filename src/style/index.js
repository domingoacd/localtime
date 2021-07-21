import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
`;

export const theme = {
  day: {
    color: {
      primary: "#fff",
      secondary: "#383838",
      third: "#696969",
    },
  },

  night: {
    color: {
      primary: "#fff",
      secondary: "#fff",
      third: "#bfbfbf",
    },
  },

  fontSize: {
    small: "1.1rem",
    medium: "1.4rem",
    big: "2rem",
    xbig: "30rem",
  },
};
