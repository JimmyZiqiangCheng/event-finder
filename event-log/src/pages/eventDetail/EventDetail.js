import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../api/eventsApi";
import TitleCard from "./pageComponents/TitleCard";
import SideCard from "./pageComponents/SideCard";
import DetailCard from "./pageComponents/DetailCard";
import ChatCard from "./pageComponents/ChatCard";
import { postComment } from "../../api/eventsApi";
import styles from "./event.module.scss";
import { loadEvents } from "../../redux/actions/eventsActions";
import { loadCurrentEvent } from "../../redux/actions/currentEventActions";
import { loadHosts } from "../../redux/actions/hostActions";
import { message } from "antd";

function EventDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const events = useSelector((state) => state.events);
  const selectedEvent = events.filter((event) => event.eventId === id)[0];
  useEffect(() => {
    const dispatchCurrentEvent = () => {
      dispatch(loadCurrentEvent(selectedEvent));
    };
    dispatchCurrentEvent();
  }, []);
  const host = useSelector((state) => state.hosts).filter(
    (h) => h.eventId === selectedEvent.eventId
  )[0];
  const onFinishFailed = (errorInfo) => {
    message.error(`Failed: ${errorInfo}`);
  };
  const onFinish = async (action) => {
    await postComment(selectedEvent.eventId, selectedEvent, action.comment);
    const [events, hosts] = await getData(null, id);
    dispatch(loadEvents(events));
    dispatch(loadHosts(hosts));
    dispatch(
      loadCurrentEvent(events.filter((event) => event.eventId === id)[0])
    );
  };
  const event = useSelector((state) => state.currentEvent);
  return (
    <div className="event-detail-page">
      <div className="event-detail">
        {event ? (
          <div className={styles.my_event_detail}>
            <TitleCard host={host} dispatch={dispatch} id={id} />
            <SideCard host={host} />
            <DetailCard />
            <ChatCard
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              dispatch={dispatch}
              id={id}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default EventDetail;
