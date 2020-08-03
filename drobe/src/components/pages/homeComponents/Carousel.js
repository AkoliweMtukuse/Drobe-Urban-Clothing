import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id="Carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.max270.com/wp-content/uploads/2018/11/Nike-Air-Max-270-x-React-Element-87-White-Volt-for-sale.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Nike New Releases</h3>
          <p>Dare to be brave ?. JUST DO IT</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.max270.com/wp-content/uploads/2018/11/Nike-Air-Max-270-x-React-Element-87-White-Volt-heel.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Nike New Releases</h3>
          <p>Dare to be brave ?. JUST DO IT</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.max270.com/wp-content/uploads/2018/11/Nike-Air-Max-270-x-React-Element-87-White-Volt-shoes.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Nike New Releases</h3>
          <p>Dare to be brave ?. JUST DO IT</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default ControlledCarousel;
