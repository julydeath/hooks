import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const inputRef = useRef();
  const [text, setText] = useState([]);

  console.log(text);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleADD = () => {
    setText([...text, inputRef.current.value]);
  };

  console.log("jello");

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => handleADD()}>ADD</button>
      {text}
    </div>
  );
};

export default Timer;
