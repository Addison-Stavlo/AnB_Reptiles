import React from "react";
import styled from "styled-components";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.countDelay = 2500 + Math.random() * 1000;
    this.imageBox = React.createRef();
    this.imageBox2 = React.createRef();
    this.state = {
      count: 0,
      count2: 1
    };
  }

  componentDidMount() {
    // setInterval(this.increaseCount, this.countDelay * 2);
    this.imageBox.current.classList.add("transition");
    this.imageBox2.current.classList.add("transition2");
    setTimeout(() => {
      setInterval(this.increaseCount, this.countDelay * 2);
    }, (this.countDelay * 3) / 2);
    setTimeout(() => {
      setInterval(this.increaseCount2, this.countDelay * 2);
    }, this.countDelay / 2);
  }

  increaseCount = () => {
    this.setState({
      count: (this.state.count + 2) % this.props.images.length
    });
  };

  increaseCount2 = () => {
    this.setState({
      count2: (this.state.count2 + 2) % this.props.images.length
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
        <img
          className="image-main"
          src={images[this.state.count2]}
          alt="alternating images"
          ref={this.imageBox2}
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
    50% {
      opacity: 1;
    }
    60% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeSequence-secondary {
    0% {
      opacity: 1;
    }
    10% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  img {
    width: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 black;
    position: absolute;
  }

  .transition {
    animation: fadeSequence-main ${props => `${(props.countDelay * 2) / 1000}s`}
      infinite;
  }

  .transition2 {
    animation: fadeSequence-secondary
      ${props => `${(props.countDelay * 2) / 1000}s`} infinite;
  }
`;
