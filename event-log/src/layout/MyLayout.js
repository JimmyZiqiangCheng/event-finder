import React, { useState } from "react";
import MyContent from "./content/MyContent";
import ThemeContext from "../context/themeContext";
import MySider from "./sider/MySider";
import MyHeader from "./header/MyHeader";
import "antd/dist/antd.css";
import { Layout } from "antd";

function MyLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const themeValue = {
    collapsed,
    setCollapsed,
  };
  return (
    <ThemeContext.Provider value={themeValue}>
      <Layout>
        <MySider />
        <Layout className="site-layout">
          <MyHeader />
          <MyContent />
        </Layout>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default MyLayout;
