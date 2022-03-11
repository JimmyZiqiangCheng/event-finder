import React from "react";
import MyEventCard from "../layout/MyEventCard/MyEventCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Event() {
  const { id } = useParams();
  const event = useSelector((state) => state.events).filter(
    (e) => e.eventId === id
  )[0];
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
