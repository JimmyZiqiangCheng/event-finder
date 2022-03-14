import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { List, Avatar } from "antd";
import styles from "./comments.module.scss";
import moment from "moment";

function MyComments(props) {
  const { event } = props;
  const data = event.comments;
  const getTime = (comment) => {
    const [years, months, days] = [
      Number(moment().format().slice(0, 4)) -
        Number(comment.createAt.slice(0, 4)),
      Number(moment().format().slice(5, 7)) -
        Number(comment.createAt.slice(5, 7)),
      Number(moment().format().slice(8, 10)) -
        Number(comment.createAt.slice(8, 10)),
    ];
    const unit =
      years > 1
        ? "years"
        : years === 1
        ? "year"
        : months > 1
        ? "months"
        : months === 1
        ? "month"
        : "days";
    const finalTime = years > 0 ? years : months > 0 ? months : days;
    return `${finalTime} ${unit} ago`;
  };

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
              description={getTime(item)}
            />
            {item.comment}
          </List.Item>
        )}
      />
    </div>
  );
}

export default MyComments;
