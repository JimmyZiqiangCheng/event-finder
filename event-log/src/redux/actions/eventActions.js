import { eventActionTypes } from "../actionTypes/eventActionTypes";

export const loadEvents = (payload) => {
  return {
    type: eventActionTypes.LOAD_EVENTS,
    payload: { events: payload },
  };
};
