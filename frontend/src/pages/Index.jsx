import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { PillIcon, AlertTriangleIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-custom-100 py-12 px-4 sm:px-6 lg:px-8">
      <nav className="bg-white shadow-md rounded-lg mb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-custom-500 text-sm font-medium text-custom-900">
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
              <Link to="/about" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-custom-600 hover:text-custom-800 hover:border-custom-300">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <div className="flex items-center justify-center mb-6">
            <PillIcon className="h-16 w-16 text-custom-500 mr-4" />
            <h1 className="text-5xl font-bold text-center text-custom-900">
              Mixmed Safety
            </h1>
          </div>
          <p className="text-xl text-center text-custom-700 mb-8">
            Your safety, simplified. Discover medication purposes and interactions effortlessly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/purpose" className="block">
              <div className="bg-custom-100 hover:bg-custom-200 transition-colors duration-200 p-6 rounded-lg shadow-md">
                <PillIcon className="h-12 w-12 text-custom-500 mb-4 mx-auto" />
                <h2 className="text-2xl font-semibold text-center text-custom-800 mb-2">Medication Purpose</h2>
                <p className="text-center text-custom-600">Learn what each medication is used for.</p>
              </div>
            </Link>
            <Link to="/interaction" className="block">
              <div className="bg-custom-100 hover:bg-custom-200 transition-colors duration-200 p-6 rounded-lg shadow-md">
                <AlertTriangleIcon className="h-12 w-12 text-custom-500 mb-4 mx-auto" />
                <h2 className="text-2xl font-semibold text-center text-custom-800 mb-2">Medication Interaction</h2>
                <p className="text-center text-custom-600">Check if two medications have adverse effects when combined.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;