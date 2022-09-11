import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Card, List } from "antd";
import { getData } from "../../services/eventsApi";
import styles from "./attendees.module.scss";
import { UserOutlined } from "@ant-design/icons";
import { loadEvents } from "../../redux/actions/eventsActions";

const { Meta } = Card;
function Attendees() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const loadData = async () => {
      const [events] = await getData(null, id);
      dispatch(loadEvents(events));
    };
    loadData();
  }, []);
  const event = useSelector((state) => state.currentEvent);
  const getPhoto = (url) => {
    return url ? (
      <img alt="example" src={url} />
    ) : (
      <UserOutlined style={{ fontSize: "242px" }} />
    );
  };
  return (
    <div>
      {event && (
        <div className={styles.my_attendees}>
          <h1>All Attendees</h1>
          <List
            itemLayout="horizontal"
            dataSource={event.attendees}
            pagination={{
              onChange: (page) => {},
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
      )}
    </div>
  );
}

export default Attendees;
