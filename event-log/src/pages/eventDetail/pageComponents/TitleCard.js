import React from "react";
import { Button } from "antd";
import ConfirmModal from "../../../uiComponents/modals/ConfirmModal";
import RateModal from "../../../uiComponents/modals/RateModal";
import { useToggle } from "../../../utils/customHooks";
function TitleCard({ event, host }) {
  const [showJoin, toggleJoin] = useToggle();
  const [showRating, toggleRating] = useToggle();
  return (
    <div className="card-section card-title">
      <div className="info-group">
        <h1>{event.title}</h1>
        <p>{event.date}</p>
        <p>{`hosted by ${host.name}`}</p>
      </div>
      <div className="button-group">
        <Button
          className="card-button"
          type="primary"
          size={"middle"}
          onClick={toggleJoin}
        >
          join this event
        </Button>
        <ConfirmModal showModal={showJoin} setShowModal={toggleJoin} />
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
