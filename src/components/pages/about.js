import React, { Component } from 'react'
// import '../styles/about.scss'
import { Link } from 'react-router-dom'
// import Camels from '../images/camels@2x.png'
// import Head from './images/woman.png'
// import Vice from './images/man.png'
// import TeamSlider from '../sliders/teams/TeamSlider.js'

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showMore = this.showMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }

  showMore(e){
    e.preventDefault();
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  }
  showLess(e){
    e.preventDefault();
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  }


  render() {
    const readMore = this.showMore;
    const readLess = this.showLess;

    return (
      <div className="about-page">

    </div>
    )
  }

}

export default About
