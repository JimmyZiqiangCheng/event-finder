import React from "react";
import MyEventCard from "../layout/MyEventCard/MyEventCard";
import { useSelector } from "react-redux";
function Event() {
  return (
    <div className="event-detail">
      <MyEventCard />
    </div>
  );
}

export default Event;
