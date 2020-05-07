import { Route, BrowserRouter as Router, Link, useRouteMatch, } from 'react-router-dom';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Homepage from './components/pages/home.js'
import About from './components/pages/about.js'
import FAQ from './components/pages/faq.js'
import Shop from './components/pages/shop.js'
import Testimonials from './components/pages/testimonials.js'
import ProductPage from './components/pages/ProductPage.js'
import Faq from './components/pages/faq.js'
import Notfound from './components/pages/notfound.js'




class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          products : [],
          menuOpen: false,
          faqOpen: false,
          isLoading: false,
          error: null
      }
      this.showMenu = this.showMenu.bind(this);
      this.hideMenu = this.hideMenu.bind(this);
      this.hideFaq = this.hideFaq.bind(this);
      this.showFaq = this.showFaq.bind(this);
  }

  componentDidMount(){
    this.setState({ isLoading: true });
    fetch("https://xifv82wash.execute-api.eu-west-2.amazonaws.com/prod/products", {
      "mode": "cors",
      "method": "GET",

      "headers": {
        "content-type": "application/json",
        "accept": "application/json"

      }
    })
    .then(response => response.json())
    .then(products => {
      this.setState({
        products: products,
        isLoading: false
      })
    })
    .catch(error => {
      console.log('no products', error);
      this.setState({ error, isLoading: false });
    });
  }

  showMenu(e){
    e.preventDefault();
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }
  showFaq(e){
    e.preventDefault();
    this.setState(prevState => ({
      faqOpen: !prevState.faqOpen
    }));
  }
  hideMenu(e){
    e.preventDefault();
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }));
  }
  hideFaq(e){
    e.preventDefault();
    this.setState(prevState => ({
      faqOpen: !prevState.faqOpen,
    }));
  }

  render(){
    const { isLoading, error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading ...</p>;
    }

    const productList = this.state.products;
    return (
      <Router>
        <nav>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
          </ul>
        </nav>
        <div className="app-routing">
          <Route exact path="/" render={()=><Homepage products={productList}/>}/>
          <Route path="/shop" render={()=><Shop products={productList}/>}/>
          <Route path="/about" component={About} />
          <Route path="/testimonials" component={Testimonials} />
        </div>
      </Router>
    );
  }
}

export default App
