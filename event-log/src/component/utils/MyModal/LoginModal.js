import React, { useState, useContext } from "react";
import "antd/dist/antd.css";
import { Input, Modal, Button, Checkbox, Alert } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import ThemeContext from "../../layout/theme";
import styles from "./modal.module.scss";

function LoginModal(props) {
  const [loading, setLoading] = useState(false);
  const { showLogin, setShowLogin } = useContext(ThemeContext);
  const handleGoogle = () => {
    setLoading(true);
    setTimeout(alert("logged in via google"), 200);
    setLoading(false);
  };
  const handleLogin = () => {
    alert("logged in");
  };
  const onChangeRemember = (e) => {
    alert(`remember password: ${e.action.checked}`);
  };
  return (
    <Modal
      className={styles.my_modal}
      visible={showLogin}
      onOk={handleLogin}
      onCancel={() => setShowLogin(false)}
      title="Login"
      footer={[
        <Button
          key="loginRegular"
          type="primary"
          loading={loading}
          onClick={handleLogin}
          className="modal-button regular-login-button"
        >
          Log in
        </Button>,
        <p className="or-separator">OR</p>,
        <Button
          key="loginGoogle"
          type="primary"
          loading={loading}
          onClick={handleGoogle}
          className="modal-button google-login-button"
        >
          Login with Google
        </Button>,
      ]}
    >
      <div className="modal-input-field-group">
        <Input
          className="modal-input-field"
          placeholder="Email"
          prefix={<MailOutlined />}
        />
        <Input
          className="modal-input-field"
          placeholder="Password"
          prefix={<LockOutlined />}
        />
      </div>
      <div className="modal-others">
        <Checkbox onChange={onChangeRemember} className="login-checkbox">
          {" "}
          Remember me{" "}
        </Checkbox>
        <a href="." className="login-forget">
          {" "}
          Forget password{" "}
        </a>
      </div>
    </Modal>
  );
}

export default LoginModal;
