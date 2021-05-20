import styled from "styled-components";
export const ButtonCards = styled.button`
  height: auto;
  width: auto;
  font-size: 0.8em;
  border-radius: 0.5em;
  padding: 8px;
  background-color: #eebe5b;
  border: 1px solid #283351;
  color: #283351;
  font-weight: bold;
  .a {
    vertical-align: middle;
  }
  &:hover {
    transition: 1s ease-in-out;
    background: #283351;
    color: #eebe5b;
    cursor: pointer;
  }
`;
