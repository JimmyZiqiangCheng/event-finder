import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Event from "../../events/Event";
import Events from "../../events/Events";
import CreateEvent from "../../events/CreateEvent";
import Profile from "../../profile/Profile";
import styles from "./content.module.scss";

const { Content } = Layout;
function MyContent() {
  return (
    <div className={styles.my_content}>
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
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<Event />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Content>
    </div>
  );
}

export default MyContent;
