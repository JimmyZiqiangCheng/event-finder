import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MyEventCard from "../layout/MyEventCard/MyEventCard";
function Event() {
  const { id } = useParams();
  const event = useSelector((state) => state.events).filter(
    (e) => e.eventId === id
  )[0];
  console.log(event);
  const host = useSelector((state) => state.hosts).filter(
    (h) => h.eventId === event.eventId
  )[0];
  console.log(host);

  return (
    <div className="event-detail">
      <MyEventCard event={event} host={host} />
    </div>
  );
}

export default Event;
