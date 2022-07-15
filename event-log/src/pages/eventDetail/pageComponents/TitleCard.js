import React, { useState, useEffect } from "react";
import { Button, message } from "antd";
import ConfirmModal from "../../../uiComponents/modals/ConfirmModal";
import RateModal from "../../../uiComponents/modals/RateModal";
import { useToggle, useAuth } from "../../../utils/customHooks";
import { deleteAttendee, getData, postAttendee } from "../../../api/eventsApi";
import { useSelector } from "react-redux";
import { loadCurrentEvent } from "../../../redux/actions/currentEventActions";
import { loadEvents } from "../../../redux/actions/eventsActions";

function TitleCard({ host, dispatch, id }) {
  const event = useSelector((state) => state.currentEvent);
  const { currentUser } = useAuth();
  const { name, email, photoURL } = currentUser;
  const [showJoin, toggleJoin] = useToggle();
  const [showRating, toggleRating] = useToggle();

  const attendeeIds = event.attendees
    .filter((a) => a.email === email)
    .map((a) => a.id);

  const handleJoin = async () => {
    await postAttendee(event.eventId, name, photoURL, email);
    const result = await getData();
    dispatch(loadEvents(result[0]));
    const newEvent = result[0].filter((event) => event.eventId === id)[0];
    dispatch(loadCurrentEvent(newEvent));
    message.success("Event Joined!", 1);
    toggleJoin(false);
  };
  const handleLeave = async () => {
    await deleteAttendee(event.eventId, attendeeIds[0]);
    const result = await getData();
    dispatch(loadEvents(result[0]));
    const newEvent = result[0].filter((event) => event.eventId === id)[0];
    dispatch(loadCurrentEvent(newEvent));
    message.success("Left Event!", 1);
    toggleJoin(false);
  };

  return (
    <div className="card-section card-title">
      <div className="info-group">
        <h1>{event.title}</h1>
        <p>{event.date}</p>
        <p>{`hosted by ${host.name}`}</p>
      </div>
      <div className="button-group">
        {attendeeIds.length !== 0 ? (
          <Button
            className="card-button"
            type="primary"
            size={"middle"}
            onClick={toggleJoin}
          >
            leave this event
          </Button>
        ) : (
          <Button
            className="card-button"
            type="primary"
            size={"middle"}
            onClick={toggleJoin}
          >
            join this event
          </Button>
        )}
        {attendeeIds.length !== 0 ? (
          <ConfirmModal
            showModal={showJoin}
            setShowModal={toggleJoin}
            handleOk={handleLeave}
            text="leave"
          />
        ) : (
          <ConfirmModal
            showModal={showJoin}
            setShowModal={toggleJoin}
            handleOk={handleJoin}
            text="join"
          />
        )}
        <Button
          className="card-button"
          type="primary"
          size={"middle"}
          onClick={toggleRating}
        >
          rate this event
        </Button>
        <RateModal showModal={showRating} setShowModal={toggleRating} />
      </div>
    </div>
  );
}

export default TitleCard;
