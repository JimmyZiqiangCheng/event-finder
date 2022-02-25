import React from "react";
import "./layout.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Event from "../events/Event";
import Events from "../events/Events";
import CreateEvent from "../events/CreateEvent";
import Profile from "../profile/Profile";

const { Content } = Layout;
function MyContent() {
  return (
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
  );
}

export default MyContent;
