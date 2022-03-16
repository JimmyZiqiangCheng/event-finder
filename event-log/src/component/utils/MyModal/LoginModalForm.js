import React from "react";
import { Input, Button, Checkbox, Form } from "antd";
import { LockOutlined, MailOutlined, GoogleOutlined } from "@ant-design/icons";
function LoginModalForm(props) {
  const { onFinish, handleGoogle, onChangeRemember, loading } = props;
  return (
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
        <Input
          key="login-email"
          placeholder="Email"
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
  );
}

export default LoginModalForm;
