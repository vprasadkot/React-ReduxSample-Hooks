import { increment, decrement, reset } from "./actions";
import actionTypes from "./actionTypes";

const initialState = {
  counter: 0
};
const reducer = (state = initialState, actionType) => {
  switch (actionType.type) {
    case "GET":
      return {
        ...state
      };
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: increment(state.counter)
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: decrement(state.counter)
      };
    case actionTypes.RESET:
      return {
        ...state,
        counter: reset(state.counter)
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
