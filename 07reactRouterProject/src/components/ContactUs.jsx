import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150";

  return (
    <div className="max-w-6xl mx-auto p-6 lg:p-12 mt-8">
      
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Get In Touch ✉️
      </h1>

      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Contact Information Section */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg h-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
          <p className="text-gray-600 mb-6">
            We are always happy to answer any questions you may have. Please use the form or the details below to reach out.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13v-8"></path></svg>
              <div>
                <strong className="text-gray-800">Email Address</strong>
                <p className="text-blue-600 hover:underline">contact@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18M3 18h18"></path></svg>
              <div>
                <strong className="text-gray-800">Phone Number</strong>
                <p className="text-gray-600">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form Section */}
        <div className="p-8 bg-white rounded-xl shadow-lg border">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required 
                className={inputClasses}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                required 
                className={inputClasses}
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?" 
                required 
                className={inputClasses}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;