import React from 'react'
import '../styles/home.scss'
import { Link } from 'react-router-dom'
import Arrow from '../icons/keyboard-right-arrow-button.svg'
import BlackArrow from '../icons/right-arrow-button-black.svg'
import Background from '../backgrounds/mobile-homepage-hero@2x.png'
import BackgroundLarge from '../backgrounds/homepagehero@2x.png'
import About from './about.js'
import GrowthSlider from '../sliders/growth-slider/growth-slider.js'
import RecipeSlider from '../sliders/recipes/recipe-slider.js'
import GreenSmoothies from '../products/images/product_id1.jpg'
import Jelly from '../sliders/recipes/images/recipes.png'
import JellyLarge from '../sliders/recipes/images/recipes@2x.png'

class Homepage extends React.Component {
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
    const products = this.products;

    return (
      <div className="homepage" products={products}>
        <div className="homepage-hero-block">
          <div className="homepage-back mobile-only" >
            <div className="background-holder">
              <div className="hero-block">
                <div className="block-inner">
                  <h1>Lorem Ipsum</h1>
                  {this.state.show ?
                    <div className="full-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <div className="read-less-button" onClick={readLess}>Show Less</div></div>
                    :
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been... <div className="read-more-button" onClick={readMore}>Read More</div></div>
                    }
                    <div className="find-out-more-button">
                      <Link to="/About">Find Out More
                        <img src={Arrow} className="find-more-arrow" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="homepage-back desktop-only">
          <div className="background-holder">
            <div className="hero-block">
              <div className="block-inner">
                <h1>Lorem Ipsum</h1>
                <div className="full-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                  <div className="find-out-more-button">
                    <Link to="/About">Find Out More
                      <img src={Arrow} className="find-more-arrow" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-container growth">
          <GrowthSlider></GrowthSlider>
        </div>

        <div className="Smoothie-book">
          <div className="image-holder">
            <img src={GreenSmoothies} className="smoothy-book" alt="" title="Green Kitchen Smoothies"/>
          </div>
          <h3>Smoothie Book</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className="find-out-more-button">
            <Link to="/shop">Find Out More
              <img src={Arrow} className="find-more-arrow" alt="" />
            </Link>
          </div>
        </div>

        <div className="recipes-section">
          <div className="image-holder mobile-only">
            <img src={Jelly} className="jelly-recipe" alt="Jelly Recipe" title="Jelly Recipe"/>
          </div>
          <div className="image-holder desktop-only">
            <img src={JellyLarge} className="jelly-recipe" alt="Jelly Recipe" title="Jelly Recipe"/>
          </div>
          <h3>Sample Recipe Pages</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className="view-more">
            <Link to="/recipe"><div className="view-more-button">View Sample Pages <img src={BlackArrow} className="find-more-arrow" alt="" /></div></Link>
          </div>
        </div>

        <div className="slider-container recipes">
          <h3>Your Recipes</h3>
          <RecipeSlider></RecipeSlider>
        </div>

      </div>
    )
  }

}

export default Homepage
