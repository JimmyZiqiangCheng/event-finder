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
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={data.photoURL} />}
              title={<p>{item.name}</p>}
              description={item.createAt}
            />
            {item.comment}
          </List.Item>
        )}
      />
    </div>
  );
}

export default MyComments;
