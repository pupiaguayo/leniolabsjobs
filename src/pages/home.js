import React from "react";
import SearchBar from "../components/search-components/search-jobs";
import SearchLocation from "../components/search-components/search-location";
import CardJobs from "../components/card-jobs";
function PageHome() {
  return (
    <React.Fragment>
      <SearchBar />
      <SearchLocation />
      <CardJobs />
    </React.Fragment>
  );
}

export default PageHome;
