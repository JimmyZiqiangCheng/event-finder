import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../api/eventsApi";
import EventCalendar from "./pageComponents/EventCalendar";
import EventList from "./pageComponents/EventList";
import { loadEvents } from "../../redux/actions/eventActions";
import { loadHosts } from "../../redux/actions/hostActions";
import FormModal from "../../uiComponents/modals/FormModal";
import LoginModalForm from "../../uiComponents/forms/LoginModalForm";
import { useAuth, useTheme } from "../../utils/customHooks";

function Events() {
  const { isAuthenticated } = useAuth();
  const { setShowLoginModal } = useTheme();
  const openLogin = () => setShowLoginModal(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const loadData = async () => {
      const [events, hosts] = await getData();
      dispatch(loadEvents(events));
      dispatch(loadHosts(hosts));
    };
    loadData();
  }, []);
  return (
    <div className="events-content" onClick={!isAuthenticated && openLogin}>
      <EventList />
      <EventCalendar className="calendar" />
    </div>
  );
}

export default Events;
