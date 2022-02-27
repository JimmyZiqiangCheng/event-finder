import React from "react";
import EventForm from "../utils/EventForm";

const API_URL = "https://601caf791a9c220017060c02.mockapi.io/api/v1/Events";
const CATEGORIES = ["culture", "travel", "music", "food", "film"];
function CreateEvent() {
  const submitForm = async (formData) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
      <EventForm onSubmit={submitForm} categories={CATEGORIES} />
    </div>
  );
}

export default CreateEvent;
