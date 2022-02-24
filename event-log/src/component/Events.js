import React from "react";
import EventCalendar from "./utils/EventCalendar";
import EventList from "./utils/EventList";
import "./layout/layout.css";

function Events() {
  return (
    <div className="events-content">
      <EventList />
      <EventCalendar className="calendar" />
    </div>
  );
}

export default Events;
