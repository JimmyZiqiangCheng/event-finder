import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../api/eventsApi";
import EventCalendar from "./pageComponents/EventCalendar";
import EventList from "./pageComponents/EventList";
import { loadEvents } from "../../redux/actions/eventActions";
import { loadHosts } from "../../redux/actions/hostActions";

function Events() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadData = async () => {
      const [events, hosts] = await getData();
      dispatch(loadEvents(events));
      dispatch(loadHosts(hosts));
    };
    loadData();
  }, []);
  return (
    <div className="events-content">
      <EventList />
      <EventCalendar className="calendar" />
    </div>
  );
}

export default Events;
