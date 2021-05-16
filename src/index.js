import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";

export const ButtonCards = styled.button`
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
`;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
