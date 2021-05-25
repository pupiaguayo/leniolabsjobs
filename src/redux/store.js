import { createStore } from "redux";
const initialState = {
  jobList: [],
  jobListName: [],
  jobListLocation: [],
  jobListNameAndLocation: [],
};
function reducer(state, action) {
  console.log(action);
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
      if (jobListName.length > 0) {
        return { ...state, jobListName };
      } else {
        alert("Job not found");
      }
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
      if (jobListLocation.length > 0) {
        return { ...state, jobListLocation };
      } else {
        alert("Location Not found");
      }
    }
    default: {
      return state;
    }
  }
}
const store = createStore(
  reducer,
  initialState
  // reducers,
  // {},
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
