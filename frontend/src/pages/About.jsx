import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-custom-100 py-12 px-4 sm:px-6 lg:px-8">
      <nav className="bg-white shadow-md rounded-lg mb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-custom-600 hover:text-custom-800 hover:border-custom-300">
                Home
              </Link>
              <Link to="/medication-info" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-custom-600 hover:text-custom-800 hover:border-custom-300">
                Medication Info
              </Link>
              <Link to="/check-interactions" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-custom-600 hover:text-custom-800 hover:border-custom-300">
                Check Interactions
              </Link>
              <Link to="/how-it-works" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-custom-600 hover:text-custom-800 hover:border-custom-300">
                How It Works
              </Link>
              <Link to="/about" className="inline-flex items-center px-1 pt-1 border-b-2 border-custom-500 text-sm font-medium text-custom-900">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-custom-900 mb-8">
          About Us
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-custom-700 leading-relaxed">
            Mixmed Safety is dedicated to providing accurate and reliable information about medication interactions and purposes. Our mission is to help users make informed decisions about their health and medication use. With a team of experienced healthcare professionals and cutting-edge technology, we strive to offer the most up-to-date and comprehensive medication safety information available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;