import { loadEvents } from "../redux/actions/eventActions";
import { loadHosts } from "../redux/actions/hostActions";

export const getData = (dispatch) => {
  const EVENTS_API =
    "https://601caf791a9c220017060c02.mockapi.io/api/v1/Events";
  const HOSTS_API = "https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts";
  const fetchData = async () => {
    try {
      const responseEvent = await fetch(EVENTS_API);
      const responseHost = await fetch(HOSTS_API);
      const dataEvent = await responseEvent.json();
      const dataHost = await responseHost.json();
      dispatch(loadEvents(dataEvent));
      dispatch(loadHosts(dataHost));
    } catch (err) {
      console.error(err.message);
    }
  };
  return fetchData;
};
