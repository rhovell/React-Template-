import React from "react";
import { Carousel } from "react-responsive-carousel";
import Member1 from './images/70s.png'
import Member2 from './images/beard.png'
import Member3 from './images/chair.png'
import Member4 from './images/tablet.png'
// import "react-responsive-carousel/lib/styles/carousel.min.scss";
import "./responsive-teams-slider.scss";

export default () => (
  <Carousel className="teams-slider" showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} centerMode centerSlidePercentage={85}>
    <div className="slide-1">
      <img src={Member1} className=" team-member" id="slide-1"/>
      <h3>Lorem Ipsum</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div className="slide-2">
      <img src={Member2} className=" team-member" id="slide-2"/>
      <h3>Lorem Ipsum</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div className="slide-3">
      <img src={Member3} className=" team-member" id="slide-3"/>
      <h3>Lorem Ipsum</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div className="slide-4">
      <img src={Member4} className="team-member" id="slide-4"/>
      <h3>Lorem Ipsum</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
  </Carousel>
);
