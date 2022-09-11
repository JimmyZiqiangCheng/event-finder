import { displayAvatar } from "../helperFunctions";
import React from "react";

const TestComponent = (props) => {
  const { url } = props;
  return <div>{displayAvatar(url)}</div>;
};

export default TestComponent;
