import React from "react";

export default function Cart({
  product,
  handleStateAdd,
  handleStateDelete,
  productItem,
  handleStateShip,
}) {
  return product.stock === productItem.stock ? (
    <div style={{ border: "2px solid black" }}>
      <h2>In Cart.js OBJECT- OBJECT Cart is empty</h2>
    </div>
  ) : (
    <div style={{ border: "2px solid black" }}>
      <h2>In Cart.js OBJECT</h2>
      <p>Name: {product.name}</p>
      <p>Nr. of Items: {productItem.stock - product.stock}</p>
      <button onClick={() => handleStateAdd()}>Add Item</button>
      {product.stock === productItem.stock ? (
        <></>
      ) : (
        <button onClick={() => handleStateDelete()}>Delete Item</button>
      )}
      <div>
        <button
          style={{ fontSize: "30px", color: "blue" }}
          onClick={() => handleStateShip()}
        >
          SHIP
        </button>
      </div>
    </div>
  );
}
