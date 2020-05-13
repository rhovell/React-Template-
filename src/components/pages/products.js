import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const ProductPageTemp = ({ match, props }) => (
<div>
{props.match.params.productName}
Helllooo
{product.title}
<Route path={`${match.url}/:productName`} component={ProductPage} />
</div>
)
