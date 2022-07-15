import React, { useContext, useEffect } from "react";
import "antd/dist/antd.css";
import styles from "./header.module.scss";
import { Layout } from "antd";
import { ThemeContext } from "../../context/themeContext";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useDebounce } from "../../utils/customHooks";
import { useAuth, useTheme, useToggle } from "../../utils/customHooks";
import { logOutUser } from "../../services/AuthService";
import FormModal from "../../uiComponents/modals/FormModal";
import SignupModalForm from "../../uiComponents/forms/SignupModalForm";
import LoginModalForm from "../../uiComponents/forms/LoginModalForm";
import ToggleButton from "../../uiComponents/buttons/ToggleButton";
import MyPopUp from "../../uiComponents/popup/MyPopUp";
import { displayAvatar } from "../../utils/helperFunctions";

const { Header } = Layout;
function MyHeader() {
  const { showLoginModal, setShowLoginModal } = useTheme();
  const [showSignup, toggleSignup] = useToggle();
  const [popUpVisible, setPopUpVisible] = useToggle();
  const { collapsed, setCollapsed } = useContext(ThemeContext);
  const { currentUser, isAuthenticated } = useAuth();
  const handleWindowResize = () => {
    window.innerWidth < 900 ? setCollapsed(true) : setCollapsed(false);
  };
  const delayedResize = useDebounce(handleWindowResize, 200);
  useEffect(() => {
    // const handleWindowResize = () => {
    //   window.innerWidth < 900 ? setCollapsed(true) : setCollapsed(false);
    // };
    //const delayedResize = debounce(handleWindowResize, 200);
    window.addEventListener("resize", delayedResize);
    return () => window.removeEventListener("resize", delayedResize);
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
              {displayAvatar(currentUser.photoURL)}
              <MyPopUp
                visible={popUpVisible}
                setVisible={setPopUpVisible}
                logout={logOutUser}
              >
                <p className="user-name"> {currentUser.name} </p>
              </MyPopUp>
            </div>
          ) : (
            isAuthenticated === false && (
              <div data-testid="button-group" className="header-button-group">
                <ToggleButton
                  onClick={() => setShowLoginModal(true)}
                  name={"Log In"}
                  data-testid="login-button"
                />
                <FormModal
                  visible={showLoginModal}
                  onCancel={() => setShowLoginModal(false)}
                  title={"Log In"}
                >
                  <LoginModalForm
                    toggleLogin={() => setShowLoginModal(false)}
                  />
                </FormModal>
                <ToggleButton
                  onClick={toggleSignup}
                  name={"Sign Up"}
                  data-testid="signup-button"
                />
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
