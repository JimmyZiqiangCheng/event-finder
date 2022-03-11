import React from "react";
import "antd/dist/antd.css";
import { Card, List } from "antd";
import styles from "./attendees.module.scss";
import { UserOutlined } from "@ant-design/icons";
const { Meta } = Card;
function MyAttendees(props) {
  const { event } = props;
  const data = event.attendees;
  const getPhoto = (url) => {
    return url ? (
      <img alt="example" src={url} />
    ) : (
      <UserOutlined style={{ fontSize: "242px" }} />
    );
  };
  return (
    <div className={styles.my_attendees}>
      <h1>All Attendees</h1>
      <List
        itemLayout="horizontal"
        dataSource={data}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 12,
        }}
        renderItem={(item) => (
          <Card
            hoverable
            style={{ width: 240 }}
            cover={getPhoto(item.photoURL)}
          >
            <Meta title={item.name} description={item.email} />
          </Card>
        )}
      />
    </div>
  );
}

export default MyAttendees;
