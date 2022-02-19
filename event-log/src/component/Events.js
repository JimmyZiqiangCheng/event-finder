import React from "react";
import EventCalendar from "./views/gadgets/EventCalendar";
import EventList from "./views/gadgets/EventList";
import "./views/view.css";

function Events() {
  return (
    <div className="events-content">
      <EventList />
      <EventCalendar className="calendar" />
    </div>
  );
}

export default Events;
