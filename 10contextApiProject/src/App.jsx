import React from "react";
import { CartContextProvider } from "./contexts/cartContext"
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  return (
    <CartContextProvider>
      <h1>🛒 Shopping Cart Example</h1>
      <Products />
      <Cart />
    </CartContextProvider>
  );
}

export default App;
