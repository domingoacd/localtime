import React from "react";
import renderer from "react-test-renderer";
import InfoBox from "../infoBox";
import { ThemeProvider } from "styled-components";
import { theme } from "../../style";

test("Renders Info Box component", () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <InfoBox />
    </ThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
