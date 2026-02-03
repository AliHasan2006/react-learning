import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Sample products for the bottom section
const SUGGESTED_PRODUCTS = [
  { id: 1, name: "Maharaja Silk Sherwani", price: "₹85,000", img: "https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg" },
  { id: 2, name: "Royal Zari Stole", price: "₹12,500", img: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg" },
  { id: 3, name: "Velvet Heritage Juttis", price: "₹8,990", img: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg" },
];

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFFEFA] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        
        {/* --- CENTERED HEADER --- */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h4 className="text-sm uppercase tracking-[0.5em] text-[#8B0000] font-bold mb-6 italic">Connect With Us</h4>
          <h1 className="text-6xl md:text-8xl font-serif italic text-[#1A1A1A] leading-tight">
            How Can We <br /> <span className="text-[#C5A059] not-italic underline underline-offset-[12px] decoration-1">Assist You?</span>
          </h1>
          <p className="mt-10 text-gray-500 font-light tracking-widest text-sm uppercase max-w-lg mx-auto leading-relaxed">
            Our concierge team is at your service for styling, sizing, or bespoke appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* --- LEFT SIDE: CONTACT INFO --- */}
          <div className="lg:col-span-4 space-y-16">
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#4A0404] mb-6 border-b border-orange-100 pb-2">Flagship Atelier</h3>
              <div className="space-y-4">
                <p className="text-gray-800 text-lg font-serif italic">The Arvani Estate</p>
                <p className="text-gray-500 text-sm tracking-widest leading-relaxed uppercase">
                  Level 2, Emporio Mall, <br />
                  Vasant Kunj, New Delhi, <br />
                  Delhi 110070
                </p>
              </div>
            </section>

            <section className="space-y-10">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#4A0404] mb-4">Direct Contact</h3>
                <p className="text-gray-600 text-sm tracking-widest">care@arvani.com</p>
                <p className="text-gray-600 text-sm tracking-widest mt-1">+91 1800-ARVANI-01</p>
              </div>
              <div className="bg-[#4A0404] p-8 text-white shadow-2xl">
                <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#C5A059]">Private Viewings</h4>
                <p className="text-sm font-light leading-relaxed italic mb-6">
                  Experience our collection in the comfort of your home.
                </p>
                <button className="text-[10px] font-bold tracking-[0.4em] uppercase border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors">
                  Request Visit
                </button>
              </div>
            </section>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-orange-50">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">Full Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-gray-200 py-4 outline-none text-sm tracking-widest focus:border-[#4A0404] transition-colors" placeholder="NAME" />
                  </div>
                  <div className="group">
                    <label className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-gray-200 py-4 outline-none text-sm tracking-widest focus:border-[#4A0404] transition-colors" placeholder="EMAIL" />
                  </div>
                </div>

                <div className="group">
                  <label className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">Inquiry Purpose</label>
                  <select className="w-full bg-transparent border-b border-gray-200 py-4 outline-none text-sm tracking-widest focus:border-[#4A0404] transition-colors appearance-none cursor-pointer">
                    <option>General Support</option>
                    <option>Bespoke Request</option>
                    <option>Wedding Gifting</option>
                    <option>Order Inquiries</option>
                  </select>
                </div>

                <div className="group">
                  <label className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">Your Message</label>
                  <textarea className="w-full bg-transparent border-b border-gray-200 py-4 outline-none text-sm tracking-widest focus:border-[#4A0404] transition-colors h-32 resize-none" placeholder="DESCRIBE YOUR REQUEST..."></textarea>
                </div>

                <button className="w-full bg-[#1A1A1A] text-white py-6 text-xs font-bold tracking-[0.5em] hover:bg-[#4A0404] transition-all duration-500 shadow-xl uppercase">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* --- SAMPLE PRODUCTS SECTION --- */}
        <section className="mt-40">
          <div className="flex justify-between items-end mb-12 border-b border-orange-100 pb-6">
            <div>
              <h2 className="text-4xl font-serif italic text-black">Curated for You</h2>
              <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mt-2">While you wait for our reply</p>
            </div>
            <Link to="/shop" className="text-xs font-bold tracking-[0.3em] text-[#C5A059] uppercase hover:text-[#4A0404]">View All</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {SUGGESTED_PRODUCTS.map(product => (
              <div key={product.id} className="group cursor-pointer">
                <div className="overflow-hidden aspect-[4/5] bg-gray-50 mb-6 shadow-md">
                  <img 
                    src={product.img} 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]" 
                    alt={product.name} 
                  />
                </div>
                <h3 className="text-sm font-bold tracking-widest uppercase mb-1">{product.name}</h3>
                <p className="text-[#8B0000] font-serif italic">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;