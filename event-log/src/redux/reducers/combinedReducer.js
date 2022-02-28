import { combineReducers } from "redux";
import { eventReducer } from "./eventReducer";

const reducers = combineReducers({
  events: eventReducer,
});

export default reducers;
