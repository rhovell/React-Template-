import React, { Component } from 'react'
import '../styles/shop.scss'
import { Link } from 'react-router-dom'

class ProductPage extends React.Component {
  state = {
    product: [{}]
  }
  // componentDidMount (props) {
  //   const { id } = this.props.match.params
  //
  //   fetch(`https://xifv82wash.execute-api.eu-west-2.amazonaws.com/01/products/${id}`, {
  //     "method": "GET",
  //     "headers": {
  //       "content-type": "application/json",
  //       "accept": "application/json"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(product => {
  //     this.setState({
  //       product: product
  //     })
  //   })
  //   .catch(err => {
  //     console.log('no products', err);
  //   });
  // }
  render() {
    const product = this.state.product
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
}
export default ProductPage;
