import React, { useContext } from "react";
import { ThemeContext } from "../utils/UserContext";

const About = () => {
  const data = useContext(ThemeContext);
  console.log("data", data);
  return <div>About</div>;
};

export default About;
