import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-custom-100 py-12 px-4 sm:px-6 lg:px-8">
      <nav className="bg-white shadow-md rounded-lg mb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-custom-600 hover:text-custom-800 hover:border-custom-300">
                Home
              </Link>
              <Link to="/purpose" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-custom-600 hover:text-custom-800 hover:border-custom-300">
                Medication Purpose
              </Link>
              <Link to="/interaction" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-custom-600 hover:text-custom-800 hover:border-custom-300">
                Medication Interaction
              </Link>
              <Link to="/explanation" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-custom-600 hover:text-custom-800 hover:border-custom-300">
                Explanation
              </Link>
              <Link to="/about" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-custom-600 hover:text-custom-800 hover:border-custom-300">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-custom-900 mb-8">
          Contact Us
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-custom-700 text-center">
            This is a placeholder for the Contact page. Add your contact information or form here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;