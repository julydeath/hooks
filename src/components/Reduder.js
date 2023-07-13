import { nanoid } from "nanoid";
import React, { useReducer, useState } from "react";

const Reducer = ({ number }) => {
  const initialState = {
    input: "",
    names: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { ...state, names: [...state.names, action.payload], input: "" };
      case "SET_INPUT":
        return {
          ...state,
          input: action.payload,
        };
      default:
        return state;
    }
  };

  const handleClick = () => {
    dispatch({ type: "ADD", payload: state.input });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <input
          type="test"
          value={state.input}
          onChange={(e) =>
            dispatch({ type: "SET_INPUT", payload: e.target.value })
          }
        />
      </div>
      {state.names.map((li, index) => (
        <div key={index}>
          <li>{li}</li>
          {/* <button onClick={() => handleDelete(li.id)}>Del</button> */}
        </div>
      ))}
      <button onClick={() => handleClick()}>add</button>
      {state.input}
    </div>
  );
};

export default Reducer;
