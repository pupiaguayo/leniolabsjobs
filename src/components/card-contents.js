import React from "react";
import styled from "styled-components";

// styles contents Cards
export const Cards = styled.div`
  color: #fafafa;
  background-color: #303a5b;
  height: 10vh;
  width: 100%;
  border-radius: 8px;
  grid-column: 2/5;
  margin-bottom: 1.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  }
  img {
    height: 10vh;
  }
`;
export const ButtonCards = styled.button`
  height: 3vh;
  width: auto;
  font-size: 1em;
  border-radius: 8px;
  margin-right: 1vw;
  background-color: #eebe5b;
  border: 1px solid #283351;
  color: #283351;
  font-weight: bold;
`;
// styles contents Cards

const CardContents = () => {
  return (
    <Cards>
      <img src="https://i.ibb.co/StBB1Lb/leniologo.png" />
      <div className="infoJob">
        <h2>Frontend Engineer</h2>
        <ButtonCards>Full Time</ButtonCards>
        <p>Los angeles</p>
        <p>6 days ago</p>
      </div>
    </Cards>
  );
};
export default CardContents;
