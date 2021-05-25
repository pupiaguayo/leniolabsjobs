import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
export const Sidebar = styled.div`
  color: white;
  height: auto;
  grid-column: 1/2;
  grid-row: auto;
  margin-left: 6.25vw;
  margin-top: 4vh;
  display: flex;
  flex-direction: column;

  .form-fulltime label {
    margin-left: 0.8vw;
  }
  .inputSubmit {
    width: 90%;
    height: auto;
    padding: 4px;
    margin-top: 1.5vh;
    border-radius: 4px;
    padding: 4px;
    background-color: #eebe5b;
    border: 1px solid #283351;
    color: #283351;
    font-weight: bold;
    &:hover {
      transition: 1s ease-in-out;
      background: #283351;
      color: #eebe5b;
      cursor: pointer;
    }
  }
  .cleanFilters {
    width: 90%;
    height: auto;
    padding: 4px;
    margin-top: 1.5vh;
    border-radius: 4px;
    padding: 4px;
    background-color: #ff7d5a;
    color: #283351;
    border: 1px solid #ff7d5a;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }
  .form-cities {
    display: flex;
    flex-direction: column;
    margin-top: 1vh;
  }
  .inputOtherCountry {
    width: 90%;
    height: auto;
    padding: 4px;
    margin-top: 1.5vh;
    border-radius: 4px;

    border: none;
  }
  .form-cities label {
    margin-top: 1.5vh;
  }
  .form-cities span {
    font-weight: bold;
    margin-left: 0.8vw;
    font-size: 1em;
  }
  @media (max-width: 575.98px) {
    grid-column: 1/5;
  }
`;
const SearchLocation = () => {
  const [locationValue, setLocationValue] = useState("");
  const dispatch = useDispatch();
  const submitLocation = (e) => {
    e.preventDefault();
    dispatch({
      type: "FILTER_LOCATION_JOBS",
      payload: locationValue,
    });
  };
  const searchLocation = (e) => {
    setLocationValue(e.target.value);
  };
  const cleanFilters = () => {
    setLocationValue("");
  };

  return (
    <Sidebar>
      <form action="" className="form-fulltime">
        <input type="checkbox" />
        <label htmlFor="">Full Time</label>
      </form>

      <form className="form-cities" onSubmit={submitLocation}>
        <label>LOCATION</label>
        <input
          type="text"
          className="inputOtherCountry"
          placeholder="Other Country"
          value={locationValue}
          onChange={searchLocation}
        />
        <label className="locale-label">
          <input
            type="radio"
            value="remote"
            onClick={searchLocation}
            checked={locationValue === "remote"}
          />
          <span>Remote</span>
        </label>{" "}
        <label className="locale-label">
          <input
            type="radio"
            value="Berlin"
            onClick={searchLocation}
            checked={locationValue === "Berlin"}
          />
          <span>Berlin</span>
        </label>{" "}
        <label className="locale-label" onClick={searchLocation}>
          <input
            type="radio"
            value="United States"
            onChange={searchLocation}
            checked={locationValue === "United States"}
          />
          <span>USA </span>
        </label>{" "}
        <input
          type="submit"
          className="inputSubmit"
          value="Search For Location"
        />
        <input
          type="submit"
          className="cleanFilters"
          value="Delete Filter Location"
          onClick={cleanFilters}
        />
      </form>
    </Sidebar>
  );
};
export default SearchLocation;
