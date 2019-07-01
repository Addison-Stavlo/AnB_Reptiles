import React from "react";
import styled from "styled-components";
import headlineImage from "../images/snakes/AnB_Snek3.jpg";

export default function HomePage(props) {
  const Home = styled.div`
    .headline {
      position: relative;
      width: 100%;

      img {
        z-index: -1;
        width: 100%;
      }
      p {
        width: 80%;
        color: rgb(230, 230, 230);
        font-size: calc(10px + 4vmin);
        font-weight: bold;
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .about {
      background: rgb(230, 230, 230);
      height: 700px;
      margin: 0;
      h2 {
        margin: 0;
        text-decoration: underline;
      }
    }
  `;

  return (
    <Home>
      <div className="headline">
        <p>Welcome to our Page! </p>
        <img src={headlineImage} alt="headline snake" />
      </div>
      <div className="about">
        <h2>About Us</h2>
      </div>
    </Home>
  );
}
