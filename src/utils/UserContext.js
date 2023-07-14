import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const UserContext = ({ children }) => {
  const [number, setNumber] = useState(5);

  return (
    <ThemeContext.Provider value={number}>{children}</ThemeContext.Provider>
  );
};

export default UserContext;
