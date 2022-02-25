import React, { useState, useEffect } from "react";
import EventCalendar from "../utils/EventCalendar";
import EventList from "../utils/EventList";

const API_URL = "https://601caf791a9c220017060c02.mockapi.io/api/v1/Events";

function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setEvents(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getEvents();
  }, []);

  return (
    <div className="events-content">
      <EventList events={events} />
      <EventCalendar className="calendar" />
    </div>
  );
}

export default Events;
