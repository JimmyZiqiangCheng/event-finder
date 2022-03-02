import React, { useState } from "react";
import "antd/dist/antd.css";
import { Calendar } from "antd";
import moment from "moment";

function EventCalendar() {
  const [date, setDate] = useState(moment());
  const [selected, setSelected] = useState(moment().format().slice(0, -6));
  const onSelect = (val) => {
    setSelected(moment(val).format().slice(0, -6));
    console.log(`selected date: ${selected}`);
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
