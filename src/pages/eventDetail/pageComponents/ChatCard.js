import React from "react";
import { Button, Avatar, Form, Input } from "antd";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
import { Link } from "react-router-dom";
import { displayAvatar, getTimeDiff } from "../../../utils/helperFunctions";

function ChatCard({ onFinish, onFinishFailed }) {
  const event = useSelector((state) => state.currentEvent);
  const createComments = (comment) => {
    const now = moment(moment().format().slice(0, 10));
    const created = moment(comment.createAt.slice(0, 10));
    const timeDiff = getTimeDiff(now, created);
    return (
      <li className="comment-li" key={comment.id}>
        {displayAvatar(comment.photoURL)}
        <div className="comment-detail">
          <div className="comment-meta">
            <p className="comment-name">{comment.name}</p>
            <p className="comment-time">{timeDiff}</p>
          </div>
          <div className="comment-content">{comment.comment}</div>
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
