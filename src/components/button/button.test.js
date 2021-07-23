import React from "react";
import renderer from "react-test-renderer";
import Button from "../button";
import { ThemeProvider } from "styled-components";
import { theme } from "../../style";

test("Renders Button component", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
