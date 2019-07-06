import React from "react";
import styled from "styled-components";
// import { Button } from "react-bootstrap";
import ExpandedView from "./ExpandedView";

export default function SaleItem(props) {
  const { src, type, dob, sex, price, parents, animalID } = props.animal;

  const [expanded, setExpanded] = React.useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const SaleCard = styled.div`
    /* width: 300px; */
    /* height: 500px; */
    background: rgba(25, 25, 25, 0.9);
    border-radius: 10px;
    padding: 20px;
    margin: 5px;
    color: white;
    cursor: pointer;
    /* box-sizing: border-box; */

    img {
      max-height: 280px;
      max-width: 280px;
      border-radius: 5px;
    }

    h1 {
      font-size: 22px;
      padding-top: 10px;
    }

    h3 {
      font-size: 18px;
      font-weight: normal;
      text-align: left;
      margin: 10px auto;
      width: 99%;
    }

    .view-more {
      text-decoration: underline;
      cursor: pointer;
    }

    a {
      margin: 0 auto;
      padding: 10px;
      color: white;
      display: block;
      background: rgb(25, 25, 25);
      width: 80%;
      border-radius: 10px;
      text-decoration: none;

      :hover {
        background: rgb(50, 50, 50);
        box-shadow: 0 0 5px 0 inset;
      }

      :active {
        background: rgb(50, 50, 50);
        box-shadow: 0 0 15px 0 inset;
      }
    }
  `;
  return (
    <SaleCard onClick={toggleExpanded}>
      <img src={src} />
      <h1>{type}</h1>
      <h3>ID: {animalID}</h3>
      <h3>Date Hatched: {dob}</h3>
      <h3>Sex: {sex}</h3>
      <h3>${price} + shipping</h3>
      <h3 className="view-more">View More Photos</h3>
      <h3 className="view-more">View Parent Info</h3>
      <a href="http://m.me/AnBReptiles" target="_blank">
        Interested? <br /> Message Us on Facebook
      </a>
      {expanded ? (
        <ExpandedView animal={props.animal} toggleExpanded={toggleExpanded} />
      ) : null}
    </SaleCard>
  );
}