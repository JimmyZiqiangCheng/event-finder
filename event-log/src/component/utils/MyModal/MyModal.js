import React, { useState, useContext } from "react";
import "antd/dist/antd.css";
import { Input, Modal, Button, Checkbox, Form, message } from "antd";
import { LockOutlined, MailOutlined, GoogleOutlined } from "@ant-design/icons";
import ThemeContext from "../../layout/theme";
import styles from "./modal.module.scss";

function MyModal() {
  const [loading, setLoading] = useState(false);
  const { showLogin, setShowLogin } = useContext(ThemeContext);
  const handleGoogle = () => {
    setLoading(true);
    setTimeout(message.success("logged in via google"), 200);
    setLoading(false);
  };
  const onChangeRemember = (e) => {
    console.log(`remember password: ${e.target.checked}`);
  };
  const onFinish = (e) => {
    console.log(e);
    setLoading(true);
    setTimeout(message.success("logged in successfully"), 200);
    setLoading(false);
    setShowLogin(false);
  };
  return (
    <Modal
      className={styles.my_modal}
      visible={showLogin}
      onCancel={() => setShowLogin(false)}
      title="Login"
      footer={null}
    >
      <Form
        className="login-form-modal"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
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
          className="modal-input-field form-password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter a valid password!",
            },
          ]}
        >
          <Input placeholder="Password" prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item className="modal-others">
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox onChange={onChangeRemember} className="login-checkbox">
              Remember me
            </Checkbox>
          </Form.Item>
          <a href="." className="login-forget">
            Forget password
          </a>
        </Form.Item>

        <Form.Item className="modal-footer">
          <Button
            type="primary"
            loading={loading}
            htmlType="submit"
            className="modal-button regular-login-button"
          >
            Log in
          </Button>
          <p className="or-separator">OR</p>
          <Button
            type="primary"
            loading={loading}
            onClick={handleGoogle}
            className="modal-button google-login-button"
          >
            <GoogleOutlined
              style={{ fontSize: "18px" }}
              className="google-icon"
            />
            Login with Google
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default MyModal;
