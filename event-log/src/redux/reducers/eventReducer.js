import { eventActionTypes } from "../actionTypes/eventActionTypes";

export const eventReducer = (state = [], { type, payload }) => {
  switch (type) {
    case eventActionTypes.LOAD_EVENTS:
      return payload.events;
    default:
      return state;
  }
};
