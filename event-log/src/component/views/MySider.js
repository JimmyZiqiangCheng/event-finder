import React, { useContext } from "react";
import "./view.css";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  UploadOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import ThemeContext from "./theme";

const { Sider } = Layout;

function MySider() {
  const { collapsed } = useContext(ThemeContext);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="Events" icon={<CoffeeOutlined />}>
          Events
        </Menu.Item>
        <Menu.Item key="Create Event" icon={<UploadOutlined />}>
          Create Event
        </Menu.Item>
        <Menu.Item key="Profile" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default MySider;
