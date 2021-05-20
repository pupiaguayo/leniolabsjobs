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
  img {
    /* z-index: 1; */
    height: 8vh;
    animation: rotate 10s infinite;
  }
  @keyframes rotate {
    25% {
      transform: translateY(60vh);
      transform: rotate(-45deg);
    }
    50% {
      transform: translateY(110vh);
    }
    75% {
      transform: rotate(-45deg);
    }
  }
  .inputJobs {
    font-size: 1em;
    width: 35vw;
    height: auto;
    padding: 4px;
    border-radius: 8px;
    margin-right: 1vw;
    border: 1px solid gray;
  }
  .inputSubmit {
    height: auto;
    width: auto;
    font-size: 1em;
    border-radius: 0.5em;
    margin-right: 1vw;
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
`;
// styles SearchBar and Container SearchBar

const SearchJobs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Function is temporarily unavailable");
  };
  return (
    <SearchBar>
      <img src="https://i.ibb.co/SBTKK24/leni-rocket2.png" alt="" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputJobs"
          placeholder="Title or Expertise"
        />
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
