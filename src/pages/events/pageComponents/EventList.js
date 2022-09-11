import React from "react";
import "antd/dist/antd.css";
import { List, Avatar, Space, Rate } from "antd";
import { MessageOutlined, LikeOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const defaultAvatar = "https://joeschmoe.io/api/v1/random";

function EventList(props) {
  const events = useSelector((state) => state.events);
  const hosts = useSelector((state) => state.hosts);

  const createAvatar = (hosts, item, defaultAvatar) => {
    const arr =
      hosts.length !== 0
        ? hosts.filter((h) => h.eventId === item.eventId)
        : null;
    let source = defaultAvatar;
    if (arr && arr.length > 0) {
      source = arr[0].photoUrl;
    }
    return <Avatar src={source} />;
  };

  const createRating = (item) => {
    const rate =
      item.rate.length !== 0
        ? Math.floor(
            item.rate.map((ele) => ele.rate).reduce((sum, a) => a + sum) /
              item.rate.length
          )
        : 0;
    return <Rate allowHalf disabled defaultValue={rate} />;
  };

  const countLike = (item) => {
    return item.rate.length !== 0
      ? item.rate.map((ele) => ele.rate).filter((ele) => ele === 5).length
      : 0;
  };

  return (
    <>
      {events.length === 0 ? (
        <p> no events </p>
      ) : (
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 3,
          }}
          dataSource={events}
          renderItem={(item) => (
            <Link to={`/events/${item.eventId}`}>
              <List.Item
                key={item.title}
                data-testid="row"
                actions={[
                  <Space>{createRating(item)}</Space>,
                  <IconText
                    icon={LikeOutlined}
                    text={countLike(item)}
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text={item.comments.length}
                    key="list-vertical-message"
                  />,
                ]}
                extra={
                  <img
                    className="event-img"
                    width={272}
                    alt=""
                    src={`./img/${item.category}.jpg`}
                  />
                }
              >
                <List.Item.Meta
                  avatar={createAvatar(hosts, item, defaultAvatar)}
                  title={item.title}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            </Link>
          )}
        />
      )}
    </>
  );
}

export default EventList;
