import React from "react";
import styled from "styled-components";
import CardContents from "./card-contents.js";
// styles container Cards
export const Card = styled.div`
  color: white;
  height: auto;
  margin: 4vh 6.25vw 0 6.25vw;
  grid-column: 2/5;

  @media (max-width: 575.98px) {
    grid-column: 1/5;
  }
`;
// styles container Cards

const CardJobs = () => {
  return (
    <Card>
      <CardContents />
      <CardContents />
      <CardContents />
      <CardContents />
      <CardContents />
    </Card>
  );
};
export default CardJobs;
