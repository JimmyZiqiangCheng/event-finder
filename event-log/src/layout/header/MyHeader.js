import React, { useContext, useEffect } from "react";
import "antd/dist/antd.css";
import styles from "./header.module.scss";
import { Layout, Button } from "antd";
import ThemeContext from "../../context/themeContext";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import MyModal from "../../components/modals/MyFormModal";

const { Header } = Layout;
function MyHeader() {
  const { collapsed, setCollapsed, setShowLogin, setShowSignup } =
    useContext(ThemeContext);
  useEffect(() => {
    const handleWindowResize = () => {
      window.innerWidth < 900 ? setCollapsed(true) : setCollapsed(false);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
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
          <MyModal loginType={true} />
          <Button
            className="header-button header-button-signup"
            type="primary"
            size={"middle"}
            onClick={() => setShowSignup(true)}
          >
            Sign Up
          </Button>
          <MyModal loginType={false} />
        </div>
      </Header>
    </div>
  );
}

export default MyHeader;
