import React from "react";
import renderer from "react-test-renderer";
import BottomSection from "../bottomSection";
import { ThemeProvider } from "styled-components";
import { theme } from "../../style";

test("Renders Bottom Section component", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <BottomSection />
    </ThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
