import React, { useContext } from "react";
import "./layout.css";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  UploadOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import ThemeContext from "./theme";
import { Link } from "react-router-dom";

const { Sider } = Layout;

function MySider() {
  const { collapsed } = useContext(ThemeContext);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="Events" icon={<CoffeeOutlined />}>
          <Link to="/">Events</Link>
        </Menu.Item>
        <Menu.Item key="Create Event" icon={<UploadOutlined />}>
          <Link to="/create">Create Event</Link>
        </Menu.Item>
        <Menu.Item key="Profile" icon={<UserOutlined />}>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default MySider;
