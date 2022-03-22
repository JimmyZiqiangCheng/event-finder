import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../api/eventsApi";
import EventCalendar from "../../components/listPage/EventCalendar";
import EventList from "../../components/listPage/EventList";

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
