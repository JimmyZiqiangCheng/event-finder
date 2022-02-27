import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, DatePicker } from "antd";

function EventForm(props) {
  const { onSubmit, categories } = props;
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      className="event-form"
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Title"
        rules={[
          {
            required: true,
            message: "Title is required!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Category">
        <Select>
          {categories.map((category, key) => (
            <Select.Option key={key} value={category}>
              {category}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="City">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Venue">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item className="date-picker" label="DatePicker">
        <DatePicker />
      </Form.Item>
      <div className="create-button">
        <Form.Item label="button">
          <Button
            className="header-button form-button"
            type="primary"
            htmlType="submit"
            size={"middle"}
          >
            Create
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}

export default EventForm;
