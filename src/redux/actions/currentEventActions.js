import { currentEventActionTypes } from "../actionTypes/currentEventActionTypes";

export const loadCurrentEvent = (payload) => {
  return {
    type: currentEventActionTypes.LOAD_EVENT,
    payload: { currentEvent: payload },
  };
};
