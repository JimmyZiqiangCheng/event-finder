import { eventsActionTypes } from "../actionTypes/eventsActionTypes";

export const loadEvents = (payload) => {
  return {
    type: eventsActionTypes.LOAD_EVENTS,
    payload: { events: payload },
  };
};
