import React from "react";
import "./index.scss";

function ProductDetails({ product }) {
  const {
    name,
    id,
    ean,
    type,
    weight,
    color,
    isActive,
    quantity,
    price
  } = product;
  const className = quantity ? "PriceDetails" : "PriceDetailsHighlighted";
  return (
    <div className={className}>
      <h1>Product details</h1>
      <p>Product name: {name}</p>
      <p>Product Id: {id}</p>
      <p>Product ean: {ean}</p>
      <p>Product type: {type}</p>
      <p>Product weight: {weight}</p>
      <p>Product color: {color}</p>
      <p>
        {isActive ? " Is in the trade right now" : " Not selling right now"}
      </p>
      <p className={`${className}-item`}>Product quantity: {quantity}</p>
      <p>Product price: {price}</p>
    </div>
  );
}

export default ProductDetails;
