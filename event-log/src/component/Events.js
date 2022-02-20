import React from "react";
import EventCalendar from "./gadgets/EventCalendar";
import EventList from "./gadgets/EventList";
import "./view.css";

function Events() {
  return (
    <div className="events-content">
      <EventList />
      <EventCalendar className="calendar" />
    </div>
  );
}

export default Events;
