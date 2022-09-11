import { hostActionTypes } from "../actionTypes/hostActionTypes";

export const loadHosts = (payload) => {
  return {
    type: hostActionTypes.LOAD_HOSTS,
    payload: { hosts: payload },
  };
};
