import React from "react";
import styled from "styled-components";
import headlineImage from "../images/snakes/blossoms_and_snake.jpg";

export default function HomePage(props) {
  const Home = styled.div`
    .headline {
      position: relative;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;

      img {
        z-index: -1;
        width: 100%;
      }
      p {
        width: 35%;
        max-width: 350px;
        color: rgb(219, 200, 191);
        border-radius: 15px;
        font-size: calc(10px + 4vmin);
        font-weight: bold;
        position: absolute;
        top: 7vw;
        left: 55%;
        right: 0;
        margin: auto;
        background: rgba(25, 25, 25, 0.7);
        padding: 10px 5px;
      }
    }

    .about {
      background: rgb(219, 200, 191);
      /* background: white; */
      padding: 10px;
      padding-top: calc(5px + 3vmin);
      padding-bottom: calc(15px + 5vw);
      color: rgb(30, 30, 30);

      h2 {
        width: 50%;
        font-size: calc(18px + 3vmin);
      }

      p {
        font-size: calc(12px + 1vmin);
        margin-left: 30%;
        width: 60%;
        line-height: calc(12px + 1.5vmin);
      }

      h3 {
        width: 55%;
        font-size: calc(5px + 2vmin);
      }
    }
  `;

  return (
    <Home>
      <div className="headline">
        <p>Welcome to our Homepage!</p>
        <img src={headlineImage} alt="headline snake" />
      </div>
      <div className="about">
        <h2>About Us:</h2>
        <p>
          We breed and sell carpet pythons! <br /> We are local to Rochester NY,
          but we ship nationwide!
        </p>

        <p>
          After taking in our first carpet python, we quickly fell in love with
          the species. We would go to local shops and reptile expos and noticed
          there would always be lots of ball pythons, boas, and geckos... but
          rarely would we find carpet pythons! On the rare occasion that we did,
          the person selling it would generally not be the person who had bred
          the animal or known the parents and would not have much information
          about the snake that was for sale.
        </p>
        <p>
          With a desire to share this awesome species with the reptile
          enthusiasts around us (and with a continuously expanding collection of
          animals reaching breeding age) we eventually decided to start AnB
          Reptiles in 2017!
        </p>
      </div>
    </Home>
  );
}
