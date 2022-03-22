import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../api/eventsApi";
import TitleCard from "../../components/detailPage/TitleCard";
import SideCard from "../../components/detailPage/SideCard";
import DetailCard from "../../components/detailPage/DetailCard";
import ChatCard from "../../components/detailPage/ChatCard";
import ThemeContext from "../../context/themeContext";
import { postEventData } from "../../api/eventsApi";
import styles from "./event.module.scss";

function EventDetail() {
  const { setShowRating, setShowJoin } = useContext(ThemeContext);
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
    <div className="event-detail">
      <div className={styles.my_event_detail}>
        <TitleCard
          event={event}
          host={host}
          showModal1={setShowJoin}
          showModal2={setShowRating}
        />
        <SideCard host={host} />
        <DetailCard event={event} />
        <ChatCard
          event={event}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        />
      </div>
    </div>
  );
}

export default EventDetail;
