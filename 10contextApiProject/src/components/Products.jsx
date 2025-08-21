import React from "react";
import useCart from "../contexts/cartContext";

const sampleProducts = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Mango", price: 50 },
];

function Products() {
  const { addItems } = useCart();

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {sampleProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
            <button onClick={() => addItems(product)} style={{ marginLeft: 10 }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
