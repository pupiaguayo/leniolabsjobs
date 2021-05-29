import { createStore } from "redux";
const initialState = {
  jobList: [],
  jobListName: [],
  jobListLocation: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LIST_JOBS": {
      return { ...state, jobList: action.payload };
    }

    case "FILTER_LIST_JOBS": {
      let list;
      if (state.jobListLocation.length > 0) {
        list = state.jobListLocation;
      } else {
        list = state.jobList;
      }
      const jobListName = list.filter((job) =>
        job.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, jobListName };
    }
    case "FILTER_LOCATION_JOBS": {
      let listLoc;
      if (state.jobListName.length > 0) {
        listLoc = state.jobListName;
      } else {
        listLoc = state.jobList;
      }
      const jobListLocation = listLoc.filter((job) =>
        job.location.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, jobListLocation };
    }
    default: {
      return state;
    }
  }
};
const store = createStore(reducer, initialState);

export default store;
