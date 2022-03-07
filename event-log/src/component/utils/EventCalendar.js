import React, { useState, useContext } from "react";
import "antd/dist/antd.css";
import { Calendar } from "antd";
import moment from "moment";
import EventContext from "../events/eventContext";

function EventCalendar() {
  const { setSelected, setFilter } = useContext(EventContext);
  const [date, setDate] = useState(moment());
  const onSelect = (val) => {
    setSelected(moment(val).format().slice(0, 10));
    setFilter(true);
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
