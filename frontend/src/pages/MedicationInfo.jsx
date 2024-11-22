import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Search, PlusCircle } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchMedicationInfo, fetchMedications } from '../utils/api';
import { useToast } from '../components/ui/use-toast';

const MedicationInfo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const { data: medications } = useQuery({
    queryKey: ['medications'],
    queryFn: fetchMedications,
  });

  const { data: medicationInfo, refetch: refetchMedicationInfo } = useQuery({
    queryKey: ['medicationInfo', searchTerm.toLowerCase().trim()],
    queryFn: () => fetchMedicationInfo(searchTerm.toLowerCase().trim()),
    enabled: false,
    retry: false,
  });

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      toast({
        title: "Error",
        description: "Please enter a medication name",
        variant: "destructive",
      });
      return;
    }

    try {
      const result = await refetchMedicationInfo();
      if (!result.data) {
        toast({
          title: "Not Found",
          description: "Medication not found. Please try again!",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch medication information. Please try again!",
        variant: "destructive",
      });
    }
  };

  const addRandomMedication = () => {
    if (medications?.length > 0) {
      const randomIndex = Math.floor(Math.random() * medications.length);
      const randomMed = medications[randomIndex];
      setSearchTerm(randomMed.Drug_Name);
      handleSearch();
    } else {
      toast({
        title: "Error",
        description: "No medications available to choose from",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-custom-100 py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
      <nav className="bg-white shadow-md rounded-lg mb-8 overflow-x-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-4 sm:space-x-8">
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
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-custom-900 mb-8">
          Medication Purpose
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-custom-800">
            Check medication purpose:
          </h2>
          <div className="flex flex-col sm:flex-row items-center mb-4">
            <div className="relative flex-grow w-full sm:w-auto mb-4 sm:mb-0 sm:mr-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g., Ibuprofen, Paracetamol..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-custom-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Button onClick={handleSearch} className="w-full sm:w-auto bg-custom-500 text-white hover:bg-custom-600 transition-colors duration-200">
              Search Medication
            </Button>
          </div>
          <Button onClick={addRandomMedication} variant="outline" className="w-full bg-custom-100 text-custom-700 hover:bg-custom-200 transition-colors duration-200">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Random Medication
          </Button>
          
          {medicationInfo && (
            <div className="mt-6 p-4 bg-custom-50 border border-custom-200 rounded-md shadow">
              <h3 className="text-lg font-semibold text-custom-800 mb-2">Medication Information:</h3>
              <p><strong>Drug Name:</strong> {medicationInfo.Drug_Name}</p>
              <p><strong>Description:</strong> {medicationInfo.Description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicationInfo;