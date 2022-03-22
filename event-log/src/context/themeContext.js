import React from "react";
const themes = {
  collapsed: false,
  showLogin: false,
  showRating: false,
  showJoin: false,
  showSignup: false,
};

const ThemeContext = React.createContext(themes);
export default ThemeContext;