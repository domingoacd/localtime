import { SHOW_INFOBOX, HIDE_INFOBOX } from "../actions";

const initialState = false;

function infobox_reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_INFOBOX:
      return true;
    case HIDE_INFOBOX:
      return false;
    default:
      return state;
  }
}

export default infobox_reducer;
