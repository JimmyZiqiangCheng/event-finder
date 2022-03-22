import React from "react";
import { Button } from "antd";
import MySimpleModal from "../modals/MySimpleModal";
function TitleCard({ event, host, showModal1, showModal2 }) {
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
          onClick={() => showModal1(true)}
        >
          join this event
        </Button>
        <MySimpleModal isRateModal={false} />
        <Button
          className="card-button"
          type="primary"
          size={"middle"}
          onClick={() => showModal2(true)}
        >
          rate this event
        </Button>
        <MySimpleModal isRateModal={true} />
      </div>
    </div>
  );
}

export default TitleCard;
