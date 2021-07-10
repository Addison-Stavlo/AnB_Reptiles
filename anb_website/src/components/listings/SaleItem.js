import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function SaleItem(props) {
  const { src_small, type, dob, sex, price, animalID } = props.animal;

  const [animProps, set] = useSpring(() => ({
    xys: [0, 0, 1]
  }));

  const trans = (x, y, s) => `scale(${s})`;
  return (
    <animated.div
      onMouseMove={() => set({ xys: [0, 0, 1.05] })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: animProps.xys.interpolate(trans) }}
    >
      <SaleCard onClick={() => props.history.push(`/shop/${props.index}`)}>
        <img src={src_small} alt="snake" />
        <h1 className="animalType">{type}</h1>
        <h3>ID: {animalID}</h3>
        <h3>Date Hatched: {dob}</h3>
        <h3>Sex: {sex}</h3>
        <h3>${price} + shipping</h3>

        <button className="view-more">Click for More Info!</button>

        <a
          href="http://m.me/AnBReptiles"
          target="_blank"
          rel="noopener noreferrer"
          onClick={ev => ev.stopPropagation()}
          className="facebook-link"
        >
          Interested? <br /> Message Us on Facebook
        </a>
      </SaleCard>
    </animated.div>
  );
}

export default withRouter(SaleItem);

const SaleCard = styled.article`
  min-height: 400px;
  background: rgba(50, 50, 50, 1);
  border-radius: 10px;
  padding: 20px;
  margin: 5px;
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding-bottom: 70px;

  img {
    max-height: 280px;
    max-width: 280px;
    border-radius: 5px;
  }

  .animalType {
    font-size: 22px;
    padding-top: 10px;
    margin: 8px auto;
  }

  h3 {
    font-size: 18px;
    font-weight: normal;
    text-align: left;
    margin: 5px auto;
    width: 99%;
  }

  .view-more {
    text-decoration: underline;
    cursor: pointer;
    font-size: 18px;
    font-weight: normal;
    text-align: left;
    margin: 5px auto;
    width: 99%;
    background: inherit;
    border: none;
    color: white;
  }

  .facebook-link {
    margin: 0 auto;
    padding: 10px;
    color: white;
    /* display: block; */
    background: rgb(0,0,0);
    width: 80%;
    border-radius: 10px;
    text-decoration: none;
    position: absolute;
    bottom: 10px;

    :hover {
      background: rgb(50, 50, 50);
      box-shadow: 0 0 5px 0 inset;
    }

    :active {
      background: rgb(50, 50, 50);
      box-shadow: 0 0 15px 0 inset;
    }
  }

  :hover {
    box-shadow: 0 0 10px 0 white inset;
  }
`;
