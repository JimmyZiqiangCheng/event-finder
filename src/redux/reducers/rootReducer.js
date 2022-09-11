import { combineReducers } from "redux";
import { eventsReducer } from "./eventsReducer";
import { hostReducer } from "./hostReducer";
import { currentEventReducer } from "./currentEventReducer";

const rootReducer = combineReducers({
  events: eventsReducer,
  currentEvent: currentEventReducer,
  hosts: hostReducer,
});

export default rootReducer;
