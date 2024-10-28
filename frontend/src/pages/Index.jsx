import React from 'react';
import { Link } from 'react-router-dom';
import { PillIcon, AlertTriangleIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-custom-100 py-12 px-4 sm:px-6 lg:px-8">
      <nav className="bg-white shadow-md rounded-lg mb-8 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              {['Home', 'Medication Info', 'Check Interactions', 'How It Works', 'About Us'].map((item, index) => (
                <Link
                  key={index}
                  to={index === 0 ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200
                    ${index === 0 
                      ? 'border-custom-500 text-custom-900' 
                      : 'border-transparent text-custom-600 hover:text-custom-800 hover:border-custom-300'}`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <div className="flex items-center justify-center mb-6">
            <PillIcon className="h-20 w-20 text-custom-500 mr-4" />
            <h1 className="text-5xl font-bold text-center text-custom-900">
              Mixmed Safety
            </h1>
          </div>
          <p className="text-xl text-center text-custom-700 mb-8 leading-relaxed">
            Your safety, simplified. Discover medication purposes and interactions effortlessly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Link to="/medication-info" className="block">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-custom-100 hover:bg-custom-200 transition-colors duration-200 p-6 rounded-lg shadow-md"
              >
                <PillIcon className="h-16 w-16 text-custom-500 mb-4 mx-auto" />
                <h2 className="text-2xl font-semibold text-center text-custom-800 mb-2">Medication Purpose</h2>
                <p className="text-center text-custom-600">Learn what each medication is used for.</p>
              </motion.div>
            </Link>
            <Link to="/check-interactions" className="block">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-custom-100 hover:bg-custom-200 transition-colors duration-200 p-6 rounded-lg shadow-md"
              >
                <AlertTriangleIcon className="h-16 w-16 text-custom-500 mb-4 mx-auto" />
                <h2 className="text-2xl font-semibold text-center text-custom-800 mb-2">Medication Interaction</h2>
                <p className="text-center text-custom-600">Check if two medications have adverse effects when combined.</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;