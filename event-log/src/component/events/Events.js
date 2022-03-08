import React, { useEffect } from "react";
import EventCalendar from "../utils/EventCalendar";
import EventList from "../utils/EventList";

function Events() {
  return (
    <div className="events-content">
      <EventList />
      <EventCalendar className="calendar" />
    </div>
  );
}

export default Events;
