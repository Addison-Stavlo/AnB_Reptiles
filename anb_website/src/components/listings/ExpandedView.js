import React from "react";
import styled from "styled-components";

export default function ExpandedView(props) {
  const { src, type, dob, sex, price, parents, animalID } = props.animal;
  const ExpandedItem = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100vw;
    height: 100vh;
    background: rgba(25, 25, 25, 0.8);
    color: white;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .item-wrapper {
      position: relative;
      background: rgb(40, 40, 40);
      padding: 20px;
      border-radius: 10px;
      overflow-y: auto;
      img {
        max-width: 600px;
        max-height: 600px;
      }

      .animal-content {
        display: flex;
        /* justify-content: center; */
        align-items: center;
      }

      hr {
        margin-top: 10px;
        border-top: 2px dashed white;
        border-bottom: none;
      }

      .close-item {
        position: absolute;
        right: 10px;
        font-size: 20px;
        background: rgb(25, 25, 25);
        border-radius: 5px;
        padding: 5px 10px;
        margin: 0 auto;
        cursor: pointer;

        :hover {
          background: rgb(50, 50, 50);
          box-shadow: 0 0 5px 0 inset;
        }
        :active {
          background: rgb(50, 50, 50);
          box-shadow: 0 0 10px 0 inset;
        }
      }
      .ci-top {
        top: 10px;
      }
      .ci-bottom {
        bottom: 10px;
      }
    }
  `;

  return (
    <ExpandedItem>
      <div className="item-wrapper">
        {/* <div className="close-item ci-top" onClick={props.toggleExpanded}>
          Close
        </div> */}
        <div className="animal-content">
          <img src={src} />
          <div className="side-content">
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
          </div>
        </div>
        <hr />
        <h2>Parents</h2>
        <div className="animal-content">
          <img src={parents[0].src} />
          <div className="side-content">
            <h1>{parents[0].type}</h1>
            <h3>Year: {parents[0].dob}</h3>
            <h3>Sex: {parents[0].sex}</h3>
          </div>
        </div>
        <div className="animal-content">
          <img src={parents[1].src} />
          <div className="side-content">
            <h1>{parents[1].type}</h1>
            <h3>Year: {parents[1].dob}</h3>
            <h3>Sex: {parents[1].sex}</h3>
          </div>
        </div>
        {/* <div className="close-item ci-bottom" onClick={props.toggleExpanded}>
          Close
        </div> */}
      </div>
    </ExpandedItem>
  );
}
