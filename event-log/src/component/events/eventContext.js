import React from "react";
const eventContext = {
  selected: null,
  filter: false,
};

const EventContext = React.createContext(eventContext);
export default EventContext;
