import React from "react";
import EventForm from "./pageComponents/EventForm";
import { message } from "antd";
import { addHost, getData, postData } from "../../api/eventsApi";
import { useAuth } from "../../utils/customHooks";
import { useDispatch, useSelector } from "react-redux";
import { loadEvents } from "../../redux/actions/eventsActions";

const CATEGORIES = ["culture", "travel", "music", "food", "film"];
const CITIES = ["Toronto, Canada", "Niagara Falls, Canada", "Scarborough, UK"];
const VENUES = [
  "1 Front St E, Toronto, ON, Canada",
  "482 Bloor St W, Toronto, ON, Canada",
];

function CreateEvent() {
  const { currentUser } = useAuth();
  const { name, email, photoURL } = currentUser;
  const onSubmit = async (data) => {
    try {
      await postData(data);
      const result = await getData();
      const updatedEventList = result[0];
      const newEvent = await updatedEventList[updatedEventList.length - 1];
      const host = await {
        name: name,
        photoURL: photoURL,
        eventId: newEvent.eventId,
        email: email,
      };
      await addHost(host);
      message.success("Event Created", 1);
    } catch (err) {
      message.error(err, 1);
    }
  };
  return (
    <div className="create-event">
      <h1> Create New Event</h1>
      <EventForm
        onSubmit={onSubmit}
        categories={CATEGORIES}
        cities={CITIES}
        venues={VENUES}
      />
    </div>
  );
}

export default CreateEvent;
