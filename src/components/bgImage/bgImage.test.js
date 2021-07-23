import React from "react";
import renderer from "react-test-renderer";
import BgImage from "../bgImage";
import { ThemeProvider } from "styled-components";
import { theme } from "../../style";

test("Renders Background Image component", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <BgImage />
    </ThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
