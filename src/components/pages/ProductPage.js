import React, { Component } from 'react'
import '../styles/shop.scss'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";

class ProductPageTemp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    }

  }

  componentDidMount (prevProps, prevState, snapshot) {
    // const { id } = this.props.match.params

    // this.setState(() => ({ product: id }))
    console.log('componentDidMount prevProps, prevState, snapshot', prevProps, prevState, snapshot)
  }
  componentWillMount (prevProps, prevState, snapshot) {
    // const { id } = this.props.match.params

    // this.setState(() => ({ product: id }))
    console.log('componentWillMount prevProps, prevState, snapshot',prevProps, prevState, snapshot)
    console.log(this.props)
  }
  componentWillUnmount(prevProps, prevState, snapshot) {
    console.log('componentWillUnmount prevProps, prevState, snapshot',prevProps, prevState, snapshot)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate nextProps, nextState',nextProps, nextState)
  }
  render(){
    const product = this.props.product;
    var productNo = product.id;
    var productName = product.title;
    return (
        <div className="product-page">
          <h3 className="title">{product.title}</h3>
          <img key={productName+'-product-image'+product.id} src={require(`../products/images/product_id${productNo}.jpg`)} alt={productName} className="product-image" />
          <p className="author">By {product.author}</p>
          <p className="price">£{product.price}</p>
          <p className="description">{product.description}</p>
          <div className="add-to-bag">Add to bag</div>
        </div>
    )
  }
}
export default ProductPageTemp
