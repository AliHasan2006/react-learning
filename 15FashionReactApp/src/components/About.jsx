import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFFEFA] min-h-screen">
      {/* --- 1. IMMERSIVE HERO SECTION --- */}
      <div className="h-[70vh] relative flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4] scale-105 transition-transform duration-[10s] hover:scale-100" 
          alt="The Arvani Heritage" 
        />
        <div className="relative text-center px-6">
          <h4 className="text-sm uppercase tracking-[0.6em] text-[#C5A059] mb-6 font-bold">Est. 2012</h4>
          <h1 className="text-white text-6xl md:text-9xl font-serif italic">Our Heritage</h1>
          <div className="h-[1px] w-24 bg-[#C5A059] mx-auto mt-8"></div>
        </div>
      </div>

      {/* --- 2. THE PHILOSOPHY --- */}
      <section className="container mx-auto px-6 md:px-16 lg:px-24 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h4 className="text-sm uppercase tracking-[0.5em] text-[#8B0000] font-bold">The Arvani Soul</h4>
            <h2 className="text-5xl md:text-7xl font-serif italic text-black leading-tight">
              Purity in <br /> 
              <span className="text-[#C5A059] not-italic">Every Thread</span>
            </h2>
            <p className="text-[#333] text-xl font-light leading-relaxed italic border-l-4 border-[#C5A059] pl-6">
              "For us, a garment is not merely a product; it is a masterpiece of living art."
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Arvani was founded on a singular vision: to honor the legacy of ancient Indian hand-looms through the lens of modern global luxury. We meticulously source <b>Certified Mulberry Silk</b> and <b>Long-staple Giza Cotton</b>, ensuring that every fiber upholds our standard of uncompromising excellence.
            </p>
            
            <div className="grid grid-cols-2 gap-12 border-t border-orange-100 pt-12">
              <div className="space-y-2">
                <h5 className="text-4xl font-serif text-[#4A0404]">100%</h5>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Natural Fibers</p>
              </div>
              <div className="space-y-2">
                <h5 className="text-4xl font-serif text-[#4A0404]">5,000+</h5>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Artisan Hours</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg" 
              className="w-full h-[650px] object-cover shadow-[30px_30px_0px_#fdfbf7] border border-orange-50" 
              alt="Master Craftsmanship" 
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-2xl hidden md:block">
               <p className="text-[#4A0404] font-serif italic text-2xl">"Authenticity in <br/> every stitch."</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE ARTISANAL PROCESS --- */}
      <section className="bg-[#1A1A1A] text-white py-32">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h4 className="text-[#C5A059] text-xs uppercase tracking-[0.6em] mb-12 font-bold">The Journey of Creation</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <span className="text-4xl text-[#C5A059] font-serif">01.</span>
              <h3 className="text-xl font-serif italic">Ethical Sourcing</h3>
              <p className="text-gray-400 text-sm tracking-wide leading-relaxed font-light">
                We partner directly with master weavers across the Indian subcontinent to ensure fair trade and the preservation of heritage techniques.
              </p>
            </div>
            <div className="space-y-6">
              <span className="text-4xl text-[#C5A059] font-serif">02.</span>
              <h3 className="text-xl font-serif italic">Slow Craftsmanship</h3>
              <p className="text-gray-400 text-sm tracking-wide leading-relaxed font-light">
                Rejecting the haste of fast fashion, our signature silhouettes require over 48 hours of hand-guided precision to perfect.
              </p>
            </div>
            <div className="space-y-6">
              <span className="text-4xl text-[#C5A059] font-serif">03.</span>
              <h3 className="text-xl font-serif italic">Gold Standard Quality</h3>
              <p className="text-gray-400 text-sm tracking-wide leading-relaxed font-light">
                Each piece undergoes a rigorous 15-point inspection, ensuring that only the finest garments bear the Arvani crest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. CALL TO ACTION GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Contact CTA */}
        <section className="py-32 text-center bg-[#FDFBF7] border-r border-orange-50 px-6">
          <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-bold">Bespoke Inquiries</h4>
          <h2 className="text-4xl md:text-5xl font-serif italic mb-10 text-black">Consult Our Stylists</h2>
          <Link 
            to="/contact" 
            className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-14 py-5 text-xs font-bold tracking-[0.4em] inline-block hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 uppercase"
          >
            Contact Concierge
          </Link>
        </section>

        {/* Shop CTA */}
        <section className="py-32 text-center bg-[#4A0404] px-6">
          <h4 className="text-xs uppercase tracking-widest text-[#C5A059] mb-6 font-bold">The Collection</h4>
          <h2 className="text-4xl md:text-5xl font-serif italic mb-10 text-white">Own the Legacy</h2>
          <Link 
            to="/shop" 
            className="bg-[#C5A059] text-[#4A0404] px-14 py-5 text-xs font-bold tracking-[0.4em] inline-block hover:bg-white transition-all duration-500 uppercase shadow-2xl"
          >
            Shop The Atelier
          </Link>
        </section>
      </div>

      {/* --- 5. TRUST BANNER --- */}
      <div className="py-12 bg-white text-center">
         <p className="text-[10px] tracking-[0.8em] uppercase text-gray-300">Sustainable • Handcrafted • Timeless</p>
      </div>
    </div>
  );
};

export default About;