import React, { createContext, useState } from "react";
import Counter from "./components/Counter";
import Reducer from "./components/Reduder";
import Timer from "./components/Timer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import UserContext from "./utils/UserContext";

// export const ThemeContext = createContext();
// console.log("context", ThemeContext);

function App() {
  const [number, setNumber] = useState(5);
  const contextValue = { number, setNumber };
  return (
    <div>
      {/* <Counter number={number} />
      <Timer /> */}
      <UserContext>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Reducer />
      </UserContext>
    </div>
  );
}

export default App;
