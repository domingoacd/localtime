import React from "react";
import renderer from "react-test-renderer";
import App from "../app";
import { ThemeProvider } from "styled-components";
import { theme } from "../../style";

test("Renders App component", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
