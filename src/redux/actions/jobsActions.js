import { ActionTypes } from "../contants/actionTypes";
export const setJobs = (jobs) => {
  return {
    type: ActionTypes.SET_JOBS,
    payload: jobs,
  };
};
export const selectedJob = (job) => {
  return {
    type: ActionTypes.SELECTED_JOB,
    payload: job,
  };
};
