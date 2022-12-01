import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Laptop from "../../images/laptop.jpg";
import TV from "../../images/tv.jpg";
import Headphones from "../../images/headphones.jpg";
import Container from "react-bootstrap/esm/Container";
import "./Slider.css";

const Slider = () => {
  return (
    <Container className="mt-4 sliderStyle">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block custom-img  w-100"
            src={Laptop}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block custom-img  w-100"
            src={TV}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block custom-img  w-100"
            src={Headphones}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;
