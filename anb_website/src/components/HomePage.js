import React from "react";
import styled from "styled-components";
import headlineImage from "../images/snakes/blossoms_and_snake.jpg";
import Carousel from "../components/carousel/Carousel";
import peoplePics from "../data/about_images";
import snakePics from "../data/snake_carousel";

export default function HomePage(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Home = styled.div`
    .headline {
      position: relative;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;

      img {
        z-index: -1;
        width: 100%;
        border-radius: 10px;
      }
      p {
        width: 35%;
        max-width: 350px;
        /* color: rgb(219, 200, 191); */
        color: white;
        border-radius: 15px;
        font-size: calc(10px + 4vmin);
        font-weight: bold;
        position: absolute;
        bottom: 2vw;
        right: 2vw;
        margin: auto;
        /* background: rgba(25, 25, 25, 0.7); */
        padding: 10px 5px;
      }
    }

    .about {
      background: #d1d4c7;
      padding: 30px;
      /* padding-top: calc(5px + 3vmin); */
      /* padding-bottom: calc(15px + 5vw); */
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;

      .about-text {
        color: rgb(30, 30, 30);
        text-align: left;
        width: 55%;
        max-width: 800px;

        @media (max-width: 700px) {
          width: 90%;
          text-align: center;
        }
        h2 {
          /* width: 60%; */
          margin-left: 2vw;
          font-size: calc(18px + 3vmin);
        }

        p {
          font-size: calc(12px + 1vmin);
          /* margin-left: 2vw; */
          /* width: 50%; */

          line-height: calc(12px + 1.5vmin);
          padding: 10px 0;
        }
      }

      .carousel-holder {
        height: 600px;
      }

      .snake-carousel {
        height: 300px;
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
        <div className="about-text">
          <h2>About Us:</h2>
          <p>
            We breed and sell carpet pythons! <br /> We are local to Rochester
            NY, but we ship nationwide!
          </p>

          <p>
            After taking in our first carpet python, we quickly fell in love
            with the species. We would go to local shops and reptile expos and
            noticed there would always be lots of ball pythons, boas, and
            geckos... but rarely would we find carpet pythons! On the rare
            occasion that we did, the person selling it would generally not be
            the person who had bred the animal or known the parents and would
            not have much information about the snake that was for sale.
          </p>
          <p>
            With a desire to share this awesome species with the reptile
            enthusiasts around us (and with a continuously expanding collection
            of animals reaching breeding age) we eventually decided to start AnB
            Reptiles in 2017!
          </p>
        </div>
        <div className="carousel-holder">
          <Carousel images={peoplePics} />
        </div>
      </div>
      <div className="about">
        <div className="carousel-holder snake-carousel">
          <Carousel images={snakePics} />
        </div>
        <div className="about-text">
          <p>
            After taking in our first carpet python, we quickly fell in love
            with the species. We would go to local shops and reptile expos and
            noticed there would always be lots of ball pythons, boas, and
            geckos... but rarely would we find carpet pythons! On the rare
            occasion that we did, the person selling it would generally not be
            the person who had bred the animal or known the parents and would
            not have much information about the snake that was for sale.
          </p>
        </div>
      </div>
    </Home>
  );
}
