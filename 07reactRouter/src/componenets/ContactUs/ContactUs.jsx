import React from "react";
import ReactDOM from 'react-dom/client';
function ContactUs() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-4">Feel free to reach out for any inquiries.</p>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 p-2 rounded"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactUs;
