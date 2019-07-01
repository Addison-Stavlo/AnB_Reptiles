import React from "react";
import styled from "styled-components";
import headlineImage from "../images/snakes/AnB_Snek3.jpg";

export default function HomePage(props) {
  const Home = styled.div`
    position: relative;
    div {
      width: 100%;
      color: white;

      img {
        z-index: -1;
      }

      img,
      p {
        font-size: calc(10px + 4vmin);
        font-weight: bold;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  `;

  return (
    <Home>
      <div className="headline">
        <p>Welcome to our Page! </p>
        <img src={headlineImage} alt="headline snake" />
      </div>
    </Home>
  );
}
