import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "antd/dist/antd.css";
import { Calendar } from "antd";
import moment from "moment";
import { getData } from "../../../api/eventsApi";
import { loadEvents } from "../../../redux/actions/eventActions";
import { loadHosts } from "../../../redux/actions/hostActions";

function EventCalendar() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(moment());
  const onSelect = async (val) => {
    const date = val.format().slice(0, 10);
    const [events, hosts] = await getData(date);
    dispatch(loadEvents(events));
    dispatch(loadHosts(hosts));
  };
  const onPanelChange = (val) => {
    setDate(val);
  };

  return (
    <Calendar
      fullscreen={false}
      value={date}
      onSelect={onSelect}
      onPanelChange={onPanelChange}
      className="event-calendar"
    />
  );
}

export default EventCalendar;
