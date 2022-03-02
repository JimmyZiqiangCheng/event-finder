import React, { useState, useEffect } from "react";
import EventCalendar from "../utils/EventCalendar";
import EventList from "../utils/EventList";
import { loadEvents } from "../../redux/actions/eventActions";
import { loadHosts } from "../../redux/actions/hostActions";
import { useDispatch, useSelector } from "react-redux";

const EVENTS_API = "https://601caf791a9c220017060c02.mockapi.io/api/v1/Events";
const HOSTS_API = "https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts";
function Events() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const responseEvent = await fetch(EVENTS_API);
        const responseHost = await fetch(HOSTS_API);
        const dataEvent = await responseEvent.json();
        const dataHost = await responseHost.json();
        dispatch(loadEvents(dataEvent));
        dispatch(loadHosts(dataHost));
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    };
    getData();
  }, [dispatch]);

  return (
    <div className="events-content">
      <EventList loading={loading} />
      <EventCalendar className="calendar" />
    </div>
  );
}

export default Events;
