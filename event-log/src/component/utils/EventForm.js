import React from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  TreeSelect,
} from "antd";

function EventForm() {
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
    >
      <Form.Item label="Title">
        <Input />
      </Form.Item>
      <Form.Item label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Category">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
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
        <Form.Item label="">
          <Button className="header-button" type="primary" size={"middle"}>
            Create
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}

export default EventForm;
