import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiArrowLeftThick } from "react-icons/ti";
import { ButtonCards } from "../common/index";
export const Sidebar = styled.div`
  color: white;
  height: auto;
  grid-column: 1/2;
  grid-row: auto;
  margin-top: 4vh;
  margin-left: 6.25vw;
  display: flex;
  flex-direction: column;

  .title {
    margin-top: 4vh;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: bold;
  }
  p {
    margin-top: 2vh;
  }
  a {
    color: #eebe5b;
    font-weight: bold;
    margin-left: 0.3vw;
    letter-spacing: 0.5px;
  }
  @media (max-width: 575.98px) {
    grid-column: 1/5;
  }
`;
const HowToApply = () => {
  return (
    <Sidebar>
      <Link to="/">
        <ButtonCards>
          {" "}
          <TiArrowLeftThick className="a" /> Back to Search
        </ButtonCards>
      </Link>
      <p className="title">How to apply</p>
      <p>
        Please email a copy of your resume and online portfolio to
        <a href="mailto:info@leniolabs.com">info@leniolabs.com</a>
      </p>
    </Sidebar>
  );
};
export default HowToApply;
