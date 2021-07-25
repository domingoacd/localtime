import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../style";
import Quote from "../quote";
import BgImage from "../bgImage";
import { AppContainer } from "./style";
import dayBg from "../../assets/day.png";
import BottomSection from "../bottomSection";
import { QUOTE_DATA } from "../../constants";
import InfoBox from "../infoBox";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BgImage imageUrl={dayBg} />
      <AppContainer>
        <Quote quoteData={QUOTE_DATA} />
        <BottomSection />
        <InfoBox />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
