const initialState = {
  counter: 0
};
const reducer = (state = initialState, actionType) => {
  switch (actionType.type) {
    case "GET":
      return {
        ...state
      };
    case "INCREMENT":
      console.log("STATE ", state);
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "RESET":
      return {
        ...state,
        counter: 0
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
