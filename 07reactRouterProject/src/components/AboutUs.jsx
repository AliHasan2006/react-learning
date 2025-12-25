import React from 'react';

function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white shadow-xl rounded-lg mt-8">
      
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-2 pb-2">
        About Our Mission
      </h1>
      
      {/* Introduction Section */}
      <section className="mb-8">
        <p className="text-lg text-gray-600 mb-4">
          We are a passionate team dedicated to building **innovative solutions** that simplify everyday life. Established in 2023, our mission has always been to bridge the gap between complex technology and a user-friendly experience.
        </p>
        <p className="text-lg text-gray-600">
          Our core expertise lies in modern web development, leveraging frameworks like <span className="text-blue-600 font-semibold">React</span> and <span className="text-teal-600 font-semibold">Tailwind CSS</span> to deliver fast, scalable, and beautifully designed applications.
        </p>
      </section>

      {/* Mission & Vision (Grid Layout) */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        
        {/* Mission Card */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">Our Mission</h2>
          <p className="text-gray-700">
            To empower individuals and businesses globally by providing accessible, high-quality, and cutting-edge digital products that drive efficiency and growth.
          </p>
        </div>
        
        {/* Vision Card */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-green-700 mb-3">Our Vision</h2>
          <p className="text-gray-700">
            To be the leading name in sustainable software development, recognized for our commitment to excellence, ethical practice, and ultimate user satisfaction.
          </p>
        </div>

      </div>

      {/* Conclusion */}
      <section className="mt-10 pt-6 border-t">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Join Our Journey</h3>
        <p className="text-gray-600">
          If you are passionate about technology and innovation, we encourage you to check out our contact page to discuss potential collaborations or career opportunities!
        </p>
      </section>

    </div>
  );
}

export default AboutUs;