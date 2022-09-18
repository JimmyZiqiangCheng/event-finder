import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "antd/dist/antd.min.css";
import { Calendar } from "antd";
import moment from "moment";
import { getData } from "../../../services/eventsApi";
import { loadEvents } from "../../../redux/actions/eventsActions";
import { loadHosts } from "../../../redux/actions/hostActions";
import { useAuth } from "../../../utils/customHooks";

function EventCalendar() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(moment());
  const { isAuthenticated } = useAuth();

  const onSelect = async (val) => {
    if (!isAuthenticated) return;
    setDate(val);
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
