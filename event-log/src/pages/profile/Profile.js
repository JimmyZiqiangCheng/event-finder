import React from "react";
import { Avatar } from "antd";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import EventsTable from "./pageComponents/EventsTable";
import { useAuth } from "../../utils/customHooks";

function Profile() {
  const { currentUser } = useAuth();
  return (
    <div className="profile-background">
      <div className="profile-content">
        <h1>My Profile</h1>
        {currentUser.photoURL ? (
          <Avatar
            className="profile-avatar"
            src={currentUser.photoURL}
            size={176}
          ></Avatar>
        ) : (
          <Avatar
            className="profile-avatar"
            size={176}
            icon={<UserOutlined />}
          />
        )}
        <div className="profile-table-background">
          <table className="profile-table">
            <tbody>
              <tr>
                <th className="table-item1">User Name</th>
                <th className="table-item2">Email Address</th>
              </tr>
              <tr>
                <td className="table-item1">{currentUser.name}</td>
                <td className="table-item2">{currentUser.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <EventsTable />
      </div>
    </div>
  );
}

export default Profile;
