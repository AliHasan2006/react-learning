import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-white min-h-[calc(100vh-64px-100px)] flex flex-col items-center justify-center p-4 sm:p-8">
      
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          Launch Your <span className="text-blue-600">React App</span> Faster
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          A modern, boilerplate-free starting point built with **React Router** and **Tailwind CSS**. Get started and focus on what matters: your code.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          
          <Link 
            to="/contact"
            className="px-8 py-3 text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Contact Our Team →
          </Link>
          
          <Link 
            to="/about"
            className="px-8 py-3 text-lg font-semibold rounded-lg text-blue-600 bg-white border border-blue-600 hover:bg-blue-50 transition duration-300"
          >
            Learn More
          </Link>
          
        </div>
      </div>
      
      {/* Simple Feature Showcase */}
      <div className="mt-16 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Development</h3>
              <p className="text-gray-600">Pre-configured routes and styles for quick iteration.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fully Responsive</h3>
              <p className="text-gray-600">Optimized for mobile, tablet, and desktop viewing.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Easy to Customize</h3>
              <p className="text-gray-600">Leverage Tailwind's utility-first approach.</p>
          </div>
      </div>

    </div>
  );
}

export default Home;