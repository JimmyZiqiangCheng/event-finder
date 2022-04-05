import { combineReducers } from "redux";
import { eventReducer } from "./eventReducer";
import { hostReducer } from "./hostReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  events: eventReducer,
  hosts: hostReducer,
  auth: authReducer,
});

export default rootReducer;
