import React, { useState } from "react";
import MyContent from "./content/MyContent";
import ThemeContext from "../context/themeContext";
import AuthContext from "../context/authContext";
import MySider from "./sider/MySider";
import MyHeader from "./header/MyHeader";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { onAuthStatusChange } from "../services/AuthService";

function MyLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const themeValue = {
    collapsed,
    setCollapsed,
  };
  const authValue = {
    currentUser,
    setCurrentUser,
  };
  onAuthStatusChange(setCurrentUser);
  return (
    <AuthContext.Provider value={authValue}>
      <ThemeContext.Provider value={themeValue}>
        <Layout>
          <MySider />
          <Layout className="site-layout">
            <MyHeader />
            <MyContent />
          </Layout>
        </Layout>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default MyLayout;
