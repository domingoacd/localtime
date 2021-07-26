import { HIDE_INFOBOX, SHOW_INFOBOX } from "../actions";

export function showInfoBox() {
  return {
    type: SHOW_INFOBOX,
  };
}

export function hideInfoBox() {
  return {
    type: HIDE_INFOBOX,
  };
}
