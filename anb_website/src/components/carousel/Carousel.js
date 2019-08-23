import React from "react";
import styled from "styled-components";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.countDelay = 1500 + Math.random() * 1500;
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      setInterval(this.increaseCount, this.countDelay * 2);
    }, this.countDelay);
  }

  increaseCount = () => {
    this.setState({
      count: (this.state.count + 1) % this.props.images.length
    });
  };

  render() {
    const images = this.props.images;

    return (
      <Wrapper countDelay={this.countDelay}>
        {images.map((image, index) => {
          let isActive = index === this.state.count % images.length;
          return (
            <img
              src={image}
              alt="snakes and peoples"
              className={isActive ? "active-img" : null}
            />
          );
        })}
      </Wrapper>
    );
  }
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
    animation-name: fadeout;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    opacity: 0;
  }

  .active-img {
    animation-name: fadein;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    opacity: 1;
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
