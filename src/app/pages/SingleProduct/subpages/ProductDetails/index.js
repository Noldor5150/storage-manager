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
  return (
    <div className="PriceHistory">
      <h1>Product Details</h1>
      <p>name: {name}</p>
      <p>id: {id}</p>
      <p>ean: {ean}</p>
      <p>type: {type}</p>
      <p>weight: {weight}</p>
      <p>color: {color}</p>
      <p>isActive: {isActive}</p>
      <p>quantity: {quantity}</p>
      <p>price: {price}</p>
    </div>
  );
}

export default ProductDetails;
