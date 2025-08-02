import React from "react"; // React library import kar rahe hain
import Converter from "./components/Converter"; // Converter component ko import kar rahe hain

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
      {/* Page ka full height background aur center align */}
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* White background card jisme converter hai */}

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          💱 Currency Converter
        </h1>

        <Converter /> {/* Main converter component yahan render ho raha hai */}
      </div>
    </div>
  );
}

export default App; // App component ko export kar rahe hain
