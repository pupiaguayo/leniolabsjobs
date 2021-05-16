import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// styles Header Page
export const Header = styled.header`
  color: white;
  grid-column: 1/-1;
  background-color: #fffcf5;

  h1 {
    background-color: #fffcf5;
    color: #20273e;
    margin-top: 3.5vh;
    margin-left: 6.25vw;
    font-size: 2.5em;
    font-family: "Roboto Mono", monospace;
  }
`;
// styles Header Page

const HeaderView = () => {
  return (
    <Header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>LenioJobs</h1>
      </Link>
    </Header>
  );
};
export default HeaderView;
