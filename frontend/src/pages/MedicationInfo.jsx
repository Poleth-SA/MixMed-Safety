import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { Button } from '../components/ui/button';
import { parseMedicationCSV } from '../utils/csvParser';
import { Search, PlusCircle } from 'lucide-react';

const MedicationInfo = () => {
  const [medication, setMedication] = useState('');
  const [purpose, setPurpose] = useState('');
  const [allMedications, setAllMedications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchMedications = async () => {
      const data = await parseMedicationCSV();
      setAllMedications(data);
    };
    fetchMedications();
  }, []);

  const addMedication = (med) => {
    const foundMedication = allMedications.find(
      (m) => m.name.toLowerCase() === med.toLowerCase()
    );
    if (foundMedication) {
      setMedication(foundMedication.name);
      setPurpose(foundMedication.purpose);
      setNoResults(false);
    } else {
      setMedication('');
      setPurpose('');
      setNoResults(true);
    }
  };

  const addRandomMedication = () => {
    if (allMedications.length > 0) {
      const randomIndex = Math.floor(Math.random() * allMedications.length);
      const randomMed = allMedications[randomIndex];
      addMedication(randomMed.name);
    }
  };

  const handleSearch = () => {
    addMedication(searchTerm);
  };

  return (
    <div className="min-h-screen bg-custom-100 py-12 px-4 sm:px-6 lg:px-8">
      <nav className="bg-white shadow-md rounded-lg mb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-custom-600 hover:text-custom-800 hover:border-custom-300">
                Home
              </Link>
              <Link to="/medication-info" className="inline-flex items-center px-1 pt-1 border-b-2 border-custom-500 text-sm font-medium text-custom-900">
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
        <h1 className="text-5xl font-bold text-center text-custom-900 mb-8">
          Medication Purpose
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-custom-800">
            Check medication purpose:
          </h2>
          <div className="flex items-center mb-4">
            <div className="relative flex-grow mr-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g., Ibuprofen, Paracetamol..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Button onClick={handleSearch} className="bg-custom-500 text-white hover:bg-custom-600 transition-colors duration-200">
              Search Medication
            </Button>
          </div>
          <Button onClick={addRandomMedication} variant="outline" className="w-full bg-custom-100 text-custom-700 hover:bg-custom-200 transition-colors duration-200">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Random Medication
          </Button>
          
          {noResults ? (
            <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              Sorry, we couldn't find that medication. Please try another name.
            </div>
          ) : medication && (
            <div className="mt-6 p-4 bg-custom-50 border border-custom-200 rounded-md shadow">
              <h3 className="text-lg font-semibold text-custom-800 mb-2">Medication Information:</h3>
              <p><strong>Drug Name:</strong> {medication}</p>
              <p><strong>Purpose:</strong> {purpose}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicationInfo;
