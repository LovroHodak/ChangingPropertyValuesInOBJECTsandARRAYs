import React from "react";

export default function CartProducts({
  products,
  productsItemz,
  handleStateAddProducts,
  handleStateDeleteProducts,
  handleShip,
}) {
  return (
    <div style={{ border: "2px solid black" }}>
      <h2>In CartProducts.js ARRAY</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {products.map((product) => {
          if (product.stock === productsItemz[product.id].stock) {
            return <></>;
          } else {
            return (
              <div>
                <p>Name: {product.name}</p>
                <p>
                  Nr. of Items:
                  {productsItemz[product.id].stock - product.stock}
                </p>
                <button onClick={() => handleStateAddProducts(product.id)}>
                  Add To basket
                </button>
                <button onClick={() => handleStateDeleteProducts(product.id)}>
                  Delete from basket
                </button>
              </div>
            );
          }
        })}
      </div>
      <div>
        <button
          style={{ fontSize: "30px", color: "blue" }}
          onClick={() => handleShip()}
        >
          SHIP
        </button>
      </div>
    </div>
  );
}
