import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonCards } from "../index";
// styles contents Cards
export const Cards = styled.div`
  color: #fafafa;
  text-decoration: none;
  background-color: #303a5b;
  height: 10vh;
  border-radius: 8px;
  grid-column: 2/5;
  margin-bottom: 1.5vh;
  box-shadow: 0.3125em 0.25em 0.625em #141414;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background-color: #4a5a8e;
  }
  .infoJob {
    margin-left: 4vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .infoJob h2 {
    font-size: 1.5em;
    width: 100%;
    margin-bottom: 2vh;
    letter-spacing: 1px;
  }
  img {
    height: 10vh;
  }
`;
// styles contents Cards

const CardContents = () => {
  return (
    <Link to="/jobs" style={{ textDecoration: "none" }}>
      <Cards>
        <img src="https://i.ibb.co/StBB1Lb/leniologo.png" />
        <div className="infoJob">
          <h2>Frontend Engineer</h2>
          <ButtonCards>Full Time</ButtonCards>
          <p>Los angeles</p>
          <p>6 days ago</p>
        </div>
      </Cards>
    </Link>
  );
};
export default CardContents;
