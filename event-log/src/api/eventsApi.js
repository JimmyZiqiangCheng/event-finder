import { loadEvents } from "../redux/actions/eventActions";
import { loadHosts } from "../redux/actions/hostActions";
import moment from "moment";
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
  const postEvent = async (inputData) => {
    const payload = {
      ...inputData,
      date: inputData.date.format().slice(0, -6),
    };
    try {
      const response = await fetch(EVENTS_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  return postEvent;
};

export const postEventData = () => {
  const postComment = async (
    id,
    event,
    comment,
    name = "Jimmy",
    photoURL = "https://randomuser.me/api/portraits/men/33.jpg"
  ) => {
    const newComment = {
      EventId: `${id}`,
      comment: comment,
      name: name,
      photoURL: photoURL,
      createAt: `${moment().format().slice(0, 19)}`,
      id: `${event.comments.length}`,
    };
    const url = `${EVENTS_API}/${id}/comments`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  return postComment;
};
