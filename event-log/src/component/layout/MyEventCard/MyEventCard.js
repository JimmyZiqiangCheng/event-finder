import React, { useContext } from "react";
import styles from "./event.module.scss";
import { Form, Button, Avatar, Input, Badge } from "antd";
import {
  InfoCircleOutlined,
  CalendarOutlined,
  CompassOutlined,
  UserOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { Link } from "react-router-dom";
import RateModal from "../../utils/RateModal/RateModal";
import JoinModal from "../../utils/JoinModal/JoinModal";
import ThemeContext from "../theme";
import { postEventData } from "../../../api/eventsApi";

function MyEventCard(props) {
  const { setShowRating, setShowJoin } = useContext(ThemeContext);
  const { event, host } = props;

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
    const [years, months, days] = [
      Number(moment().format().slice(0, 4)) -
        Number(comment.createAt.slice(0, 4)),
      Number(moment().format().slice(5, 7)) -
        Number(comment.createAt.slice(5, 7)),
      Number(moment().format().slice(8, 10)) -
        Number(comment.createAt.slice(8, 10)),
    ];
    const unit =
      years > 1
        ? "years"
        : years === 1
        ? "year"
        : months > 1
        ? "months"
        : months === 1
        ? "month"
        : "days";
    const finalTime = years > 0 ? years : months > 0 ? months : days;
    return (
      <li className="comment-li" key={comment.id}>
        <Avatar className="comment-avatar" src={comment.photoURL}></Avatar>
        <div className="comment-detail">
          <div className="comment-meta">
            <p className="comment-name">{comment.name}</p>
            <p className="comment-time">{`${finalTime} ${unit} ago`}</p>
          </div>
          <p className="comment-content">{comment.comment}</p>
        </div>
      </li>
    );
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const submitComment = (e) => {
    const postComment = postEventData();
    postComment(event.eventId, event, e.comment);
  };

  return (
    <div className={styles.my_event_card}>
      <section className="card-section card-title">
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
            onClick={() => setShowJoin(true)}
          >
            join this event
          </Button>
          <JoinModal />
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
        <Badge.Ribbon text="host">
          <div className="host-info">
            <img src={host.photoUrl} alt="avatar" />
            <p className="host-name">{host.name}</p>
          </div>
        </Badge.Ribbon>
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
                className="card-button load-button"
                type="primary"
                size={"middle"}
              >
                load more...
              </Button>
            </Link>
          )}
          <li key="your-comment" className="your-comment">
            <div>
              <Avatar
                className="comment-avatar"
                size={32}
                icon={<UserOutlined />}
              ></Avatar>
            </div>
            <Form onFinish={submitComment} onFinishFailed={onFinishFailed}>
              <Form.Item
                name="comment"
                rules={[
                  {
                    required: true,
                    message: "type something",
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item>
                <Button
                  className="submit-comment-button"
                  type="primary"
                  htmlType="submit"
                >
                  Submit Comment
                </Button>
              </Form.Item>
            </Form>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default MyEventCard;
