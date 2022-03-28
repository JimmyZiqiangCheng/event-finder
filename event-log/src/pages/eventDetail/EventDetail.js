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
import { loadEvents } from "../../redux/actions/eventActions";
import { loadHosts } from "../../redux/actions/hostActions";

function EventDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const loadData = async () => {
      const [events, hosts] = await getData(null, id);
      dispatch(loadEvents(events));
      dispatch(loadHosts(hosts));
    };
    loadData();
  }, []);
  const event = useSelector((state) => state.events[0]);
  const host = useSelector((state) => state.hosts).filter(
    (h) => h.eventId === event.eventId
  )[0];
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="event-detail-page">
      {event && host && (
        <div className="event-detail">
          <div className={styles.my_event_detail}>
            <TitleCard event={event} host={host} />
            <SideCard host={host} />
            <DetailCard event={event} />
            <ChatCard
              event={event}
              onFinish={(action) =>
                postComment(event.eventId, event, action.comment)
              }
              onFinishFailed={onFinishFailed}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EventDetail;
