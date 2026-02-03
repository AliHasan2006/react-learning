import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  { 
    id: 'men', 
    name: "Men's Edit", 
    desc: "Streetwear & Tailored Classics", 
    img: "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg" 
  },
  { 
    id: 'women', 
    name: "Women's Edit", 
    desc: "Modern Silhouettes & Winterwear", 
    img: "https://i.pinimg.com/736x/90/63/b8/9063b81a58ef33c94012fee9095a28cd.jpg" 
  },
  { 
    id: 'winter', 
    name: "Winter Collection", 
    desc: "Luxury Overcoats & Sweaters", 
    img: "https://i.pinimg.com/736x/e4/77/25/e477255b0ab694df483c933af0fedba6.jpg" 
  },
  { 
    id: 'loafers', 
    name: "Footwear", 
    desc: "Hand-Stitched Italian Loafers", 
    img: "https://i.pinimg.com/736x/46/0a/7a/460a7a69a7ce00d4878c5cb726eb8a75.jpg" 
  },
  { 
    id: 'combo', 
    name: "The Combos", 
    desc: "Curated Sets for the Modern Man", 
    img: "https://i.pinimg.com/1200x/49/f1/f1/49f1f15f03d2273030a6ecdb68e71c5b.jpg" 
  },
  { 
    id: 'bags', 
    name: "Bags & Wallets", 
    desc: "Genuine Leather Accessories", 
    img: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg" 
  },
];

const Shop = () => {
  return (
    <div className="bg-[#FFFEFA] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-16">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <h4 className="text-[10px] uppercase tracking-[0.6em] text-gray-400 font-bold mb-4">Explore our Atelier</h4>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black">Categories</h1>
          <div className="h-[2px] w-20 bg-black mx-auto mt-8"></div>
        </div>

        {/* --- CATEGORY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop/${cat.id}`} // Yeh user ko specific category page pe le jayega
              className="group relative h-[500px] overflow-hidden bg-gray-200 block"
            >
              {/* Background Image with Zoom */}
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 brightness-[0.85] group-hover:brightness-[0.7]"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {cat.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {cat.desc}
                </p>
                
                {/* Visual Button */}
                <div className="mt-8 border border-white px-8 py-3 text-[9px] font-bold tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                  View Collection
                </div>
              </div>

              {/* Border decoration on hover */}
              <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Link>
          ))}
        </div>

        {/* --- HELP SECTION --- */}
        <div className="mt-24 border-t border-gray-100 pt-20 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-left">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Personal Stylist?</h2>
            <p className="text-gray-400 text-xs tracking-widest uppercase mt-2">Can't decide? Let our experts help you build your look.</p>
          </div>
          <Link to="/contact" className="bg-black text-white px-12 py-5 text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-white hover:text-black border border-black transition-all">
            Book a Session
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Shop;