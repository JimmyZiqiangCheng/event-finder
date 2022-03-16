import React, { useState, useEffect } from "react";
import MyContent from "./MyContent/MyContent";
import ThemeContext from "./theme";
import MySider from "./MySider/MySider";
import MyHeader from "./MyHeader/MyHeader";
import "antd/dist/antd.css";
import { Layout } from "antd";

function MyLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const themeValue = {
    collapsed,
    setCollapsed,
    showLogin,
    setShowLogin,
    showRating,
    setShowRating,
    showJoin,
    setShowJoin,
    showSignup,
    setShowSignup,
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
