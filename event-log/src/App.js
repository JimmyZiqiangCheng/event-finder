import React, { useState } from "react";
import MyContent from "./component/layout/MyContent/MyContent";
import ThemeContext from "./component/layout/theme";
import MySider from "./component/layout/MySider/MySider";
import MyHeader from "./component/layout/MyHeader/MyHeader";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const value = { collapsed, setCollapsed };

  return (
    <Router>
      <ThemeContext.Provider value={value}>
        <Layout>
          <MySider />
          <Layout className="site-layout">
            <MyHeader />
            <MyContent />
          </Layout>
        </Layout>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
