import React from "react";
import { Input, Button, Form, message } from "antd";
import { UnlockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { useToggle } from "../../utils/customHooks";

function SignupModalForm({ toggleSignup }) {
  const [loading, toggleLoading] = useToggle();
  const handleRegister = (e) => {
    console.log(e);
    toggleLoading();
    setTimeout(message.success("sign up successfully"), 200);
    toggleLoading();
    toggleSignup();
  };

  return (
    <Form className="Signup-form-modal" onFinish={handleRegister}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="username" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="Email" prefix={<MailOutlined />} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="password" prefix={<UnlockOutlined />} />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="confirm password"
          prefix={<UnlockOutlined />}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          loading={loading}
          htmlType="submit"
          className="modal-button regular-login-button"
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
export default SignupModalForm;
