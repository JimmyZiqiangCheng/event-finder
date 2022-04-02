import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  UploadOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { ThemeContext } from "../../context/themeContext";
import { Link } from "react-router-dom";
import styles from "./sider.module.scss";
import { getData } from "../../api/eventsApi";
import { loadEvents } from "../../redux/actions/eventActions";
import { loadHosts } from "../../redux/actions/hostActions";
import { AuthContext } from "../../context/authContext";
import { useToggle } from "../../utils/customHooks";
import FormModal from "../../uiComponents/modals/FormModal";
import LoginModalForm from "../../uiComponents/forms/LoginModalForm";

const { Sider } = Layout;

function MySider() {
  const { isAuthenticated } = useContext(AuthContext);
  const [showLogin, toggleLogin] = useToggle();
  const onClick = () => {
    !isAuthenticated && toggleLogin();
  };
  const dispatch = useDispatch();
  const handleClick = async () => {
    const [events, hosts] = await getData();
    dispatch(loadEvents(events));
    dispatch(loadHosts(hosts));
  };
  const { collapsed } = useContext(ThemeContext);
  return (
    <div className={styles.my_sider}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo-icon">
          <img src="../../../logo_big.svg" alt="logo" className="logo-img" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="Events"
            icon={<CoffeeOutlined />}
            onClick={isAuthenticated ? handleClick : onClick}
          >
            <Link to="/">Events</Link>
          </Menu.Item>
          <Menu.Item
            key="Create Event"
            icon={<UploadOutlined />}
            onClick={onClick}
          >
            <Link to="/create">Create Event</Link>
          </Menu.Item>
          <Menu.Item key="Profile" icon={<UserOutlined />} onClick={onClick}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}

export default MySider;
