import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Production Data Object
const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Mode Royal Blazers",
    price: "₹2,499",
    img: "https://i.pinimg.com/1200x/f2/1b/0f/f21b0f2e07dbbf103ca1b26ff67cb64e.jpg",
    category: "Formal Wear",
  },
  {
    id: 2,
    name: "Women Long Blazers",
    price: "₹3,500",
    img: "https://i.pinimg.com/736x/f0/b4/b5/f0b4b5c4c25165ae65b962a69362bc9b.jpg",
    category: "Ethnic",
  },
  {
    id: 3,
    name: "Hand-Burnished Loafers",
    price: "₹14,990",
    img: "https://i.pinimg.com/736x/9d/77/9e/9d779e1f97ec731b2a6d545fe24a5e11.jpg",
    category: "Footwear",
  },
  {
    id: 4,
    name: "Signature Zari Work Tote",
    price: "₹26,500",
    img: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    category: "Accessories",
  },
];

// Reusable Service Card Component
const ServiceCard = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6 group">
    <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 cursor-default">
      {icon}
    </div>
    <h4 className="text-sm font-bold uppercase tracking-[0.3em] mb-4 text-[#1A1A1A]">
      {title}
    </h4>
    <p className="text-sm text-gray-500 leading-relaxed font-light max-w-[250px]">
      {desc}
    </p>
  </div>
);

const Home = () => {
  // Production Tip: Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="antialiased overflow-x-hidden bg-[#FFFEFA]">
      {/* --- 1. HERO SECTION (LCP Optimized) --- */}
      <section className="relative min-h-screen flex items-center bg-[#FDFBF7] px-6 md:px-16 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20">
          <div className="z-10 order-2 lg:order-1">
            <span className="inline-block text-sm uppercase tracking-[0.5em] text-[#8B0000] mb-8 font-semibold">
              The Winter Collection • 2026
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif mb-8 leading-[0.85] text-[#1A1A1A] italic">
              Royal <br />
              <span className="not-italic text-[#C5A059]">Roots</span>
            </h1>
            <p className="text-[#333] max-w-lg mb-12 text-lg md:text-xl tracking-wide leading-relaxed font-light italic">
              India’s freshest fashion edit. Curating bold trends for the modern
              trailblazer.<b>Homegrown. High-fashion</b> with the sharp
              precision of <b>Unapologetically you. 🇮🇳</b>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/shop"
                className="text-center bg-[#4A0404] text-white px-14 py-6 text-xs font-bold tracking-[0.4em] hover:bg-[#C5A059] transition-all duration-700 shadow-[0_20px_50px_rgba(74,4,4,0.3)] uppercase"
              >
                Explore The Atelier
              </Link>
              <Link
                to="/about"
                className="text-center border border-[#4A0404] text-[#4A0404] px-14 py-6 text-xs font-bold tracking-[0.4em] hover:bg-[#4A0404] hover:text-white transition-all duration-700 uppercase"
              >
                Our Legacy
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 border-[1px] border-[#C5A059] translate-x-6 translate-y-6 rounded-t-[200px] -z-10"></div>
            <div className="overflow-hidden rounded-t-[200px] shadow-2xl">
              <img
                src="https://i.pinimg.com/736x/42/a1/b0/42a1b0a88ac6a12e12c4bba51a6a2ab7.jpg"
                className="w-full h-[500px] md:h-[700px] object-cover hover:scale-105 transition-transform duration-[2s]"
                alt="Arvani Royal Collection 2026"
                loading="eager"
              />
            </div>
            {/* Visual CTA Badge */}
            <div className="absolute -bottom-10 -left-6 md:-left-12 bg-[#4A0404] p-8 md:p-12 shadow-2xl text-center border-b-4 border-[#C5A059]">
              <span className="block text-4xl md:text-6xl font-bold text-white leading-none">
                30%
              </span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold mt-2">
                Inaugural Offer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. THE ETHOS SECTION --- */}
      <section className="py-32 px-6 md:px-16 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="overflow-hidden shadow-3xl">
              <img
                src="https://i.pinimg.com/1200x/f6/73/7d/f6737d49a2571e063cd811812c3a922c.jpg"
                alt="Fabric Quality"
                className="w-full h-[600px] object-cover transition-all duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="absolute -top-12 -right-12 hidden xl:block w-72 h-96 border-[12px] border-white shadow-2xl overflow-hidden ring-1 ring-gray-100">
              <img
                src="https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg"
                className="w-full h-full object-cover"
                alt="Artisan Craftsmanship"
              />
            </div>
          </div>
          <div className="space-y-10">
            <h4 className="text-sm uppercase tracking-[0.5em] text-[#8B0000] font-bold">
              The Arvani Philosophy
            </h4>
            <h2 className="text-5xl md:text-7xl font-serif text-black leading-tight italic">
              Excellence In <br /> Every Stitch
            </h2>
            <p className="text-gray-700 leading-relaxed text-xl tracking-wide font-light">
              Born in the heart of Bharat, VNRD is a movement for those who
              refuse to blend in. We are an Indian startup on a mission to bring
              high-street global trends to the 
              <b>local doorstep without
              compromising</b> on <b>quality or conscience.</b>From
              oversized streetwear to sleek evening silhouettes, our collections
              are designed for the men and women of tomorrow. We don't just
              follow trends—we build the wardrobe of a generation that is bold,
              expressive, and always on the move.
            </p>
            <div className="flex gap-12 pt-8 border-t border-orange-100">
              <div>
                <h5 className="font-bold text-xs uppercase tracking-widest mb-3 text-[#4A0404]">
                  Certification
                </h5>
                <p className="text-sm text-gray-500 font-serif italic">
                  100% Organic Origin
                </p>
              </div>
              <div>
                <h5 className="font-bold text-xs uppercase tracking-widest mb-3 text-[#4A0404]">
                  Aftercare
                </h5>
                <p className="text-sm text-gray-500 font-serif italic">
                  Lifetime Repairs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. HIGH-CONVERSION CTA --- */}
      <section className="relative bg-[#4A0404] py-32 px-6 text-center overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/royal-lineage.png')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.6em] uppercase text-[#C5A059] mb-10 font-bold">
            Privilege Club Invitation
          </p>
          <h2 className="text-5xl md:text-7xl font-serif mb-14 text-white italic">
            Reserved For The Few.
          </h2>
          <button className="bg-[#C5A059] text-[#4A0404] px-20 py-7 text-xs font-black tracking-[0.5em] hover:bg-white hover:scale-105 transition-all duration-500 shadow-2xl uppercase">
            Apply For Membership
          </button>
        </div>
      </section>

      {/* --- 4. PRODUCT GRID --- */}
      <section className="py-32 px-6 md:px-16 lg:px-24 bg-[#FFFEFA]">
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-6xl font-serif italic text-black mb-4">
              The Essentials
            </h2>
            <div className="h-[4px] w-32 bg-[#4A0404]"></div>
          </div>
          <Link
            to="/shop"
            className="text-xs font-bold tracking-[0.4em] border-b-2 border-[#4A0404] pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors uppercase"
          >
            Browse Catalogue
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURED_PRODUCTS.map((product) => (
            <article key={product.id} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[3/4] mb-8 relative shadow-xl bg-gray-50">
                <img
                  src={product.img}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  alt={product.name}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                  <button className="bg-white text-[#1A1A1A] text-[10px] font-bold px-10 py-4 tracking-widest uppercase shadow-2xl hover:bg-[#C5A059] hover:text-white transition-colors">
                    Quick Add to Bag
                  </button>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                {product.category}
              </p>
              <h3 className="text-base font-bold tracking-[0.1em] uppercase mb-2 text-black">
                {product.name}
              </h3>
              <p className="text-[#8B0000] font-serif italic text-xl">
                {product.price}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* --- 5. TRUST SIGNALS --- */}
      <section className="py-24 border-y border-orange-50 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <ServiceCard
            icon="100 %"
            title="Secure Gateway"
            desc="Encrypted transactions protected by world-class security protocols."
          />
          <ServiceCard
           icon="24/7"
            title="Royal Concierge"
            desc="Speak with our master tailors for bespoke sizing and styling advice."
          />
          <ServiceCard
          icon="India"
            title="Best Shipping"
            desc="Insured white-glove delivery in India."
          />
        </div>
      </section>

      {/* --- 6. NEWSLETTER (Production Essential) --- */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto border-2 border-orange-50 p-12 md:p-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 text-2xl">
            🪷
          </div>
          <h2 className="text-4xl font-serif italic mb-6">
            Stay In The Circle
          </h2>
          <p className="text-gray-500 mb-10 text-sm tracking-widest font-light uppercase">
            Sign up for early access to our limited drops.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your Boutique Email"
              className="flex-grow border-b-2 border-gray-200 py-4 focus:border-[#4A0404] outline-none text-center font-light tracking-widest"
            />
            <button className="bg-[#1A1A1A] text-white px-10 py-4 text-[10px] font-bold tracking-[0.3em] hover:bg-[#4A0404] transition-colors uppercase">
              Join Now
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;
