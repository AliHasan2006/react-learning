import React from "react";
import useCart from "../contexts/cartContext";

function Cart() {
  const { cartItems, rmvItems } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price}
              <button onClick={() => rmvItems(item.id)} style={{ marginLeft: 10 }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
