import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MyAttendees from "../layout/MyAttendees/MyAttendees";

function Attendee() {
  const { id } = useParams();
  const event = useSelector((state) => state.events).filter(
    (e) => e.eventId === id
  )[0];
  return (
    <div className="attendees">{event && <MyAttendees event={event} />}</div>
  );
}

export default Attendee;
