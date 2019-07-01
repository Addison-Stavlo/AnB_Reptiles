import React from "react";
import styled from "styled-components";
import logo from "../images/logos/logo_small_white.png";

export default function Header(props) {
  const StyledHeader = styled.div`
    background-color: rgb(40, 40, 40);
    padding-top: calc(25px + 10vmin);
    height: 32vmin;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 4vmin);
    color: white;

    img {
      animation: App-logo-spin infinite 5s linear;
      height: 60vmin;
      pointer-events: none;
    }
  `;
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
    </StyledHeader>
  );
}
