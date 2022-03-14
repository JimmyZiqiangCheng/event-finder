import React, { useEffect } from "react";
import EventCalendar from "../utils/EventCalendar";
import { useDispatch } from "react-redux";
import EventList from "../utils/EventList";
import { getData } from "../../api/eventsApi";

function Events() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = getData(dispatch);
    fetchData();
  }, []);
  return (
    <div className="events-content">
      <EventList />
      <EventCalendar className="calendar" />
    </div>
  );
}

export default Events;
