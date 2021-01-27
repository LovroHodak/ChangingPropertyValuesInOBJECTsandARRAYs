import React from "react";

export default function Home({
  product,
  handleStateAdd,
  handleStateDelete,
  productItem,
}) {
  return (
    <div style={{ border: "2px solid black" }}>
      <h2>In Home.js OBJECT</h2>
      <p>Name: {product.name}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={() => handleStateAdd()}>Add Item</button>
      {product.stock === productItem.stock ? (
        <></>
      ) : (
        <button onClick={() => handleStateDelete()}>Delete Item</button>
      )}
    </div>
  );
}
