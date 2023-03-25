import { createActions } from "redux-actions";

const actions = createActions(
  {
    ADD_COUNT: (count) => count
  },
  "SET_TEXT1",
  "SET_TEXT2",
  "SET_MODE",
  {
    prefix: "GLOBAL"
  }
);

export default actions;
