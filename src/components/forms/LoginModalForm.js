import React, { useState } from "react";
import { Input, Button, Checkbox, Form } from "antd";
import { LockOutlined, MailOutlined, GoogleOutlined } from "@ant-design/icons";
import {
  loginWithEmail,
  loginWithGoogle,
  resetPassword,
} from "../../services/authService";
import { useToggle } from "../../utils/customHooks";

function LoginModalForm({ toggleLogin }) {
  const [loading, toggleLoading] = useToggle();

  const handleGoogle = async () => {
    toggleLoading();
    await loginWithGoogle();
    toggleLoading();
    toggleLogin(false);
  };
  const handleChangeRemember = (e) => {
    console.log(`remember password: ${e.target.checked}`);
  };
  const handleLogin = async (e) => {
    await loginWithEmail(e.email, e.password);
    toggleLogin(false);
  };

  const handleReset = (e) => {
    resetPassword(e.email, toggleLogin);
  };

  return (
    <Form
      className="login-form-modal"
      data-testid="login-modal"
      initialValues={{
        remember: true,
      }}
      onFinish={handleLogin}
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
        <Input
          placeholder="Email"
          data-testid="email"
          prefix={<MailOutlined />}
        />
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
        <Input.Password
          placeholder="Password"
          data-testid="password"
          prefix={<LockOutlined />}
        />
      </Form.Item>
      <Form.Item className="modal-others">
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox onChange={handleChangeRemember} className="login-checkbox">
            Remember me
          </Checkbox>
        </Form.Item>
        <p className="login-forget" onClick={handleReset}>
          Forget password
        </p>
      </Form.Item>

      <Form.Item className="modal-footer">
        <Button
          type="primary"
          data-testid="submit-login"
          htmlType="submit"
          className="modal-button regular-login-button"
          loading={loading}
        >
          Log in
        </Button>
        <p className="or-separator">OR</p>
        <Button
          type="primary"
          onClick={handleGoogle}
          className="modal-button google-login-button"
          loading={loading}
        >
          <GoogleOutlined
            style={{ fontSize: "18px" }}
            className="google-icon"
          />
          Login with Google
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginModalForm;
