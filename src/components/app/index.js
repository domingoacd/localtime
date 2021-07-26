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
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../../store/reducers";
import { Provider } from "react-redux";

let store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
function App() {
  const [showInfoBox, setShowInfoBox] = useState(false);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BgImage imageUrl={dayBg} />
        <AppContainer>
          <Quote quoteData={QUOTE_DATA} />
          <BottomSection />
          <InfoBox />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
