import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
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
              <Link to="/how-it-works" className="inline-flex items-center px-1 pt-1 border-b-2 border-custom-500 text-sm font-medium text-custom-900">
                How It Works
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
          How It Works
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-custom-700 mb-4 leading-relaxed">
            Mixmed Safety uses a comprehensive database of medications and their interactions to provide you with accurate information about potential risks and side effects. Our advanced algorithms analyze complex drug interactions to ensure you receive the most relevant and up-to-date information.
          </p>
          <p className="text-custom-700 leading-relaxed">
            Simply enter the names of the medications you're taking or interested in, and our system will analyze potential interactions and provide detailed information about each medication's purpose. Our user-friendly interface makes it easy to understand the results and make informed decisions about your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;