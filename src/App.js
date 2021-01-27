import React, { useState } from "react";

import Home from "./Home";
import Cart from "./Cart";
import HomeProducts from "./HomeProducts";
import CartProducts from "./CartProducts";

function App() {
  const [productsItemz, setProductsItemz] = useState([
    { id: 0, name: "Car", stock: 50 },
    { id: 1, name: "Boat", stock: 50 },
    { id: 2, name: "Ship", stock: 50 },
  ]);
  const [products, setProducts] = useState(productsItemz);

  const [productItem, setProductItem] = useState({
    id: 1,
    name: "Gun",
    stock: 50,
  });
  const [product, setProduct] = useState(productItem);

  const handleStateAddProducts = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = {
          ...product,
          stock: product.stock - 1,
        };
        return updatedProduct;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const handleStateDeleteProducts = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = {
          ...product,
          stock: product.stock + 1,
        };
        return updatedProduct;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const handleShip = () => {
    setProductsItemz(products);
  };

  const handleStateAdd = () => {
    setProduct({ ...product, stock: product.stock - 1 });
  };

  const handleStateDelete = () => {
    setProduct({ ...product, stock: product.stock + 1 });
  };

  const handleStateShip = () => {
    setProductItem(product);
  };

  return (
    <div>
      <div style={{ border: "2px solid black" }}>
        <h2 style={{ color: "red" }}>
          Initial state OBJECT: (coming from DATA)
        </h2>
        <p>Name: {productItem.name}</p>
        <p>Stock: {productItem.stock}</p>
      </div>
      <Home
        product={product}
        handleStateAdd={handleStateAdd}
        handleStateDelete={handleStateDelete}
        productItem={productItem}
      />
      <Cart
        product={product}
        productItem={productItem}
        handleStateAdd={handleStateAdd}
        handleStateDelete={handleStateDelete}
        handleStateShip={handleStateShip}
      />
      <div style={{ border: "2px solid black" }}>
        <h2 style={{ color: "red" }}>
          Initial state ARRAY: (coming from DATA)
        </h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {productsItemz.map((product) => {
            return (
              <div key={product.id}>
                <p>Name: {product.name} </p>
                <p>Stock: {product.stock} </p>
              </div>
            );
          })}
        </div>
      </div>
      <HomeProducts
        products={products}
        productsItemz={productsItemz}
        handleStateAddProducts={handleStateAddProducts}
        handleStateDeleteProducts={handleStateDeleteProducts}
      />
      <CartProducts
        products={products}
        productsItemz={productsItemz}
        handleStateAddProducts={handleStateAddProducts}
        handleStateDeleteProducts={handleStateDeleteProducts}
        handleShip={handleShip}
      />
    </div>
  );
}

export default App;
