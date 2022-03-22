import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "antd/dist/antd.css";
import { Calendar } from "antd";
import moment from "moment";
import { getData } from "../../api/eventsApi";

function EventCalendar() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(moment());
  const onSelect = (val) => {
    const date = val.format().slice(0, 10);
    const fetchData = getData(dispatch, date);
    fetchData();
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
