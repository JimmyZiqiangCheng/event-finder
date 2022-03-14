import React, { useEffect } from "react";
import MyEventCard from "../layout/MyEventCard/MyEventCard";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../api/eventsApi";

function Event() {
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
  return (
    <div className="event-detail">
      {event && host && <MyEventCard event={event} host={host} />}
    </div>
  );
}

export default Event;
