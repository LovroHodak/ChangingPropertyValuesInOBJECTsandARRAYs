import React from "react";

export default function HomeProducts({
  products,
  productsItemz,
  handleStateAddProducts,
  handleStateDeleteProducts,
}) {
  return (
    <div style={{ border: "2px solid black" }}>
      <h2>In HomeProducts.js ARRAY</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <p>Name: {product.name} </p>
              <p>Stock: {product.stock} </p>
              <button onClick={() => handleStateAddProducts(product.id)}>
                Add to basket
              </button>
              {product.stock === productsItemz[product.id].stock ? (
                <></>
              ) : (
                <button onClick={() => handleStateDeleteProducts(product.id)}>
                  Delete Item
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
