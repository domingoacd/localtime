import React from "react";
import renderer from "react-test-renderer";
import Clock from "../clock";
import { ThemeProvider } from "styled-components";
import { theme } from "../../style";

test("Renders Clock component", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Clock />
    </ThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
