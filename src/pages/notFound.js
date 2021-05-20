import React from "react";
import styled from "styled-components";
import { ButtonCards } from "../common/index";
import { Link } from "react-router-dom";
import { TiArrowLeftThick } from "react-icons/ti";
// styles Page ERROR
export const ErrorPage = styled.div`
  color: white;
  height: auto;
  text-align: center;
  margin: 0 6.25vw 20vh 6.25vw;
  grid-column: 1/5;
  img {
    height: 25em;
    animation: errorAnimation 5s infinite;
  }
  @keyframes errorAnimation {
    100% {
      transform: rotate(360deg);
    }
  }
  h2 {
    color: #eebe5b;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1vh;
  }
  p {
    margin-bottom: 2.5vh;
  }
`;
function PageError() {
  return (
    <ErrorPage>
      <img src="https://i.ibb.co/Gt0rVTb/Leni-Error.png" alt="Leni-Error" />
      <h2>SORRY, LENI CAN'T FIND THAT PAGE</h2>
      <p>
        The page you are looking for might be removed or is temporarily
        unavailable
      </p>
      <Link to="/">
        <ButtonCards>
          {" "}
          <TiArrowLeftThick className="a" /> Back to Home
        </ButtonCards>
      </Link>
    </ErrorPage>
  );
}

export default PageError;
