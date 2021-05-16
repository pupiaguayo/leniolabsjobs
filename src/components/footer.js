import React from "react";
import styled from "styled-components";

// styles Footer Page
export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  color: white;
  grid-column: 1/-1;
  small {
    width: 100%;
  }
`;

const FooterView = () => {
  return (
    <Footer>
      <small>&copy; 2021, Made by Ruben Aguayo for Leniolabs</small>{" "}
    </Footer>
  );
};
export default FooterView;
