import React from "react";
import styled from "styled-components";
import saleItems from "../data/snake_data";

export default function ItemPage(props) {
  const PageWrapper = styled.section``;

  return (
    <PageWrapper>
      <h1>I am the page for item of index {props.match.params.id}</h1>
    </PageWrapper>
  );
}
