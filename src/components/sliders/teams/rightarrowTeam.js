import React from 'react';
import RightArrowImg from './images/right-arrow.svg'

const RightArrow = (props) => {
  return (
    <img src={RightArrowImg} className="right-arrow" onClick={props.goToNextSlide} alt="Next"/>
  );
}

export default RightArrow
