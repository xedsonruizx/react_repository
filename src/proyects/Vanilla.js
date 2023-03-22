import React from "react";
import { AiFillGithub } from "react-icons/ai";
import "../assets/css/cards.scss";

import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import FirstSlider from "./carrousel-vanilla/First-Slider";
import SecondSlider from "./carrousel-vanilla/Second-Slider";
const Vanilla = () => (
  <div>
    {/* <!-- CARDS --> */}
    <Carousel className="cards-container mt-5">
      <FirstSlider></FirstSlider>
      <SecondSlider></SecondSlider>
    </Carousel>
  </div>
);

export default Vanilla;
