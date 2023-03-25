import { handleActions } from "redux-actions";
import actions from "./action";
import { AnyAction } from "redux";
export const namespace = "global";
export interface GlobalStateType {
  count: number;
  typedText1: string;
  typedText2: string;
  mode: string;
}
export const defaultState: GlobalStateType = {
  count: 1,
  typedText1: "",
  typedText2: "",
  mode: "text1"
};
const { addCount, setText1, setText2, setMode } = actions;
export const globalReducer = handleActions(
  {
    [addCount as unknown as string]: (state: GlobalStateType, action: AnyAction) => {
      const { count } = state;
      return {
        ...state,
        count: count + action.payload
      };
    },
    [setText1 as unknown as string]: (state: GlobalStateType, action: AnyAction) => {
      return {
        ...state,
        typedText1: action.payload
      };
    },
    [setText2 as unknown as string]: (state: GlobalStateType, action: AnyAction) => {
      return {
        ...state,
        typedText2: action.payload
      };
    },
    [setMode as unknown as string]: (state: GlobalStateType, action: AnyAction) => {
      return {
        ...state,
        mode: action.payload
      };
    }
  },

  defaultState
);
