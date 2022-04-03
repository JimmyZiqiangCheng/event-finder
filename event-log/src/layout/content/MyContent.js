import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Event from "../../pages/eventDetail/EventDetail";
import Events from "../../pages/events/Events";
import CreateEvent from "../../pages/createEvent/CreateEvent";
import Profile from "../../pages/profile/Profile";
import styles from "./content.module.scss";
import Attendees from "../../pages/attendees/Attendees";
import Comments from "../../pages/comments/Comments";
import ProtectedRoute from "../../utils/ProtectedRoute";

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
          <Route
            path="/events/:id"
            element={
              <ProtectedRoute>
                <Event />
              </ProtectedRoute>
            }
          />
          <Route
            path="/events/:id/Attendee"
            element={
              <ProtectedRoute>
                <Attendees />
              </ProtectedRoute>
            }
          />
          <Route
            path="/events/:id/comments"
            element={
              <ProtectedRoute>
                <Comments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreateEvent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Content>
    </div>
  );
}

export default MyContent;
