import { currentEventActionTypes } from "../actionTypes/currentEventActionTypes";
export const currentEventReducer = (state = null, { type, payload }) => {
  switch (type) {
    case currentEventActionTypes.LOAD_EVENT:
      return payload.currentEvent;
    default:
      return state;
  }
};
