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
    const events = await responseEvent.data;
    const responseHost = await axios.get(HOSTS_API);
    const hosts = await responseHost.data;
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
    await axios.post(EVENTS_API, payload);
  } catch (err) {
    console.error(err.message);
  }
};

export const addHost = async (hostData) => {
  const payload = hostData;
  try {
    await axios.post(HOSTS_API, payload);
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
    await axios.post(url, attendee);
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteAttendee = async (eventId, userId) => {
  const url = `${EVENTS_API}/${eventId}/Attendees/${userId}`;
  try {
    await axios.delete(url);
  } catch (err) {
    console.error(err.message);
  }
};

export const postComment = async (
  id,
  event,
  comment,
  name = "Jimmy",
  photoURL = null
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
    await axios.post(url, newComment);
  } catch (err) {
    console.error(err.message);
  }
};
