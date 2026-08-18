import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("foodie-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("foodie-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (foodItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === foodItem.name);

      if (existingItem) {
        return prevItems.map((item) =>
          item.name === foodItem.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...foodItem, quantity: 1 }];
    });
  };

  const increaseQuantity = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (itemName) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.name === itemName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== itemName)
    );
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
