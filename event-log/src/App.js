import React from "react";
import MyLayout from "./component/layout/MyLayout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <MyLayout />
    </Router>
  );
}

export default App;
