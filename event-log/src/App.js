import React, { useEffect } from "react";
import MyLayout from "./component/layout/MyLayout";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData } from "./api/eventsApi";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = getData(dispatch);
    fetchData();
  }, []);
  return (
    <Router>
      <MyLayout />
    </Router>
  );
}

export default App;
