import React from "react";
import { Carousel } from "react-responsive-carousel";
import Recipe1 from './images/recipe(1).png'
import Recipe2 from './images/recipe(2).png'
import Recipe3 from './images/recipe(3).png'
import Recipe4 from './images/recipe(4).png'
import Recipe5 from './images/recipe(5).png'
import Recipe6 from './images/recipe(6).png'
// import "react-responsive-carousel/lib/styles/carousel.min.scss";
import "./responsive-recipe-slider.scss";

export default () => (
  <Carousel className="recipe-slider" showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} centerMode centerSlidePercentage={85}>
    <div className="slide-1">
      <img src={Recipe1} className=" recipe" id="slide-1"/>
      <p>@LoremIpsum</p>
    </div>
    <div className="slide-2">
      <img src={Recipe2} className=" recipe" id="slide-2"/>
      <p>@LoremIpsum</p>
    </div>
    <div className="slide-3">
      <img src={Recipe3} className=" recipe" id="slide-3"/>
      <p>@LoremIpsum</p>
    </div>
    <div className="slide-4">
      <img src={Recipe4} className=" recipe" id="slide-4"/>
      <p>@LoremIpsum</p>
    </div>
    <div className="slide-5">
      <img src={Recipe5} className=" recipe" id="slide-5"/>
      <p>@LoremIpsum</p>
    </div>
    <div className="slide-6">
      <img src={Recipe6} className=" recipe" id="slide-6"/>
      <p>@LoremIpsum</p>
    </div>
  </Carousel>
);
