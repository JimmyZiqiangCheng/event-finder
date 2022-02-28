import React from "react";
import { useParams } from "react-router-dom";
function Event() {
  const { eventId } = useParams();
  return <h1> event ID: {eventId} </h1>;
}

export default Event;
