import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MyComments from "../layout/MyComments/MyComments";

function Comments() {
  const { id } = useParams();
  const event = useSelector((state) => state.events).filter(
    (e) => e.eventId === id
  )[0];
  return (
    <div className="comments">{event && <MyComments event={event} />}</div>
  );
}

export default Comments;
