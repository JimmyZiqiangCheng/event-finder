import React from "react";
import "antd/dist/antd.min.css";
import { List } from "antd";
import { useSelector } from "react-redux";
import EventItem from "../../../components/eventItem/EventItem";

function EventList(props) {
  const events = useSelector((state) => state.events);
  const hosts = useSelector((state) => state.hosts);
  const defaultAvatar = "https://joeschmoe.io/api/v1/random";

  return (
    <>
      {events.length === 0 ? (
        <p> no events </p>
      ) : (
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 3,
          }}
          dataSource={events}
          renderItem={(item) => (
            <EventItem
              item={item}
              hosts={hosts}
              defaultAvatar={defaultAvatar}
            />
          )}
        />
      )}
    </>
  );
}

export default EventList;
