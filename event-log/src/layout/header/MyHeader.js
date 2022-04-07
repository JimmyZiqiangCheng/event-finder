import React, { useContext, useEffect } from "react";
import "antd/dist/antd.css";
import styles from "./header.module.scss";
import { Avatar, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ThemeContext } from "../../context/themeContext";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { debounce } from "../../utils/helperFunctions";
import { useToggle } from "../../utils/customHooks";
import { useAuth } from "../../utils/customHooks";
import { logOutUser } from "../../services/AuthService";
import FormModal from "../../uiComponents/modals/FormModal";
import SignupModalForm from "../../uiComponents/forms/SignupModalForm";
import LoginModalForm from "../../uiComponents/forms/LoginModalForm";
import ToggleButton from "../../uiComponents/buttons/ToggleButton";
import MyPopover from "../../uiComponents/popover/MyPopover";

const { Header } = Layout;
function MyHeader() {
  const [showLogin, toggleLogin] = useToggle();
  const [showSignup, toggleSignup] = useToggle();
  const [popoverVisible, setPopoverVisible] = useToggle();
  const { collapsed, setCollapsed } = useContext(ThemeContext);
  const { currentUser, isAuthenticated } = useAuth();

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
              {currentUser.photoURL ? (
                <Avatar src={currentUser.photoURL} />
              ) : (
                <Avatar icon={<UserOutlined />} />
              )}
              <MyPopover
                visible={popoverVisible}
                setVisible={setPopoverVisible}
                logout={logOutUser}
              >
                <p className="user-name"> {currentUser.name} </p>
              </MyPopover>
            </div>
          ) : (
            isAuthenticated === false && (
              <div className="header-button-group">
                <ToggleButton onClick={toggleLogin} name={` Login `} />
                <FormModal
                  visible={showLogin}
                  onCancel={toggleLogin}
                  title={"Log In"}
                >
                  <LoginModalForm toggleLogin={toggleLogin} />
                </FormModal>
                <ToggleButton onClick={toggleSignup} name={"Sign Up"} />
                <FormModal
                  visible={showSignup}
                  onCancel={toggleSignup}
                  title={"Sign Up"}
                >
                  <SignupModalForm toggleSignup={toggleSignup} />
                </FormModal>
              </div>
            )
          )}
        </div>
      </Header>
    </div>
  );
}

export default MyHeader;
