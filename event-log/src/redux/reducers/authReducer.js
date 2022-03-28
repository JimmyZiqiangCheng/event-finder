import { authActionTypes } from "../actionTypes/authActionTypes";

export const authReducer = (state = null, { type, payload }) => {
  switch (type) {
    case authActionTypes.LOGIN_USER:
      return payload.user;
    case authActionTypes.LOGOUT_USER:
      return null;
    default:
      return state;
  }
};
