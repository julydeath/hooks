import React, { useState } from "react";
import Counter from "./components/Counter";
import Reducer from "./components/Reduder";
import Timer from "./components/Timer";

function App() {
  const [number, setNumber] = useState(5);
  return (
    <div>
      {/* <Counter number={number} />
      <Timer /> */}
      <Reducer />
    </div>
  );
}

export default App;
