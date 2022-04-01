import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import "antd/dist/antd.css";
import { Calendar } from "antd";
import moment from "moment";
import { getData } from "../../../api/eventsApi";
import { loadEvents } from "../../../redux/actions/eventActions";
import { loadHosts } from "../../../redux/actions/hostActions";
import { AuthContext } from "../../../context/authContext";
import { useToggle } from "../../../utils/customHooks";
import LoginModal from "../../../uiComponents/modals/LoginModal";

function EventCalendar() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(moment());
  const { isAuthenticated } = useContext(AuthContext);
  const [showLogin, toggleLogin] = useToggle();

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
    <div className="my-calendar">
      <Calendar
        fullscreen={false}
        value={date}
        onSelect={isAuthenticated ? onSelect : toggleLogin}
        onPanelChange={onPanelChange}
        className="event-calendar"
      />
      <LoginModal showLogin={showLogin} toggleLogin={toggleLogin} />
    </div>
  );
}

export default EventCalendar;
