import React from "react";
import "antd/dist/antd.css";
import { Card, List } from "antd";
import styles from "./attendees.module.scss";

const { Meta } = Card;
function MyAttendees(props) {
  const { event } = props;
  const data = event.attendees;
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
            cover={<img alt="example" src={item.photoURL} />}
          >
            <Meta title={item.name} description={item.email} />
          </Card>
        )}
      />
      {/* 
      <div className="attendee-list">
        {event.attendees.map((a) => (
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={a.photoURL} />}
          >
            <Meta title={a.name} description={a.email} />
          </Card>
        ))}
        </div> */}
    </div>
  );
}

export default MyAttendees;
