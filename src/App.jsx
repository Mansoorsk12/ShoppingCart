import { useState } from "react";

import products from "./data/product";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import "./App.css";

function App() {

  const [cart, setCart] = useState([]);

  // Add product
  const addToCart = (product) => {

    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);

    }
  };


  const increaseQuantity = (id) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  };

  const decreaseQuantity = (id) => {

    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };


  // Remove item
  const removeItem = (id) => {

    setCart(
      cart.filter((item) => item.id !== id)
    );

  };


  return (
    <div className="app">

      <h1>Shopping Cart</h1>

      <div className="main-container">

        <ProductList
          products={products}
          addToCart={addToCart}
        />

        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />

      </div>

    </div>
  );
}

export default App;