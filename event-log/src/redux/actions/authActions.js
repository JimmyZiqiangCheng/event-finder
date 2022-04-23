import { authActionTypes } from "../actionTypes/authActionTypes";

export const loginUser = (payload) => {
  return {
    type: authActionTypes.LOGIN_USER,
    payload: payload,
  };
};

export const logoutUser = () => {
  return {
    type: authActionTypes.LOGOUT_USER,
    payload: {},
  };
};
