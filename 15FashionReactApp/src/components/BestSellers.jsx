import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  // ROW 1: WOMEN'S SWEATERS & BLAZERS
  { id: 1, name: "Cashmere Oversized Sweater", price: "₹4,500", category: "Women", sub: "Sweater", img: "https://i.pinimg.com/1200x/ad/b9/98/adb998e354679933e2ea2367fb0f35af.jpg" },
  { id: 2, name: "Ivory Tailored Blazer", price: "₹8,900", category: "Women", sub: "Blazer", img: "https://i.pinimg.com/1200x/43/67/00/436700375fc73a191169c297f887f39e.jpg" },
  { id: 3, name: "Woolen Blend Cardigan", price: "₹3,200", category: "Women", sub: "Sweater", img: "https://i.pinimg.com/736x/f0/b4/b5/f0b4b5c4c25165ae65b962a69362bc9b.jpg" },

  // ROW 2: MEN'S T-SHIRTS & BLAZERS
  { id: 4, name: "Graphic Streetwear Tee", price: "₹1,800", category: "Men", sub: "T-Shirt", img: "https://i.pinimg.com/736x/87/1c/7a/871c7a9baa89b453ba93e9592c0058e1.jpg" },
  { id: 5, name: "Midnight Slim-Fit Blazer", price: "₹3,150", category: "Men", sub: "Blazer", img: "https://i.pinimg.com/1200x/f2/1b/0f/f21b0f2e07dbbf103ca1b26ff67cb64e.jpg" },
  { id: 6, name: "Graphic Streetwear Tee", price: "₹2,100", category: "Men", sub: "T-Shirt", img: "https://i.pinimg.com/1200x/14/fd/56/14fd56891c889695cfb75388b64a98d0.jpg" },

  // ROW 3: LOAFERS & WALLETS
  { id: 7, name: "Classic Penny Loafers", price: "₹6,500", category: "Accessories", sub: "Shoes", img: "https://i.pinimg.com/1200x/a9/c8/5f/a9c85fea6da4512692ae9916c215c640.jpg" },
  { id: 8, name: "Genuine Leather Bifold Wallet", price: "₹2,400", category: "Accessories", sub: "Wallet", img: "https://i.pinimg.com/736x/a3/c5/18/a3c51812df4735ffe5e342edd9ab0f6f.jpg"},
  { id: 9, name: "Tassel Suede Loafers", price: "₹7,200", category: "Accessories", sub: "Shoes", img: "https://i.pinimg.com/736x/9d/77/9e/9d779e1f97ec731b2a6d545fe24a5e11.jpg" },
];

const BestSellers = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#FFFEFA] min-h-screen pt-32 pb-24 font-sans">
      <div className="container mx-auto px-6 md:px-16">
        
        {/* HEADER */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-black tracking-tighter uppercase mb-4 text-black">The Best Sellers</h1>
          <p className="text-gray-400 tracking-[0.3em] text-[10px] uppercase font-bold italic">Curated Trends • Indian Roots</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* SIDE FILTER */}
          <aside className="lg:w-1/4 space-y-10">
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-widest border-b-2 border-black pb-4 mb-6">Filter By</h4>
              <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-gray-500 cursor-pointer">
                <li className="hover:text-black transition flex justify-between items-center group">
                  Men <span className="text-[9px] bg-gray-100 px-2 py-1 rounded group-hover:bg-black group-hover:text-white transition">42</span>
                </li>
                <li className="hover:text-black transition flex justify-between items-center group">
                  Women <span className="text-[9px] bg-gray-100 px-2 py-1 rounded group-hover:bg-black group-hover:text-white transition">38</span>
                </li>
                <li className="hover:text-black transition flex justify-between items-center group">
                  Accessories <span className="text-[9px] bg-gray-100 px-2 py-1 rounded group-hover:bg-black group-hover:text-white transition">15</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <h4 className="text-[11px] font-black uppercase tracking-widest mb-4">Sort By</h4>
              <select className="w-full bg-transparent border-2 border-gray-100 p-3 text-[10px] font-bold uppercase tracking-widest outline-none focus:border-black transition">
                <option>Featured</option>
                <option>New Arrivals</option>
                <option>Price: Low to High</option>
              </select>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
              {PRODUCTS.map((item) => (
                <div key={item.id} className="group relative cursor-pointer">
                  {/* Image with Zoom Only */}
                  <div className="relative overflow-hidden aspect-[3/4] bg-gray-50">
                    <img 
                      src={item.img} 
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" 
                      alt={item.name} 
                    />
                    
                    {/* Add to Bag sliding button */}
                    <button className="absolute bottom-0 w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all translate-y-full group-hover:translate-y-0 duration-500">
                      Add to Bag
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="mt-6 text-center">
                    <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-1">{item.sub}</p>
                    <h3 className="text-[11px] font-black uppercase tracking-widest mb-2 text-black group-hover:text-gray-600 transition-colors">
                      <Link to={`/product/${item.id}`}>{item.name}</Link>
                    </h3>
                    <p className="text-sm font-black text-black">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-24 text-center border-t border-gray-100 pt-16">
              <button className="bg-white border-2 border-black px-14 py-5 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-300">
                Show More
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BestSellers;