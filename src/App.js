import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
export default function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <label>Counter : {state.counter}</label>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "INCREMENT"
            })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "DECREMENT"
            })
          }
        >
          Decrement
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "RESET"
            })
          }
        >
          Reset
        </button>
      </div>
    </div>
  );
}
