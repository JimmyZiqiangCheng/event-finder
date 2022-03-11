import React, { useContext, useState } from "react";
import "antd/dist/antd.css";
import styles from "./header.module.scss";
import { Layout, Button } from "antd";
import ThemeContext from "../theme";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import LoginModal from "../../utils/MyModal/LoginModal";

const { Header } = Layout;
function MyHeader() {
  const { collapsed, setCollapsed, setShowLogin } = useContext(ThemeContext);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={styles.my_header}>
      <Header
        className="site-layout-background my-header"
        style={{ padding: 0 }}
      >
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: toggle,
          }
        )}
        <div className="header-button-group">
          <Button
            className="header-button header-button-login"
            type="primary"
            size={"middle"}
            onClick={() => setShowLogin(true)}
          >
            Login
          </Button>
          <LoginModal />
          <Button
            className="header-button header-button-signup"
            type="primary"
            size={"middle"}
          >
            Sign Up
          </Button>
        </div>
      </Header>
    </div>
  );
}

export default MyHeader;
