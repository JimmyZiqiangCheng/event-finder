import React, { useState, useContext } from "react";
import "antd/dist/antd.css";
import { Input, Modal, Button, Checkbox, Form, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import ThemeContext from "../../layout/theme";
import styles from "./modal.module.scss";

function MyModal() {
  const [loading, setLoading] = useState(false);
  const { showLogin, setShowLogin } = useContext(ThemeContext);
  const handleGoogle = () => {
    setLoading(true);
    setTimeout(alert("logged in via google"), 200);
    setLoading(false);
  };
  const handleLogin = () => {
    message.success("logged in", 1);
  };
  const onChangeRemember = (e) => {
    console.log(`remember password: ${e.action.checked}`);
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
      <Form className="login-form-modal">
        <div className="modal-input-field-group">
          <Form.Item
            key="email"
            className="modal-input-field form-email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}
          >
            <Input placeholder="Email" prefix={<MailOutlined />} />
          </Form.Item>
          <Form.Item
            key="password"
            className="modal-input-field form-password"
            name="password"
            rules={[
              {
                required: true,
                type: "password",
                message: "Please enter a valid password!",
              },
            ]}
          >
            <Input
              placeholder="Password"
              type="password"
              prefix={<LockOutlined />}
            />
          </Form.Item>
        </div>
      </Form>
      <div className="modal-others">
        <Checkbox onChange={onChangeRemember} className="login-checkbox">
          Remember me
        </Checkbox>
        <a href="." className="login-forget">
          Forget password
        </a>
      </div>
    </Modal>
  );
}

export default MyModal;
