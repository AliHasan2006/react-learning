import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-10 px-6 md:px-16 border-t border-[#C5A059]/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* --- 1. BRAND IDENTITY --- */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif italic text-[#C5A059]">ARVANI</h2>
            <p className="text-gray-400 text-sm leading-relaxed font-light tracking-wide">
              Crafting a legacy of Indian heritage through modern luxury. Every piece is a tribute to the timeless artisans of Bharat.
            </p>
            <div className="flex space-x-6 pt-4">
              <a href="#" className="text-gray-400 hover:text-[#C5A059] transition-colors"><span className="text-xs tracking-widest uppercase">Instagram</span></a>
              <a href="#" className="text-gray-400 hover:text-[#C5A059] transition-colors"><span className="text-xs tracking-widest uppercase">Pinterest</span></a>
              <a href="#" className="text-gray-400 hover:text-[#C5A059] transition-colors"><span className="text-xs tracking-widest uppercase">LinkedIn</span></a>
            </div>
          </div>

          {/* --- 2. QUICK EXPLORATION --- */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.3em] mb-8 text-[#C5A059]">The Atelier</h4>
            <ul className="text-gray-400 text-xs space-y-4 tracking-[0.2em] uppercase font-medium">
              <li><Link to="/shop" className="hover:text-white hover:pl-2 transition-all">New Arrivals</Link></li>
              <li><Link to="/shop" className="hover:text-white hover:pl-2 transition-all">Heritage Collection</Link></li>
              <li><Link to="/custom" className="hover:text-white hover:pl-2 transition-all">Bespoke Tailoring</Link></li>
              <li><Link to="/about" className="hover:text-white hover:pl-2 transition-all">Our Legacy</Link></li>
              <li><Link to="/stores" className="hover:text-white hover:pl-2 transition-all">Store Locator</Link></li>
            </ul>
          </div>

          {/* --- 3. CUSTOMER CONCIERGE --- */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.3em] mb-8 text-[#C5A059]">Concierge</h4>
            <ul className="text-gray-400 text-xs space-y-4 tracking-[0.2em] uppercase font-medium">
              <li><Link to="/shipping" className="hover:text-white transition">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-white transition">Returns & Exchanges</Link></li>
              <li><Link to="/care" className="hover:text-white transition">Garment Care</Link></li>
              <li><Link to="/faq" className="hover:text-white transition">FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* --- 4. CONTACT & NEWSLETTER --- */}
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-[0.3em] mb-4 text-[#C5A059]">Contact Us</h4>
              <p className="text-gray-500 text-xs tracking-widest leading-loose">
                Royal Enclave, Plot 42, Sector 5<br />
                Gurugram, HR - 122002, India<br />
                care@arvani.com | +91 1800-ARVANI
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-4 text-white">Join the Royal Circle</h4>
              <div className="flex border-b border-gray-700 pb-2">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-transparent w-full outline-none text-xs tracking-widest placeholder:text-gray-600" 
                />
                <button className="text-xs font-bold text-[#C5A059] hover:text-white transition">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER BOTTOM --- */}
        <div className="border-t border-white/5 mt-10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-600 tracking-[0.3em] uppercase">
            © {currentYear} ARVANI LUXURY RETAIL PVT. LTD.
          </p>
          
          {/* Payment Icons Simulation */}
          <div className="flex items-center space-x-6 opacity-30 grayscale contrast-125">
             <span className="text-[10px] tracking-widest">VISA</span>
             <span className="text-[10px] tracking-widest">MASTERCARD</span>
             <span className="text-[10px] tracking-widest">AMEX</span>
             <span className="text-[10px] tracking-widest">UPI</span>
          </div>
          
          <p className="text-[10px] text-gray-600 tracking-[0.2em] uppercase">
            Designed in Bharat • Made for the World
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;