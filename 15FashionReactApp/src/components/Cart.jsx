import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const INITIAL_CART = [
  {
    id: 1,
    name: "Imperial Velvet Bandhgala",
    price: 55000,
    size: "42 (L)",
    color: "Royal Maroon",
    quantity: 1,
    img: "https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg"
  },
  {
    id: 3,
    name: "Hand-Stitched Tan Loafers",
    price: 18900,
    size: "9 UK",
    color: "Sienna",
    quantity: 1,
    img: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg"
  }
];

const Cart = () => {
  const [items, setItems] = useState(INITIAL_CART);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 50000 ? 0 : 500; // Free shipping over 50k

  return (
    <div className="bg-[#FFFEFA] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        
        {/* --- HEADER --- */}
        <div className="mb-16 border-b border-orange-100 pb-8 flex justify-between items-end">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-2">Your Selection</h4>
            <h1 className="text-4xl md:text-5xl font-serif italic text-black">Shopping Bag</h1>
          </div>
          <p className="text-xs tracking-widest text-gray-400 uppercase font-bold">
            {items.length} {items.length === 1 ? 'Item' : 'Items'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LEFT: ITEM LIST --- */}
          <div className="lg:col-span-8">
            {items.length > 0 ? (
              <div className="space-y-10">
                {items.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-8 border-b border-orange-50 pb-10 group">
                    {/* Product Image */}
                    <div className="w-full sm:w-40 aspect-[3/4] overflow-hidden bg-gray-50">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow flex flex-col justify-between py-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-serif italic mb-2">{item.name}</h3>
                          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-gray-500">
                            <span>Size: <b className="text-black">{item.size}</b></span>
                            <span>Color: <b className="text-black">{item.color}</b></span>
                          </div>
                        </div>
                        <p className="text-lg font-serif text-black">₹{item.price.toLocaleString()}</p>
                      </div>

                      <div className="flex justify-between items-center mt-8">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-gray-200">
                          <button className="px-4 py-2 hover:bg-gray-50 transition">-</button>
                          <span className="px-4 py-2 text-xs font-bold border-x border-gray-200">{item.quantity}</span>
                          <button className="px-4 py-2 hover:bg-gray-50 transition">+</button>
                        </div>
                        {/* Remove Action */}
                        <button className="text-[10px] uppercase tracking-widest text-[#8B0000] border-b border-transparent hover:border-[#8B0000] transition-all font-bold">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif italic text-2xl text-gray-400 mb-8">Your bag is currently empty.</p>
                <Link to="/shop" className="bg-black text-white px-12 py-5 text-xs font-bold tracking-widest uppercase">Start Shopping</Link>
              </div>
            )}
          </div>

          {/* --- RIGHT: SUMMARY & CHECKOUT --- */}
          <div className="lg:col-span-4">
            <div className="bg-[#FDFBF7] p-8 md:p-10 border border-orange-50 sticky top-32">
              <h2 className="text-xl font-serif italic mb-8 border-b border-orange-100 pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm tracking-widest">
                  <span className="text-gray-500 uppercase">Subtotal</span>
                  <span className="text-black font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm tracking-widest">
                  <span className="text-gray-500 uppercase">Shipping</span>
                  <span className="text-black font-medium">{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-sm tracking-widest pt-4 border-t border-orange-100">
                  <span className="text-black font-bold uppercase">Estimated Total</span>
                  <span className="text-2xl font-serif text-[#4A0404]">₹{(subtotal + shipping).toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full bg-[#1A1A1A] text-white py-6 text-xs font-bold tracking-[0.4em] uppercase hover:bg-[#4A0404] transition-all duration-500 shadow-xl mb-6">
                Proceed To Checkout
              </button>

              <div className="space-y-6 pt-6 border-t border-orange-100">
                <div className="flex items-center gap-4 text-[10px] tracking-widest text-gray-400 uppercase italic">
                  <span>🔱 Encrypted Payment</span>
                  <span>|</span>
                  <span>🛡️ Insured Delivery</span>
                </div>
                
                {/* Concierge Help */}
                <div className="p-4 bg-white border border-gray-100">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#C5A059] mb-2">Need Assistance?</p>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-light">
                    Our Royal Concierge is available to assist with sizing and checkout. 
                    <br/><b className="text-black">+91 1800-ARVANI</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;