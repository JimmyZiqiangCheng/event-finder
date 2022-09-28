import React from "react";
import { Avatar } from "antd";
import "antd/dist/antd.min.css";
import { UserOutlined } from "@ant-design/icons";
import EventsTable from "./pageComponents/EventsTable";
import { useAuth } from "../../utils/customHooks";
import { FormattedMessage } from "react-intl";

function Profile() {
  const { currentUser } = useAuth();
  return (
    <div className="profile-background">
      <div className="profile-content">
        <h1>
          <FormattedMessage id="profile-title" defaultMessage="My Profile" />
        </h1>
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
                <th className="table-item1">
                  <FormattedMessage
                    id="profile-user-name"
                    defaultMessage="User Name"
                  />
                </th>
                <th className="table-item2">
                  <FormattedMessage
                    id="profile-email-address"
                    defaultMessage="Email Address"
                  />
                </th>
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
