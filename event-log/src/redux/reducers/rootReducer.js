import { combineReducers } from "redux";
import { eventReducer } from "./eventReducer";
import { hostReducer } from "./hostReducer";

const rootReducer = combineReducers({
  events: eventReducer,
  hosts: hostReducer,
});

export default rootReducer;
