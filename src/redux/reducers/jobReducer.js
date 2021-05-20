import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  jobs: [],
};
export const jobsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_JOBS:
      return { ...state, jobs: payload };
    default:
      return state;
  }
};
