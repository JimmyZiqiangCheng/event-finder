import React, { useState, useEffect } from "react";
import EventCalendar from "../utils/EventCalendar";
import EventList from "../utils/EventList";
import { loadEvents } from "../../redux/actions/eventActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const API_URL = "https://601caf791a9c220017060c02.mockapi.io/api/v1/Events";
function Events() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        dispatch(loadEvents(data));
      } catch (err) {
        console.error(err.message);
      }
    };
    getEvents();
  }, [dispatch]);

  return (
    <div className="events-content">
      <EventList />
      <EventCalendar className="calendar" />
    </div>
  );
}

export default Events;
