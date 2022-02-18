import React from "react";
const themes = {
  collapsed: false,
  changeCollapsed: () => {},
};

const ThemeContext = React.createContext(themes.collapsed);
export default ThemeContext;
