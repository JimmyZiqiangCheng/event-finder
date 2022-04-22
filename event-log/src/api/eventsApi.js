import moment from "moment";
import axios from "axios";
const EVENTS_API = "https://601caf791a9c220017060c02.mockapi.io/api/v1/Events";
const HOSTS_API = "https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts";

export const getData = async (date, eventId) => {
  try {
    const addon = date
      ? eventId
        ? `?date=${date}&eventId=${eventId}`
        : `?date=${date}`
      : eventId
      ? `?eventId=${eventId}`
      : "";
    const responseEvent = await axios.get(`${EVENTS_API}${addon}`);
    const events = await responseEvent.json();
    const responseHost = await axios.get(HOSTS_API);
    const hosts = await responseHost.json();
    return [events, hosts];
  } catch (err) {
    console.error(err.message);
  }
};

export const postData = async (inputData) => {
  const payload = {
    ...inputData,
    date: inputData.date.format().slice(0, -6),
  };
  try {
    // await fetch(EVENTS_API, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(payload),
    // });
    await axios.post("EVENTS_API", payload);
  } catch (err) {
    console.error(err.message);
  }
};

export const postRating = async (id, rate) => {
  const rating = {
    EventId: `{id}`,
    rate: rate,
  };
  const url = `${EVENTS_API}/${id}/rates`;
  try {
    // await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(rating),
    // });
    await axios.post(url, rating);
  } catch (err) {
    console.error(err.message);
  }
};

export const postAttendee = async (id, name, photoURL, email) => {
  const attendee = {
    EventId: `{id}`,
    name: name,
    photoURL: photoURL,
    email: email,
  };
  const url = `${EVENTS_API}/${id}/Attendees`;
  try {
    // await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(attendee),
    // });
    await axios.post(url, attendee);
  } catch (err) {
    console.error(err.message);
  }
};

export const postComment = async (
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
    // await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newComment),
    // });
    await axios.post(url, newComment);
  } catch (err) {
    console.error(err.message);
  }
};
