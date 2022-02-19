import React, { useState } from "react";
import Events from "./component/Events";
import Event from "./component/Event";
import CreateEvent from "./component/CreateEvent";
import Profile from "./component/Profile";
import ThemeContext from "./component/views/theme";
import MySider from "./component/views/MySider";
import MyHeader from "./component/views/MyHeader";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [collapsed, setCollapsed] = useState("false");
  const value = { collapsed, setCollapsed };
  const { Content } = Layout;

  return (
    <Router>
      <ThemeContext.Provider value={value}>
        <Layout>
          <MySider />
          <Layout className="site-layout">
            <MyHeader />
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Routes>
                <Route path="/" element={<Events />} />
                <Route Path="/events/:id" element={<Event />} />
                <Route path="/create" element={<CreateEvent />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
