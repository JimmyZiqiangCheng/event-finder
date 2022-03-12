import { loadEvents } from "../redux/actions/eventActions";
import { loadHosts } from "../redux/actions/hostActions";
const EVENTS_API = "https://601caf791a9c220017060c02.mockapi.io/api/v1/Events";
const HOSTS_API = "https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts";

export const getData = (dispatch, date, eventId) => {
  const fetchData = async () => {
    try {
      const addon = date
        ? eventId
          ? `?date=${date}&eventId=${eventId}`
          : `?date=${date}`
        : eventId
        ? `?eventId=${eventId}`
        : "";
      const responseEvent = await fetch(`${EVENTS_API}${addon}`);
      const dataEvent = await responseEvent.json();
      dispatch(loadEvents(dataEvent));

      const responseHost = await fetch(HOSTS_API);
      const dataHost = await responseHost.json();
      dispatch(loadHosts(dataHost));
    } catch (err) {
      console.error(err.message);
    }
  };
  return fetchData;
};

export const postData = () => {
  const postEvent = async (formData) => {
    const input = { ...formData, date: formData.date.format().slice(0, -6) };
    try {
      const response = await fetch(EVENTS_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();
    } catch (err) {
      console.error(err.message);
    }
  };
  return postEvent;
};
