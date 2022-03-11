import React, { useContext } from "react";
import styles from "./event.module.scss";
import { Button, Avatar } from "antd";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  InfoCircleOutlined,
  CalendarOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { Link } from "react-router-dom";
import RateModal from "../../utils/RateModal/RateModal";
import ThemeContext from "../theme";

function MyEventCard() {
  const { setShowRating } = useContext(ThemeContext);
  const { id } = useParams();
  const event = useSelector((state) => state.events).filter(
    (e) => e.eventId === id
  )[0];
  const host = useSelector((state) => state.hosts).filter(
    (h) => h.eventId === event.eventId
  )[0];

  const createAvatars = (attendees) => {
    if (attendees.length < 6) {
      return attendees.map((attendee) => (
        <Avatar key={attendee.id} src={attendee.photoURL} />
      ));
    }
    return attendees
      .slice(0, 5)
      .map((attendee) => <Avatar key={attendee.id} src={attendee.photoURL} />);
  };
  const createComments = (comment) => {
    const timeFrame =
      Number(moment().format().slice(0, 4)) -
      Number(comment.createAt.slice(0, 4));
    const year = timeFrame === 1 ? "year" : "years";
    return (
      <li className="comment-li" key={comment.id}>
        <Avatar className="comment-avatar" src={comment.photoURL}></Avatar>
        <div className="comment-detail">
          <div className="comment-meta">
            <p className="comment-name">{comment.name}</p>
            <p className="comment-time">{`${timeFrame} ${year} ago`}</p>
          </div>
          <p className="comment-content">{comment.comment}</p>
        </div>
      </li>
    );
  };
  return (
    <>
      {" "}
      {event && host ? (
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
              <Button
                className="card-button"
                type="primary"
                size={"middle"}
                onClick={() => setShowRating(true)}
              >
                rate this event
              </Button>
              <RateModal />
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
            <div className="event-card-detail event-location">
              <div className="event-icon">
                <CompassOutlined style={{ fontSize: "20px" }} />
              </div>
              <div className="location-detail">{event.venue}</div>
            </div>
            <div className="event-card-detail event-participant">
              <div className="participant-title">Who's coming?</div>
              <div className="participant-avatar">
                {createAvatars(event.attendees)}
                {event.attendees.length > 5 && (
                  <Link
                    to={`/events/${event.eventId}/attendee`}
                    className="see-more"
                  >
                    See more
                  </Link>
                )}
              </div>
            </div>
          </section>
          <section className="card-section card-chat">
            <div className="chat-detail chat-title">Chat about this event</div>
            <div className="chat-detail chat-number">
              {event.comments.length} replies
            </div>
            <ul className="chat-detail chat-comments">
              {event.comments.length < 10
                ? event.comments.map((c) => createComments(c))
                : event.comments.slice(0, 9).map((c) => createComments(c))}
              {event.comments.length >= 10 && (
                <Link
                  className="load-more-button"
                  to={`/events/${event.eventId}/comments`}
                >
                  <Button
                    className="card-button"
                    type="primary"
                    size={"middle"}
                  >
                    load more...
                  </Button>
                </Link>
              )}
            </ul>
          </section>
        </div>
      ) : (
        <p>loading ...</p>
      )}
    </>
  );
}

export default MyEventCard;
