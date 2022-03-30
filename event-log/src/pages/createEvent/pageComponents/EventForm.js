import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, DatePicker, message } from "antd";

function EventForm(props) {
  const { onSubmit, categories, cities, venues } = props;
  const onFinishFailed = (errorInfo) => {
    message.error(`Failed: ${errorInfo}`);
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
        name="title"
        rules={[
          {
            required: true,
            message: "Please input the event title!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Please input the event description!",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="Category"
        name="category"
        rules={[
          {
            required: true,
            message: "Please select the event category!",
          },
        ]}
      >
        <Select>
          {categories.map((category, key) => (
            <Select.Option key={key} value={category}>
              {category}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="City"
        name="city"
        rules={[
          {
            required: true,
            message: "Please select which city the event will be held!",
          },
        ]}
      >
        <Select>
          {cities.map((city, key) => (
            <Select.Option key={key} value={city}>
              {city}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Venue"
        name="venue"
        rules={[
          {
            required: true,
            message: "Please select the event venue!",
          },
        ]}
      >
        <Select>
          {venues.map((venue, key) => (
            <Select.Option key={key} value={venue}>
              {venue}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        className="date-picker"
        label="DatePicker"
        name="date"
        rules={[
          {
            required: true,
            message: "Please select the event date!",
          },
        ]}
      >
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
