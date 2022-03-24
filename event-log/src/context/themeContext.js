import React from "react";
const themes = {
  collapsed: false,
  showLogin: false,
  showSignup: false,
};

const ThemeContext = React.createContext(themes);
export default ThemeContext;
