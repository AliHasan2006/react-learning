import React, { createContext, useState, useContext } from "react";

// Create context with default value (optional but helpful)
const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  addItems: () => {},
  rmvItems: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItems = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const rmvItems = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };
 
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addItems, rmvItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default function useCart() {
  return useContext(CartContext);
}
