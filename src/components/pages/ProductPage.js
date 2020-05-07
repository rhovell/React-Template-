import React, { Component } from 'react'
import '../styles/shop.scss'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";

class ProductPage extends Component {
  state = {
    product: null
  }
  componentDidMount () {
    const { id } = this.props.match.params

    this.setState(() => ({ product: id }))
  }

  render(){
    const product = this.props.product;
    var productNo = product.id;
    var productName = product.title;
    return (
      <>
        <div className="product-page">
          <img key={productName+'-product-image'+product.id} src={require(`../products/images/product_id${productNo}.jpg`)} alt={productName} className="product-image" />
          <h3 className="title">{product.title}</h3>
          <p className="author">By {product.author}</p>
          <p className="price">£{product.price}</p>
          <p className="description">{product.description}</p>
          <div className="add-to-bag">Add to bag</div>
        </div>
      </>
    )
  }
}
export default ProductPage
