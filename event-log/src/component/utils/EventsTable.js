import React from "react";
import "antd/dist/antd.css";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text) => <a>{text}</a>,
  },
];

const data = [
  {
    key: "1",
    title: "basketball",
    category: "sports",
    date: "2022-02-24",
  },
];

function EventsTable() {
  return <Table columns={columns} dataSource={data} pagination={false} />;
}

export default EventsTable;
