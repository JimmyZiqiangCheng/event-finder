import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MyComments from "../layout/MyComments/MyComments";
import { getData } from "../../api/eventsApi";
import { useDispatch, useSelector } from "react-redux";

function Comments() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = getData(dispatch, null, id);
    fetchData();
  }, []);
  const event = useSelector((state) => state.events[0]);
  return (
    <div className="comments">{event && <MyComments event={event} />}</div>
  );
}

export default Comments;
