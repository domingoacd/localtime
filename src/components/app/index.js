import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../style";
import Quote from "../quote";
import Clock from "../clock";
import { AppContainer, Overlay } from "./style";
import dayBg from "../../assets/day.png";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer bgImage={dayBg}>
        <Overlay />
        <Quote />

        <Clock />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
