import React from "react";
import renderer from "react-test-renderer";
import Quote from "../quote";
import { ThemeProvider } from "styled-components";
import { theme } from "../../style";
import { QUOTE_DATA } from "../../constants";

test("Renders Quote component", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Quote quoteData={QUOTE_DATA} />
    </ThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
