import React from "react";
// import heroImage from "../assets/hero.jpg";

function Home() {
  return (
    <section className="p-6">
      <img
        src='https://images.unsplash.com/photo-1498050108023-c5249f4df085'
        alt="Hero"
        className="rounded-xl w-full max-h-[400px] object-cover shadow-md mb-6"
      />
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Welcome to Zennex</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        We provide expert solutions in web development, SEO, and digital marketing.
        Get ready to grow your business with Zennex.
      </p>
    </section>
  );
}

export default Home;
