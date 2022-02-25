import React from "react";
import "antd/dist/antd.css";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import "../layout/layout.css";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function EventList(props) {
  const { events } = props;
  const avatar = "https://joeschmoe.io/api/v1/random";
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={events}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText
              icon={StarOutlined}
              text={Math.floor(
                item.rate.map((ele) => ele.rate).reduce((sum, a) => a + sum) /
                  item.rate.length
              )}
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text={
                item.rate.map((ele) => ele.rate).filter((ele) => ele === 5)
                  .length
              }
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text={item.comments.length}
              key="list-vertical-message"
            />,
          ]}
          extra={
            <a href={item.href}>
              <img width={272} alt="logo" src={`./img/${item.category}.jpg`} />
            </a>
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
}

export default EventList;
