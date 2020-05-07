import React from "react";
import { Carousel } from "react-responsive-carousel";
import Growth from './growth.svg'
import Juice from './juice.svg'
import Heart from './heart.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./responsive-slider.scss";

export default () => (
  <Carousel className="growth-slider" showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} >
    <div className="slide-1">
      <img src={Growth} className=" growth" id="slide-1"/>
      <h3>Lorem Ipsum</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div className="slide-2">
      <img src={Juice} className=" juice" id="slide-2"/>
      <h3>Lorem Ipsum</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div className="slide-3">
      <img src={Heart} className=" heart" id="slide-3"/>
      <h3>Lorem Ipsum</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
  </Carousel>
);
