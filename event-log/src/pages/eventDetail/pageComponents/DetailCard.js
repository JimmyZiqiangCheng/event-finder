import React from "react";
import { Avatar } from "antd";
import {
  InfoCircleOutlined,
  CalendarOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import SimpleMap from "../../../uiComponents/map/SimpleMap";
import { displayAvatar } from "../../../utils/helperFunctions";

function DetailCard({ event }) {
  const createAvatars = (attendees) => {
    if (attendees.length < 6) {
      return attendees.map((attendee, index) =>
        displayAvatar(attendee.photoURL, index)
      );
    }
    return attendees
      .slice(0, 5)
      .map((attendee, index) => displayAvatar(attendee.photoURL, index));
  };
  return (
    <div className="card-section card-detail">
      <div className="event-card-detail event-description">
        <div className="event-icon">
          <InfoCircleOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className="description-detail">{event.description}</div>
      </div>
      <div className="event-card-detail event-time">
        <div className="event-icon">
          <CalendarOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className="date-detail">{event.date}</div>
      </div>
      <div className="event-location-detail">
        <div className="event-card-detail event-location">
          <div className="event-icon">
            <CompassOutlined style={{ fontSize: "20px" }} />
          </div>
          <div className="location-detail">{event.venue}</div>
        </div>
        <div className="event-map">
          <SimpleMap />
        </div>
      </div>
      <div className="event-card-detail event-participant">
        <div className="participant-title">Who's coming?</div>
        <div className="participant-avatar">
          {createAvatars(event.attendees)}
          {event.attendees.length > 5 && (
            <Link to={`/events/${event.eventId}/attendee`} className="see-more">
              See more
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
