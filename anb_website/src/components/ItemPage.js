import React from "react";
import styled from "styled-components";
import saleItems from "../data/snake_data";

export default function ItemPage(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { src, type, dob, sex, price, parents, animalID } = saleItems[
    props.match.params.id
  ];

  return (
    <PageWrapper>
      <section>
        <h1>{type}</h1>
        <h3>ID: {animalID}</h3>
        <h3>Date Hatched: {dob}</h3>
        <h3>Sex: {sex}</h3>
        <h3>${price} + shipping</h3>
        <div>
          <img src={src} alt="snake for sale" />
        </div>
        <a
          href="http://m.me/AnBReptiles"
          target="_blank"
          rel="noopener noreferrer"
        >
          Interested? <br /> Message Us on Facebook
        </a>
      </section>
      <hr />
      <section>
        <h1 className="parents-title">Meet the Parents</h1>
        <h1>"{parents[0].name}"</h1>
        <h1>{parents[0].type}</h1>
        <h3>Year: {parents[0].dob}</h3>
        <h3>Sex: {parents[0].sex}</h3>
        <div>
          <img src={parents[0].src} alt="parent snake 1" />
        </div>
        <h1>"{parents[1].name}"</h1>
        <h1>{parents[1].type}</h1>
        <h3>Year: {parents[1].dob}</h3>
        <h3>Sex: {parents[1].sex}</h3>
        <div>
          <img src={parents[1].src} alt="parent snake 2" />
        </div>
      </section>
    </PageWrapper>
  );
}

const PageWrapper = styled.main`
  /* background: #d1d4c7; */
  background-color: rgb( 15,15,15 );
  color: rgb( 200,200,200 );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 50px;

  h1 {
    margin-top: 20px;
    font-size: 30px;
    padding-top: 10px;
  }

  h3 {
    font-size: 20px;

    margin: 10px auto 0;
  }

  img {
    width: 90%;
    /* max-height: 1000px; */
    max-width: 1000px;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 gray;
    margin: 10px auto;
  }

  a {
    margin: 0 auto 10px;
    padding: 10px;
    color: white;
    display: block;
    background: rgb(0,0,0);
    width: 200px;
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

  hr {
    margin-bottom: 10px;
    border-top: 2px dashed black;
    border-bottom: none;
    width: 90%;
  }

  .parents-title {
    text-decoration: underline;
    font-size: 38px;
  }
`;
