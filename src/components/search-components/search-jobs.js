import React from "react";
import styled from "styled-components";

// styles SearchBar and Container SearchBar
export const SearchBar = styled.section`
  height: 25vh;
  grid-column: 1/-1;
  background-image: url("https://i.ibb.co/nQnJ1KB/wearehiring.jpg");
  background-repeat: repeat;
  background-size: contain;
  width: 87.5vw;
  height: 14.3vh;
  margin: 5vh 6.25vw 0 6.25vw;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  .inputJobs {
    width: 35vw;
    height: 3vh;
    border-radius: 8px;
    margin-right: 1vw;
    border: 1px solid gray;
  }
  .inputSubmit {
    height: 3vh;
    width: 7vw;
    font-size: 1em;
    border-radius: 8px;
    margin-right: 1vw;
    background-color: #eebe5b;
    border: 1px solid #283351;
    color: #283351;
    font-weight: bold;
  }
`;
// styles SearchBar and Container SearchBar
const SearchJobs = () => {
  return (
    <SearchBar>
      <form action="">
        <input type="text" className="inputJobs" />
        <input
          type="submit"
          name=""
          id=""
          className="inputSubmit"
          value="Search"
        />
      </form>
    </SearchBar>
  );
};
export default SearchJobs;
