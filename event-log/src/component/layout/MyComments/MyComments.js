import React from "react";
import "antd/dist/antd.css";
import { List, Avatar } from "antd";
import styles from "./comments.module.scss";

function MyComments(props) {
  const { event } = props;
  const data = event.comments;

  return (
    <div className={styles.my_comments}>
      <List
        pagination={{
          pageSize: 10,
        }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar className="comment-avatar" src={item.photoURL}></Avatar>
              }
              title={<p>{item.name}</p>}
              description={item.createAt.slice(0, 10)}
            />
            {item.comment}
          </List.Item>
        )}
      />
    </div>
  );
}

export default MyComments;
