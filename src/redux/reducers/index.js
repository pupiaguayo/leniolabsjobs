import { combineReducers } from "redux";
import { jobsReducer } from "./jobReducer";

const reducers = combineReducers({
  Jobs: jobsReducer,
});

export default reducers;
