import React from "react";
import styled from "styled-components";
export const Sidebar = styled.div`
  color: white;
  height: auto;
  grid-column: 1/2;
  grid-row: auto;
  margin-left: 6.25vw;
  margin-top: 4vh;
  display: flex;
  flex-direction: column;

  .form-location {
    margin-top: 1.5vh;
  }
  .form-location input {
    width: 90%;
    height: 2.5vh;
    margin-top: 1.5vh;
    border-radius: 4px;

    border: none;
  }
  .form-cities {
    display: flex;
    flex-direction: column;
    margin-top: 1vw;
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
  return (
    <Sidebar>
      <form action="">
        <input type="checkbox" />
        <label htmlFor="">Full Time</label>
      </form>

      <form className="form-location">
        <label htmlFor="">LOCATION</label>
        <input type="text" placeholder="Ciudad, Estado o CP" />
      </form>

      <form className="form-cities">
        <label className="locale-label" htmlFor="Buenos Aires">
          <input type="radio" />
          <span>Buenos Aires</span>
        </label>{" "}
        <label className="locale-label" htmlFor="Atlanta">
          <input type="radio" />
          <span>Atlanta</span>
        </label>{" "}
        <label className="locale-label" htmlFor="Santiago">
          <input type="radio" />
          <span>Santiago </span>
        </label>{" "}
        <label className="locale-label" htmlFor="Berlin">
          <input type="radio" />
          <span>Berlin</span>
        </label>
      </form>
    </Sidebar>
  );
};
export default SearchLocation;
