import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../api/eventsApi";
import { List, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styles from "./comments.module.scss";
import { loadEvents } from "../../redux/actions/eventActions";

function Comments() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const loadData = async () => {
      const [events] = await getData(null, id);
      dispatch(loadEvents(events));
    };
    loadData();
  }, []);
  const event = useSelector((state) => state.events[0]);
  return (
    <div className={styles.my_comments}>
      {event && (
        <div className="comments">
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
                    <Avatar
                      className="comment-avatar"
                      src={item.photoURL}
                    ></Avatar>
                  }
                  title={<p>{item.name}</p>}
                  description={item.createAt.slice(0, 10)}
                />
                <div className="item-content">{item.comment}</div>
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  );
}

export default Comments;
