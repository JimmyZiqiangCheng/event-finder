import React from "react";
import styles from "./event.module.scss";
import { Button } from "antd";

function MyEventCard(props) {
  const { event, host } = props;
  return (
    <div className={styles.my_event_card}>
      <section className="card-section card-title">
        <div className="info-group">
          <h1>{event.title}</h1>
          <p>{event.date}</p>
          <p>{`hosted by ${host.name}`}</p>
        </div>
        <div className="button-group">
          <Button className="card-button" type="primary" size={"middle"}>
            join this event
          </Button>
          <Button className="card-button" type="primary" size={"middle"}>
            rate this event
          </Button>
        </div>
      </section>
      <section className="card-section card-host">
        <div className="title"> Event Host</div>
        <div className="host-info">
          <img src={host.photoUrl} alt="avatar" />
          <p className="host-name">{host.name}</p>
        </div>
      </section>
      <section className="card-section card-detail">
        <div className="event-description">{event.description}</div>
        <div className="event-time">{event.date}</div>
        <div className="event-location">{event.venue}</div>
        <div className="event-participant"> who is coming</div>
      </section>
      <section className="card-section card-chat"> chat</section>
    </div>
  );
}

export default MyEventCard;
