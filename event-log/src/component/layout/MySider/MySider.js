import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  UploadOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import ThemeContext from "../theme";
import { Link } from "react-router-dom";
import styles from "./sider.module.scss";
import { getData } from "../../../api/eventsApi";

const { Sider } = Layout;

function MySider() {
  const dispatch = useDispatch();
  const handleClick = () => {
    const fetchData = getData(dispatch);
    fetchData();
  };
  const { collapsed } = useContext(ThemeContext);
  return (
    <div className={styles.my_sider}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="Events"
            icon={<CoffeeOutlined />}
            onClick={handleClick}
          >
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
    </div>
  );
}

export default MySider;
