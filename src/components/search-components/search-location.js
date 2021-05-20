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

  .form-fulltime label {
    margin-left: 0.8vw;
  }
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
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Function is temporarily unavailable");
  };
  return (
    <Sidebar>
      <form action="" className="form-fulltime">
        <input type="checkbox" />
        <label htmlFor="">Full Time</label>
      </form>

      <form className="form-location" onSubmit={handleSubmit}>
        <label htmlFor="">LOCATION</label>
        <input type="text" placeholder="City, State, zip code or Country" />
      </form>

      <form className="form-cities">
        <label className="locale-label" htmlFor="Buenos Aires">
          <input type="radio" />
          <span>Remote</span>
        </label>{" "}
        <label className="locale-label" htmlFor="Atlanta">
          <input type="radio" />
          <span>Berlin</span>
        </label>{" "}
        <label className="locale-label" htmlFor="Santiago">
          <input type="radio" />
          <span>USA </span>
        </label>{" "}
      </form>
    </Sidebar>
  );
};
export default SearchLocation;
