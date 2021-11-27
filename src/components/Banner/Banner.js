import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="slider-image">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://visitmaldives.s3.amazonaws.com/9kobkNw8/c/nih6acbo-slide.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Everything You Need to Know Before Traveling to Maldives</h3>
            <p>A Dozen Must Do Experiences in the Maldives</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://visitmaldives.s3.amazonaws.com/pDqKlWoO/c/sdnaapvs-slide.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>
            VIRTUAL 
              <br />
              EXPERIENCES
            </h3>
            <p>
              “Every mountain top is within reach if you just keep climbing.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://visitmaldives.s3.amazonaws.com/roOjXxqP/c/fn86xclz-slide.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>ruise the waters to explore the Maldives</h3>
            <p>Cruise the waters to explore the Maldives</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
