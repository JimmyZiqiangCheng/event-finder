import React, { useState, useContext } from "react";
import "antd/dist/antd.css";
import { message, Modal } from "antd";
import ThemeContext from "../../layout/theme";
import styles from "./modal.module.scss";
import LoginModalForm from "./LoginModalForm";
import SignupModalForm from "./SignupModalForm";

function MyModal(props) {
  const { loginType } = props;
  const [loading, setLoading] = useState(false);
  const { showLogin, setShowLogin, showSignup, setShowSignup } =
    useContext(ThemeContext);
  const handleGoogle = () => {
    setLoading(true);
    setTimeout(message.success("logged in via google"), 200);
    setLoading(false);
  };
  const onChangeRemember = (e) => {
    console.log(`remember password: ${e.target.checked}`);
  };
  const onSubmitLogin = (e) => {
    console.log(e);
    setLoading(true);
    setTimeout(message.success("logged in successfully"), 200);
    setLoading(false);
    setShowLogin(false);
  };
  const onRegister = (e) => {
    console.log(e);
    setLoading(true);
    setTimeout(message.success("sign up successfully"), 200);
    setLoading(false);
    setShowSignup(false);
  };
  return (
    <div className="my-models">
      <Modal
        className={styles.my_modal}
        visible={loginType ? showLogin : showSignup}
        onCancel={() =>
          loginType ? setShowLogin(false) : setShowSignup(false)
        }
        title={loginType ? "Login" : "Sign Up"}
        footer={null}
      >
        {loginType ? (
          <LoginModalForm
            loading={loading}
            onChangeRemember={onChangeRemember}
            onFinish={onSubmitLogin}
            handleGoogle={handleGoogle}
          />
        ) : (
          <SignupModalForm onFinish={onRegister} loading={loading} />
        )}
      </Modal>
    </div>
  );
}

export default MyModal;
