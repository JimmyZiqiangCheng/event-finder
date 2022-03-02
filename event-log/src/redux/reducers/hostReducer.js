import { hostActionTypes } from "../actionTypes/hostActionTypes";

export const hostReducer = (state = [], { type, payload }) => {
  switch (type) {
    case hostActionTypes.LOAD_HOSTS:
      return payload.hosts;
    default:
      return state;
  }
};
