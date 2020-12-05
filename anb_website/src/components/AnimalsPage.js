import React from "react";
import styled from "styled-components";
import saleItems from "../data/snake_data";
import SaleItem from "./listings/SaleItem";

export default function AnimalsPage(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageHolder>
      <div className="sales-note">
        <h2>Sales note:</h2>
        <p>
          While we are concerned with your convenience, AnB Reptiles does not
          sell animals at the click of a button. We care about both our animals
          and our customers and require the extra step of communication for the
          sale. We want to ensure the buyer is prepared to recieve and take care
          of the animal as well as potentially wait for shippable weather
          conditions. Once a deal is agreed upon, payments can be made through
          PayPal. Average shipping and handling costs are around $50.
        </p>
      </div>
      <h1>Our Available Animals</h1>
      <div className="sales-shelf">
        {saleItems.map((item, index) => (
          <SaleItem animal={item} index={index} />
        ))}
      </div>
    </PageHolder>
  );
}

const PageHolder = styled.div`
  background: #d1d4c7;
  padding-top: 50px;

  .sales-note {
    h2 {
      margin: 0;
      padding: 20px 0 0;
      font-size: calc(15px + 1vmin);
    }
    p {
      padding: 20px 0;
      font-size: calc(12px + 1vmin);
      width: 80%;
      margin: 0 auto;
      max-width: 800px;
    }
  }

  h1 {
    font-size: calc(15px + 1.5vmin);
  }

  .sales-shelf {
    margin: 0 auto;
    width: 90%;
    max-width: 1400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
