import React from "react";
import styled from "styled-components";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.countDelay = 2500 + Math.random() * 1000;
    this.imageBox = React.createRef();
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    setInterval(this.increaseCount, this.countDelay);
    this.imageBox.current.classList.add("transition");
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
        <img
          className="image-main"
          src={images[this.state.count]}
          alt="alternating images"
          ref={this.imageBox}
        />
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

  @keyframes fadeSequence-main {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  img {
    width: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 black;
    /* position: absolute; */
  }

  .transition {
    animation: fadeSequence-main ${props => `${props.countDelay / 1000}s`}
      infinite;
  }
`;
