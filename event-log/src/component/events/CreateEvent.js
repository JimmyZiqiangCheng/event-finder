import moment from "moment";
import React from "react";
import EventForm from "../utils/EventForm";

const API_URL = "https://601caf791a9c220017060c02.mockapi.io/api/v1/Events";
const CATEGORIES = ["culture", "travel", "music", "food", "film"];
const CITIES = ["Toronto, Canada", "Niagara Falls, Canada", "Scarborough, UK"];
const VENUES = [
  "1 Front St E, Toronto, ON, Canada",
  "482 Bloor St W, Toronto, ON, Canada",
];
function CreateEvent() {
  const submitForm = async (formData) => {
    const input = {
      ...formData,
      date: moment(formData.date).format().slice(0, -6),
    };
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };
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
