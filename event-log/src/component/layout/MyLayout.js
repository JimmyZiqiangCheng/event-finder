import React, { useState, useEffect } from "react";
import MyContent from "./MyContent/MyContent";
import ThemeContext from "./theme";
import MySider from "./MySider/MySider";
import MyHeader from "./MyHeader/MyHeader";
import "antd/dist/antd.css";
import { Layout } from "antd";
import EventContext from "../events/eventContext";

function MyLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const themeValue = {
    collapsed,
    setCollapsed,
    showLogin,
    setShowLogin,
    showRating,
    setShowRating,
  };
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState(false);
  const eventValue = { selected, setSelected, filter, setFilter };
  return (
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
  );
}

export default MyLayout;
