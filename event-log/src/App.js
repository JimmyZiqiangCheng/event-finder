import React, { useState } from "react";
import Home from "./component/views/Home";
import ThemeContext from "./component/views/theme";

function App() {
  const [collapsed, setCollapsed] = useState("false");
  const value = { collapsed, setCollapsed };

  return (
    <ThemeContext.Provider value={value}>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
