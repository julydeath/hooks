import { nanoid } from "nanoid";
import React, { useReducer } from "react";

const Reducer = () => {
  const initialState = {
    input: "",
    names: [
      {
        id: "",
        task: "",
      },
    ],
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
      case "DELETE":
        return {
          ...state,
          names: state.names.filter((li) => li.id !== action.payload),
        };
      default:
        return state;
    }
  };

  const handleClick = () => {
    dispatch({ type: "ADD", payload: { id: nanoid(), task: state.input } });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
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
      {state.names.map((li) => (
        <div key={li.id}>
          <li>
            {li.task} <button onClick={() => handleDelete(li.id)}>Del</button>
          </li>
        </div>
      ))}
      <button onClick={() => handleClick()}>add</button>
    </div>
  );
};

export default Reducer;
