import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, List } from "antd";
import { getData } from "../../api/eventsApi";
import styles from "./attendees.module.scss";
import { UserOutlined } from "@ant-design/icons";

const { Meta } = Card;
function Attendees() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = getData(dispatch, null, id);
    fetchData();
  }, []);
  const event = useSelector((state) => state.events[0]);
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
        dataSource={event.Attendees}
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

export default Attendees;
