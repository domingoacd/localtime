import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../style";
import Quote from "../quote";
import BgImage from "../bgImage";
import { AppContainer } from "./style";
import dayBg from "../../assets/day.png";
import BottomSection from "../bottomSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BgImage imageUrl={dayBg} />
      <AppContainer>
        <Quote />
        <BottomSection />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
