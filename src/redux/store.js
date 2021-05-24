import { createStore } from "redux";

const initialState = {
  jobList: [],
  jobListName: [],
  jobListLocation: "",
};
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_LIST_JOBS": {
      return { ...state, jobList: action.payload };
    }
    case "FILTER_LIST_JOBS": {
      let list = state.jobList;
      const jobListName = list.filter((job) =>
        job.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, jobListName };
    }
    case "FILTER_LOCATION_JOBS": {
      let list = state.jobList;
      const jobListLocation = list.filter((job) =>
        job.location.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, jobListLocation };
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
