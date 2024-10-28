import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Search, Shield, Database } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-custom-100 py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
      <nav className="bg-white shadow-md rounded-lg mb-8 overflow-x-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-4 sm:space-x-8">
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
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-custom-900 mb-8">
          How It Works
        </h1>
        
        <div className="space-y-6">
          <section className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-custom-800 mb-4">Purpose</h2>
            <p className="text-custom-700 leading-relaxed">
              Mixmed Safety is intended to provide easy access to information related to interactions with medications. 
              It facilitates an understanding of potential risks for users who cannot obtain medical guidance immediately 
              and makes informed choices. Another additional use is that it provides short descriptions about the purpose of each medication to allow the user to understand the action of each drug and its purpose.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-custom-800 mb-4">Use of Mixmed Safety</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Search className="w-5 h-5 text-custom-500 mt-1" />
                <p className="text-custom-700">
                  <strong>Medication Search:</strong> One can search for any medication by name and description to get an overview of its typical uses.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-custom-500 mt-1" />
                <p className="text-custom-700">
                  <strong>Check Interactions:</strong> Search two medications to see known interactions; their severity is Major, Moderate, Minor, or Unknown.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-custom-800 mb-4">Interaction Categories</h2>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-md">
                <p className="font-semibold text-red-700">Major:</p>
                <p className="text-red-600">The interactions are life-threatening and/or require medical treatment or intervention to minimize or prevent severe adverse effects.</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-md">
                <p className="font-semibold text-yellow-700">Moderate:</p>
                <p className="text-yellow-600">The interactions may result in exacerbation of the disease of the patient and/or change in therapy.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-md">
                <p className="font-semibold text-green-700">Minor:</p>
                <p className="text-green-600">The interactions would lessen the clinical effects. The manifestations may include a rise in frequency or intensity of adverse effects, but usually they do not need changes in therapy.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-md">
                <p className="font-semibold text-gray-700">Unknown:</p>
                <p className="text-gray-600">The DDIs gathered from the article published in Sci Transl Med were lack of mechanism descriptions, and hence the severity classifications of these DDIs were annotated with 'Unknown'.</p>
              </div>
            </div>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-custom-800 mb-4">Data Sources and Reliability</h2>
            <div className="flex items-start space-x-3">
              <Database className="w-5 h-5 text-custom-500 mt-1" />
              <p className="text-custom-700">
                Mixmed Safety information is derived from valued medical sources including DRUGDEX and Sci Transl Med. 
                While we update our content to keep in step with current facts, the delivery of medical care is the 
                prerogative and responsibility of the health professional.
              </p>
            </div>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-custom-800 mb-4">Data Privacy</h2>
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-custom-500 mt-1" />
              <p className="text-custom-700">
                We value our user's privacy and do not solicit personal information in order to grant access to 
                medication interaction data.
              </p>
            </div>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-custom-800 mb-4">Disclaimer</h2>
            <div className="p-4 bg-yellow-50 rounded-md">
              <p className="text-yellow-700">
                Mixmed Safety is for educational uses only. It is not a substitute for professional medical advice. 
                If there's suspicion of a concern with medication interactions, then a healthcare provider should be consulted.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;