import React, { useContext, useEffect } from "react";
import "antd/dist/antd.css";
import styles from "./header.module.scss";
import { Avatar, Layout } from "antd";
import { ThemeContext } from "../../context/themeContext";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { debounce } from "../../utils/helperFunctions";
import SignupModal from "../../uiComponents/modals/SignupModal";
import LoginModal from "../../uiComponents/modals/LoginModal";
import { useToggle } from "../../utils/customHooks";
import HeaderButton from "../../uiComponents/buttons/HeaderButton";
import { AuthContext } from "../../context/authContext";
import MyPopover from "../../uiComponents/popover/MyPopover";
import { logOutUser } from "../../services/AuthService";

const { Header } = Layout;
function MyHeader() {
  const [showLogin, toggleLogin] = useToggle();
  const [showSignup, toggleSignup] = useToggle();
  const [popoverVisible, setPopoverVisible] = useToggle();
  const { collapsed, setCollapsed } = useContext(ThemeContext);
  const { currentUser, isAuthenticated } = useContext(AuthContext);

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
          {isAuthenticated ? (
            <div className="header-user-info">
              <Avatar src={currentUser.photoURL} />
              <MyPopover
                visible={popoverVisible}
                setVisible={setPopoverVisible}
                logout={logOutUser}
              >
                <p className="user-name"> {currentUser.name} </p>
              </MyPopover>
            </div>
          ) : (
            <div className="header-button-group">
              <HeaderButton toggle={toggleLogin} name={` Login `} />
              <LoginModal
                showLogin={showLogin}
                toggleLogin={toggleLogin}
              />{" "}
              <HeaderButton toggle={toggleSignup} name={"Sign Up"} />
              <SignupModal
                showSignup={showSignup}
                toggleSignup={toggleSignup}
              />
            </div>
          )}
        </div>
      </Header>
    </div>
  );
}

export default MyHeader;
