import React from "react";
import "./layout.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Event from "../Event";
import Events from "../Events";
import CreateEvent from "../CreateEvent";
import Profile from "../Profile";

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
