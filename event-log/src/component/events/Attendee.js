import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MyAttendees from "../layout/MyAttendees/MyAttendees";
import { getData } from "../../api/eventsApi";

function Attendee() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = getData(dispatch, null, id);
    fetchData();
  }, []);
  const event = useSelector((state) => state.events[0]);
  return (
    <div className="attendees">{event && <MyAttendees event={event} />}</div>
  );
}

export default Attendee;
