import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Event from "../../contents/eventDetail/EventDetail";
import Events from "../../contents/events/Events";
import CreateEvent from "../../contents/createEvent/CreateEvent";
import Profile from "../../contents/user/Profile";
import styles from "./content.module.scss";
import Attendees from "../../contents/attendees/Attendees";
import Comments from "../../contents/comments/Comments";

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
          <Route path="/events/:id/Attendee" element={<Attendees />} />
          <Route path="/events/:id/comments" element={<Comments />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Content>
    </div>
  );
}

export default MyContent;
