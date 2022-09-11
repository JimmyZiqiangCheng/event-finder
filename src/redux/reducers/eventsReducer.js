import { eventsActionTypes } from "../actionTypes/eventsActionTypes";

export const eventsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case eventsActionTypes.LOAD_EVENTS:
      return payload.events;
    default:
      return state;
  }
};
