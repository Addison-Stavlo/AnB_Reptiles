import React from "react";
import styled from "styled-components";
import { useTransition, animated, config } from "react-spring";

export default function Carousel(props) {
  const images = props.images;

  const [count, setCount] = React.useState(0);

  const countDelay = 2500 + Math.floor(Math.random() * 1000);

  const increaseCount = () => {
    setTimeout(() => setCount((count + 1) % images.length), countDelay);
  };

  React.useEffect(increaseCount, [count]);

  const transitions = useTransition(images[count], item => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });

  return (
    <Wrapper>
      {transitions.map(({ item, props, key }) => (
        <animated.img
          src={item}
          key={key}
          style={{ ...props }}
          alt="alternating pics"
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  img {
    width: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 black;
    position: absolute;
  }
`;
