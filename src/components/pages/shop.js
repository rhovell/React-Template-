import React, { Component } from 'react'
import '../styles/shop.scss'
import { Route, BrowserRouter, NavLink, Switch as Router, Link, useParams, useRouteMatch, withRouter } from 'react-router-dom';
import ProductPageTemp from './ProductPage.js';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descOpen: false
    }
    this.showMore = this.showMore.bind(this);
    this.showLess = this.showLess.bind(this);
    // this.productPage = this.productPage.bind(this);
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

  ProductPage( e, product ) {
    console.log(product)
    // const product = this.props.product;
    // // e.preventDefault()
    // // var productNo = product.id;
    // // var productName = product.title;
    // // return product;
    //   return (
    //     <ProductPageTemp product={product}/>
    //   // //   //   <div className="product-page">
    //   // //   //     <img key={productName+'-product-image'+productNo} src={require(`../products/images/product_id${productNo}.jpg`)} alt={productName} className="product-image" />
    //   // //   //     <h3 className="title">{product.title}</h3>
    //   // //   //     <p className="author">By {product.author}</p>
    //   // //   //     <p className="price">{product.price}</p>
    //   // //   //     <p className="description">{product.description}</p>
    //   // //   //     <div className="add-to-bag">Add to bag</div>
    //   // //   //   </div>
    //   );


  }
  // getProduct(productNo){
  //   var arrayIndex = productNo - 1;
  //   fetch(`https://xifv82wash.execute-api.eu-west-2.amazonaws.com/prod/products/`, {
  //     "mode": "cors",
  //     "method": "GET",
  //     "headers": {
  //       "content-type": "application/json",
  //       "accept": "application/json"
  //     }
  //   })
  //   // .then(response => console.log(response))
  //   .then(response => response.json())
  //   .then(product => { return ProductPage(product[arrayIndex]) } )
  //   // .then(response => { console.log(response[arrayIndex]) })
  //   // .then(response => {  ProductPage(response[arrayIndex]) })
  //
  //
  //   .catch(err => {
  //     console.warn('no product found', err);
  //   });
  // }

  render() {
    const products = this.props.products
    const readMore = this.showMore
    const readLess = this.showLess
    const getProduct = this.getProduct
    const productPageFunc = this.ProductPage

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
              var productName = product.title.replace(/ /g, "_").toLowerCase()
              var productLink = '/product/' + productName;
              var productPage = productPageFunc;

              return(
                <li className="product" product={product} key={product.id}>
                  <Link to={`/product/${productName}`} product={product} >
                    <img key={productName+'-product-image'+product.id} src={require(`../products/images/product_id${productNo}.jpg`)} alt={productName} className="product-image" />
                  </Link>
                  <h3 className="title">{product.title}</h3>
                  <p className="author">By {product.author}</p>
                  <p className="price">£{product.price}</p>
                  <p className="description">{product.description}</p>
                  <div className="add-to-bag">Add to bag</div>
                  <Route path="/product/:productName" product={product} render={(props, product) => <ProductPageTemp {...props} product={product}/>}/>
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
