import React from "react";
import styled from "styled-components";
import logo from "../images/logos/logo_small_white.png";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const StyledHeader = styled.div`
    margin-bottom: 30vmin;
    div {
      z-index: 1;
      background-color: rgb(20, 20, 20);
      padding-top: calc(15px + 8vmin);
      height: 20vmin;
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 4vmin);
      color: white;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;

      img {
        animation: App-logo-spin infinite 5s linear;
        height: 40vmin;
        pointer-events: none;
      }

      a {
        text-decoration: none;
      }

      .active {
        text-decoration: underline;
      }
    }
  `;
  return (
    <StyledHeader>
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
        <img src={logo} alt="logo" />
        <NavLink to="/animals">Available</NavLink>
      </div>
    </StyledHeader>
  );
}
