import React from "react";
import styled from "styled-components";
import logo from "../images/logos/logo_small_white.png";
import fb_logo from "../images/logos/social_media/facebook_white.png";
import insta_logo from "../images/logos/social_media/instagram_white.png";

import { NavLink } from "react-router-dom";

export default function Header(props) {
  const StyledHeader = styled.div`
    margin-bottom: 15vmin;
    div {
      z-index: 1;
      background-color: rgb(20, 20, 20);
      padding-top: calc(15px + 4vmin);
      height: 10vmin;
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      justify-content: center;

      color: white;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;

      .social {
        height: calc(30px + 1vmin);
        position: fixed;
        top: calc(10px + 1vmin);
        cursor: pointer;

        img {
          /* animation: App-logo-spin infinite 5s linear; */
        }
        &:hover {
          height: calc(30px + 2vmin);
        }
      }

      .fb_logo {
        right: calc(20px + 5vw);
      }
      .insta_logo {
        left: calc(20px + 5vw);
      }

      .anb_logo {
        animation: logo-fade-in 5s linear;
        height: 20vmin;
      }

      a {
        text-decoration: none;
        color: white;
        font-size: calc(10px + 2vmin);
      }

      .active {
        text-decoration: underline;
      }
    }
  `;
  return (
    <StyledHeader>
      <div>
        <a
          className="social insta_logo"
          href="https://www.instagram.com/anb_reptiles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social insta_logo" src={insta_logo} alt="instagram" />
        </a>
        <a
          className="social insta_logo"
          href="https://www.facebook.com/AnBReptiles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social fb_logo" src={fb_logo} alt="facebook" />
        </a>
        <NavLink exact to="/">
          Home
        </NavLink>

        <img src={logo} alt="logo" className="anb_logo" />
        <NavLink to="/shop">Shop</NavLink>
      </div>
    </StyledHeader>
  );
}
