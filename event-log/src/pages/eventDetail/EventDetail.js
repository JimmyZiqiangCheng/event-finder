import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../api/eventsApi";
import TitleCard from "./pageComponents/TitleCard";
import SideCard from "./pageComponents/SideCard";
import DetailCard from "./pageComponents/DetailCard";
import ChatCard from "./pageComponents/ChatCard";
import { postEventData } from "../../api/eventsApi";
import styles from "./event.module.scss";

function EventDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = getData(dispatch, null, id);
    fetchData();
  }, []);
  const event = useSelector((state) => state.events[0]);
  const host = useSelector((state) => state.hosts).filter(
    (h) => h.eventId === event.eventId
  )[0];
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (e) => {
    const postComment = postEventData();
    postComment(event.eventId, event, e.comment);
  };
  return (
    <div>
      {event && host && (
        <div className="event-detail">
          <div className={styles.my_event_detail}>
            <TitleCard event={event} host={host} />
            <SideCard host={host} />
            <DetailCard event={event} />
            <ChatCard
              event={event}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EventDetail;
