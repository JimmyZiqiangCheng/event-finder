import React from "react";
import "antd/dist/antd.css";
import { List, Avatar } from "antd";
import styles from "./comment.modules.scss";
function MyComments(props) {
  const { event } = props;
  const data = event.comments;
  return (
    <div className={styles.my_comments}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={data.photoURL} />}
              title={<p>{item.name}</p>}
              description={item.comment}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default MyComments;