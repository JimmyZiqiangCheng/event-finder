import React from "react";
import { Button, Avatar, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
import { Link } from "react-router-dom";

function ChatCard({ event, onFinish, onFinishFailed }) {
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

  return (
    <div className="card-section card-chat">
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
          <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
    </div>
  );
}

export default ChatCard;
