import React, { Component } from 'react'
import '../styles/shop.scss'
import { Route, BrowserRouter, NavLink, Switch as Router, Link, useParams, useRouteMatch, withRouter } from 'react-router-dom';

// import { Route, Link, NavLink, Switch, useParams, useRouteMatch, withRouter } from "react-router-dom";
// import products from '../products/products.js';
// import '../products/images/product_id1.jpg'
// import ProductPage from './product.js'
// import callAPI from '../products/productsAPI2.js'
// import getProduct from '.../App.js'
// const Product = ({ match }) => <p>{match.params.id}</p>


function ProductPage({ match, props, product}) {
  // const product = this.props.product;
  var productNo = product.id;
  var productName = product.title;

    return (
      <>
        <div className="product-page">
          <img key={productName+'-product-image'+product.id} src={require(`../products/images/product_id${productNo}.jpg`)} alt={productName} className="product-image" />
          <h3 className="title">{product.title}</h3>
          <p className="author">By {product.author}</p>
          <p className="price">{product.price}</p>
          <p className="description">{product.description}</p>
          <div className="add-to-bag">Add to bag</div>
        </div>
      </>
    )
}

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descOpen: false
    }
    this.showMore = this.showMore.bind(this);
    this.showLess = this.showLess.bind(this);

  }

  showMore(e){
    e.preventDefault();
    this.setState(prevState => ({
      descOpen: !prevState.descOpen,
    }));
  }
  showLess(e){
    e.preventDefault();
    this.setState(prevState => ({
      descOpen: !prevState.descOpen,
    }));
  }

  getProduct(productNo){
    fetch(`https://xifv82wash.execute-api.eu-west-2.amazonaws.com/prod/products/?productid=${productNo}`, {
      "mode": "cors",
      "method": "GET",

      "headers": {
        "content-type": "application/json",
        "accept": "application/json"

      }
    })
    .then(response => console.log(response))
    .then(response => response.json())
    .catch(err => {
      console.log('no product found', err);
    });
  }

  render() {
    const products = this.props.products
    const readMore = this.showMore
    const readLess = this.showLess
    const getProduct = this.getProduct
    return (
      <div className="shop" products={products}>
        <div className="breadcrumbs">
          <Link to="/">Home</Link> - <b>Shop</b>
        </div>

        <div className="category">
          <div className="category-header">
            <h2>Smoothie Books</h2>
            <div className="category-desc">
              {this.state.descOpen ?
              <div className="full-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <div className="read-less-button" onClick={readLess}>Show Less</div></div>
              :
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been... <div className="read-more-button" onClick={readMore}>Read More</div></div>
              }
            </div>
          </div>

          <ul className="product-list">
            {products.map(function(product){
              var productItem = product
              var productNo = product.id
              var productName = product.title.replace(/ /g, "_")
              var productLink = '/product/' + productName;

              return(
                <li className="product" product={product} key={product.id}>
                  <Link to={`/product/${productName}`} product={product}>
                    <img key={productName+'-product-image'+product.id} src={require(`../products/images/product_id${productNo}.jpg`)} alt={productName} className="product-image" />
                  </Link>
                  <h3 className="title">{product.title}</h3>
                  <p className="author">By {product.author}</p>
                  <p className="price">£{product.price}</p>
                  <p className="description">{product.description}</p>
                  <div className="add-to-bag">Add to bag</div>
                  <Route path="/products/:productName" component={ProductPage} getProduct={getProduct(productNo)} />
                </li>
              );
            })}
          </ul>

        </div>
    </div>
    )
  }
}

export default Shop
