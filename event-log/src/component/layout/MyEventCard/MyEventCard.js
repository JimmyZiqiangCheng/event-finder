import React from "react";
import styles from "./event.module.scss";
import { Button, Avatar } from "antd";
import {
  InfoCircleOutlined,
  CalendarOutlined,
  CompassOutlined,
} from "@ant-design/icons";

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
        <div className="event-card-detail event-description">
          <div className="event-icon"><InfoCircleOutlined style={{ fontSize: '20px' }}/></div>
          <div className="description-detail">{event.description}</div>
        </div>
        <div className="event-card-detail event-time">
          <div className="event-icon"><CalendarOutlined style={{ fontSize: '20px' }}/></div>
          <div className="date-detail">{event.date}</div>
        </div>
        <div className="event-card-detail event-location">
          <div className="event-icon"><CompassOutlined style={{ fontSize: '20px' }}/></div>
          <div className="location-detail">{event.venue}</div>
        </div>
        <div className="event-card-detail event-participant"> 
          <div className="participant-title">Who's coming?</div>
          <div className="participant-avatar">
            {event.attendees.map((attendee)=><Avatar src={attendee.photoURL}/>)}
          </div>
        </div>
      </section>
      <section className="card-section card-chat"> chat</section>
    </div>
  );
}

export default MyEventCard;
