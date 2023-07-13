import { nanoid } from "nanoid";
import React, { useState } from "react";

const Counter = ({ number }) => {
  const [input, setIput] = useState("");
  const [names, setNames] = useState([
    {
      id: "",
      name: "",
    },
  ]);

  const handleClick = () => {
    setNames([...names, { id: nanoid(), name: input }]);
    setIput("");
  };

  const handleDelete = (id) => {
    setNames(names.filter((li) => li.id !== id));
  };

  return (
    <div>
      <div>
        <input
          type="test"
          value={input}
          onChange={(e) => setIput(e.target.value)}
        />
      </div>
      {names.map((li) => (
        <div key={li.id}>
          <li>{li.name}</li>
          <button onClick={() => handleDelete(li.id)}>Del</button>
        </div>
      ))}
      <button onClick={() => handleClick()}>add</button>
      number : {number}
    </div>
  );
};

export default Counter;
