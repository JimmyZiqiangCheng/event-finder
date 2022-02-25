import React from "react";
import { Avatar } from "antd";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import EventsTable from "../utils/EventsTable";

function Profile() {
  return (
    <div className="profile-content">
      <h1>My Profile</h1>
      <Avatar size={64} icon={<UserOutlined />} />
      <EventsTable />
    </div>
  );
}

export default Profile;
