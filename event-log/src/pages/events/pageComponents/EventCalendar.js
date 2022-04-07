import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "antd/dist/antd.css";
import { Calendar } from "antd";
import moment from "moment";
import { getData } from "../../../api/eventsApi";
import { loadEvents } from "../../../redux/actions/eventActions";
import { loadHosts } from "../../../redux/actions/hostActions";
import { useAuth } from "../../../utils/customHooks";

function EventCalendar() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(moment());
  const { isAuthenticated } = useAuth();

  const onSelect = async (val) => {
    if (!isAuthenticated) return;
    const date = val.format().slice(0, 10);
    const [events, hosts] = await getData(date);
    dispatch(loadEvents(events));
    dispatch(loadHosts(hosts));
  };
  const onPanelChange = (val) => {
    setDate(val);
  };

  return (
    <div className="my-calendar">
      <Calendar
        fullscreen={false}
        value={date}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        className="event-calendar"
      />
    </div>
  );
}

export default EventCalendar;
