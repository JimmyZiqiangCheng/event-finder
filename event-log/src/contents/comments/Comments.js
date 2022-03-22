import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../api/eventsApi";
import { List, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styles from "./comments.module.scss";

function Comments() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = getData(dispatch, null, id);
    fetchData();
  }, []);
  const event = useSelector((state) => state.events[0]);
  return (
    <div className={styles.my_comments}>
      <List
        pagination={{
          pageSize: 10,
        }}
        itemLayout="horizontal"
        dataSource={event.comments}
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

export default Comments;
