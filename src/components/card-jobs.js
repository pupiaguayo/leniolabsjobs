import { React, useEffect, useState } from "react";
import styled from "styled-components";
import CardContents from "./card-contents.js";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// styles container Cards
export const Card = styled.div`
  color: white;
  height: auto;
  margin: 4vh 6.25vw 0 6.25vw;
  grid-column: 2/5;

  @media (max-width: 575.98px) {
    grid-column: 1/5;
  }
  .pagination {
    display: flex;
    grid-column: 2/5;
    justify-content: center;
    padding: 2vh;
    list-style: none;
  }
  .pagination a {
    margin: 0.625em;
    padding: 0.625em;
    border-radius: 5px;
    border: 1px solid #eebe5b;
    color: #eebe5b;
    font-weight: bold;
  }
  .pagination a:hover {
    cursor: pointer;
    background-color: #eebe5b;
    color: #283351;
  }
  .paginationNext:hover {
    cursor: pointer;
  }
  .paginationBack:hover {
    cursor: pointer;
  }
  .paginationActive a {
    background-color: #eebe5b;
    color: #283351;
  }
`;
// styles container Cards

const CardJobs = () => {
  // API CALL / SET REDUX
  const dispatch = useDispatch();
  const PROXY_PATH = "https://cors-anywhere.herokuapp.com/";
  const BASE_PATH = "https://jobs.github.com/positions.json?search=frontend";
  const jobListLocation = useSelector((state) => state.jobListLocation);
  const jobListName = useSelector((state) => state.jobListName);
  const jobList = useSelector((state) => {
    if (jobListLocation.length > 0 && jobListName.length === 0) {
      return jobListLocation;
    }
    if (jobListLocation.length === 0 && jobListName.length > 0) {
      return jobListName;
    }
    if (jobListLocation.length > 0 && jobListName.length > 0) {
      return jobListLocation;
    }
    return state.jobList;
  });
  const obtenerJobs = async () => {
    const data = await fetch(`${PROXY_PATH}${BASE_PATH}`);
    const elementos = await data.json();
    dispatch({
      type: "SET_LIST_JOBS",
      payload: elementos,
    });
  };

  // API CALL / SET REDUX

  useEffect(() => {
    obtenerJobs();
  }, [dispatch]);

  // Function React Paginate
  const page = 5;
  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * page;
  const pageCount = Math.ceil(jobList.length / page);

  const PageData = jobList.slice(offset, offset + page).map((job) => {
    return (
      <Link to={`/Jobs/${job.id}`} style={{ textDecoration: "none" }}>
        <CardContents
          title={job.title}
          location={job.location}
          time={new Date(job.created_at).toLocaleDateString()}
          key={job.id}
        />
      </Link>
    );
  });
  // Function React Paginate

  return (
    <Card>
      {PageData}
      <ReactPaginate
        previousLabel={"???"}
        nextLabel={"???"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"paginationBack"}
        nextLinkClassName={"paginationNext"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </Card>
  );
};
export default CardJobs;
