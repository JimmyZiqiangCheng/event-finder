import React, { useContext, useEffect } from "react";
import "antd/dist/antd.css";
import styles from "./header.module.scss";
import { Layout, Button } from "antd";
import ThemeContext from "../../context/themeContext";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { debounce } from "../../utils/utilFunc";
import SignupModal from "../../uiComponents/modals/SignupModal";
import LoginModal from "../../uiComponents/modals/LoginModal";
import { useToggle } from "../../utils/customHooks";

const { Header } = Layout;
function MyHeader() {
  const [showLogin, toggleLogin] = useToggle();
  const [showSignup, toggleSignup] = useToggle();
  const { collapsed, setCollapsed } = useContext(ThemeContext);
  useEffect(() => {
    const handleWindowResize = () => {
      window.innerWidth < 900 ? setCollapsed(true) : setCollapsed(false);
    };
    const delayedResize = debounce(handleWindowResize, 200);
    window.addEventListener("resize", delayedResize);
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
            onClick={toggleLogin}
          >
            Login
          </Button>
          <LoginModal showLogin={showLogin} toggleLogin={toggleLogin} />
          <Button
            className="header-button header-button-signup"
            type="primary"
            size={"middle"}
            onClick={toggleSignup}
          >
            Sign Up
          </Button>
          <SignupModal showSignup={showSignup} toggleSignup={toggleSignup} />
        </div>
      </Header>
    </div>
  );
}

export default MyHeader;
