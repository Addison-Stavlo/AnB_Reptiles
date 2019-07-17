import React from "react";
import styled from "styled-components";

export default function Carousel(props) {
  const images = props.images;

  const [count, setCount] = React.useState(0);

  const increaseCount = () => {
    const countDelay = 2500 + Math.floor(Math.random() * 1000); //ms
    setTimeout(() => setCount((count + 1) % images.length), countDelay);
  };
  React.useEffect(increaseCount, [count]);

  const Wrapper = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 300px;
      border-radius: 10px;
      box-shadow: 0 0 10px 0 black;
    }
  `;
  return (
    <Wrapper>
      <img src={images[count]} alt="alternating images" />
    </Wrapper>
  );
}
