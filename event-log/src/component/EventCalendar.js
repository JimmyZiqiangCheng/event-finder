import React, { useState } from "react";
import "antd/dist/antd.css";
import { Calendar, Alert } from "antd";
import moment from "moment";

function EventCalendar() {
  const [date, setDate] = useState(moment());
  const [selected, setSelected] = useState(moment());
  const onSelect = (val) => {
    setSelected(val);
  };
  const onPanelChange = (val) => {
    setDate(val);
  };

  return (
    <Calendar value={date} onSelect={onSelect} onPanelChange={onPanelChange} />
  );
}

export default EventCalendar;
