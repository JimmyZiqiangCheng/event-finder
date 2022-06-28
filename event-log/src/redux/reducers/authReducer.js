import { authActionTypes } from "../actionTypes/authActionTypes";

export const authReducer = (
  state = { user: {}, isAuthenticated: false },
  { type, payload }
) => {
  switch (type) {
    case authActionTypes.LOGIN_USER:
      return { user: payload, isAuthenticated: true };
    case authActionTypes.LOGOUT_USER:
      return { user: payload, isAuthenticated: false };
    default:
      return state;
  }
};
