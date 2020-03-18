import React, { Component } from 'react'
import './App.scss'
import Header from './header'
import Footer from './footer'
import products from './components/products/products.js';
import Homepage from './home.js'
import About from './About.js'
import PLP from './plp.js'
import ProductPage from './pdp.js'
import { Route, NavLink, HashRouter } from "react-router-dom";
import BurgerMenu from './images/icons/burgermenu.svg'

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          products : products,
          menuOpen: false
      }
      this.showMenu = this.showMenu.bind(this);
      this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(e){
    e.preventDefault();
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }
  hideMenu(e){
    e.preventDefault();
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }));
  }

  render() {
    const products = this.state.products;
    const showMenu = this.showMenu;
    const hideMenu = this.hideMenu;
    return (
      <div className="app">
        <HashRouter>
          <div className="header-container" showmenu={showMenu} hidemenu={hideMenu} >
            <div className="header-block">

              <div className="mobile-menu">
                {this.state.menuOpen ?
                  <div className="mob-menu-open">
                  <img src={BurgerMenu} className="burger-menu" id="mobMenu" onClick={this.showMenu} alt="menu"/>
                    <nav>
                      <ul className="mobile-menu-list">
                        <li><NavLink to="/" className="mobile-nav-link" onClick={this.hideMenu}>Home</NavLink></li>
                        <li><NavLink to="/About" className="mobile-nav-link" onClick={this.hideMenu}>About</NavLink></li>
                        <li><NavLink to="/plp" className="mobile-nav-link" onClick={this.hideMenu} products={products}>Shop</NavLink></li>
                      </ul>
                    </nav>
                  </div>
                  : <img src={BurgerMenu} className="burger-menu" id="mobMenu" onClick={this.showMenu} alt="menu"/>
                }
              </div>

              <div className="desktop-menu">
                <nav>
                  <ul className="header">
                    <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/About" className="nav-link">About</NavLink></li>
                    <li><NavLink to="/plp" className="nav-link" products={products}>Shop</NavLink></li>
                  </ul>
                </nav>
              </div>

              <div className="main-page-content-container">
                <div className="main">
                  <Route exact path="/" component={Homepage} products={products}/>
                   <Route path="/About" exact component={About} products={products}/>
                   <Route path="/plp" component={PLP} products={products}/>
                   <Route path="/pdp" component={ProductPage} products={products}/>
                </div>
              </div>

            </div>
          </div>
        </HashRouter>
      </div>
  )
}

}

export default App
