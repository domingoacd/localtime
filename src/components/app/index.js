import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../style";
import Quote from "../quote";
import BgImage from "../bgImage";
import { AppContainer } from "./style";
import dayBg from "../../assets/day.png";
import BottomSection from "../bottomSection";
import InfoBox from "../infoBox";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../../store/reducers";
import { Provider } from "react-redux";
import {
  getCurrentHour,
  getCurrentTime,
  getFormatedTime,
} from "../../functions";

let store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
function App() {
  console.log(getFormatedTime());
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BgImage imageUrl={dayBg} />
        <AppContainer>
          <Quote />
          <BottomSection />
          <InfoBox />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
