import { combineReducers } from "redux";
import infobox_reducer from "./infobox_reducer";

const rootReducer = combineReducers({
  show_infobox: infobox_reducer,
});

export default rootReducer;
