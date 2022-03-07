import React, { useState } from "react";
import MyContent from "./component/layout/MyContent/MyContent";
import ThemeContext from "./component/layout/theme";
import MySider from "./component/layout/MySider/MySider";
import MyHeader from "./component/layout/MyHeader/MyHeader";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import EventContext from "./component/events/eventContext";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const themeValue = { collapsed, setCollapsed };
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState(false);
  const eventValue = { selected, setSelected, filter, setFilter };
  return (
    <Router>
      <ThemeContext.Provider value={themeValue}>
        <Layout>
          <EventContext.Provider value={eventValue}>
            <MySider />
            <Layout className="site-layout">
              <MyHeader />
              <MyContent />
            </Layout>
          </EventContext.Provider>
        </Layout>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
