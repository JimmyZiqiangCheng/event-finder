import React from "react";
import EventForm from "../utils/EventForm";
import { postData } from "../../api/eventsApi";

const CATEGORIES = ["culture", "travel", "music", "food", "film"];
const CITIES = ["Toronto, Canada", "Niagara Falls, Canada", "Scarborough, UK"];
const VENUES = [
  "1 Front St E, Toronto, ON, Canada",
  "482 Bloor St W, Toronto, ON, Canada",
];

function CreateEvent() {
  const submitForm = postData();
  return (
    <div className="create-event">
      <h1> Create New Event</h1>
      <EventForm
        onSubmit={submitForm}
        categories={CATEGORIES}
        cities={CITIES}
        venues={VENUES}
      />
    </div>
  );
}

export default CreateEvent;
