import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { InteractionResults } from '../components/InteractionResults';
import { useQuery } from '@tanstack/react-query';
import { fetchMedications, fetchInteractions } from '../utils/api';
import { Search, Trash2, ClipboardList } from 'lucide-react';
import { useToast } from '../components/ui/use-toast';
import { InteractionNav } from '../components/InteractionNav';
import { MedicationInputForm } from '../components/MedicationInputForm';
import { findInteractions } from '../utils/interactionUtils';

const CheckInteractions = () => {
  const [medications, setMedications] = useState([]);
  const [currentMedication, setCurrentMedication] = useState('');
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const { data: allMedications } = useQuery({
    queryKey: ['medications'],
    queryFn: fetchMedications,
  });

  const { data: interactionData } = useQuery({
    queryKey: ['interactions'],
    queryFn: fetchInteractions,
  });

  const addMedication = () => {
    if (!currentMedication.trim()) {
      toast({
        title: "Error",
        description: "Please enter a medication name",
        variant: "destructive",
      });
      return;
    }

    const isDuplicate = medications.some(
      med => med.name.toLowerCase() === currentMedication.toLowerCase().trim()
    );

    if (isDuplicate) {
      toast({
        title: "Already Added",
        description: "This medication is already in your list",
        variant: "destructive",
      });
      return;
    }

    const newMedication = {
      id: Date.now(),
      name: currentMedication.trim()
    };

    setMedications(prev => [...prev, newMedication]);
    setCurrentMedication('');
    
    toast({
      title: "Success",
      description: "Medication added to list",
    });
  };

  const handleCheckInteractions = () => {
    if (medications.length < 2) {
      toast({
        title: "Error",
        description: "Please add at least two medications",
        variant: "destructive",
      });
      return;
    }

    if (!allMedications || !interactionData) {
      toast({
        title: "Error",
        description: "Unable to check interactions at this time",
        variant: "destructive",
      });
      return;
    }

    console.log('Medications to check:', medications);
    console.log('Available interaction data:', interactionData);

    const results = findInteractions(medications, interactionData);
    
    if (results.length === 0) {
      toast({
        title: "Info",
        description: "No known interactions found in our database",
      });
    }
    setShowResults(true);
  };

  const clearMedications = () => {
    setMedications([]);
    setShowResults(false);
  };

  const loadExamples = () => {
    if (!interactionData || !Array.isArray(interactionData)) {
      toast({
        title: "Error",
        description: "Unable to load example medications",
        variant: "destructive",
      });
      return;
    }

    const uniqueDrugNames = [...new Set(interactionData.map(item => item.DrugB_Name))];
    
    const randomDrugs = uniqueDrugNames
      .sort(() => Math.random() - 0.5)
      .slice(0, 5)
      .map(name => ({
        id: Date.now() + Math.random(),
        name: name
      }));

    setMedications(randomDrugs);
    setShowResults(false);
    
    toast({
      title: "Success",
      description: "Loaded 5 random medications",
    });
  };

  const removeMedication = (id) => {
    setMedications(prev => prev.filter(med => med.id !== id));
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-custom-100 py-12 px-4 sm:px-6 lg:px-8">
      <InteractionNav />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-custom-900 mb-8">
          Interaction Checker
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <MedicationInputForm
            currentMedication={currentMedication}
            setCurrentMedication={setCurrentMedication}
            medications={medications}
            addMedication={addMedication}
            removeMedication={removeMedication}
          />
          <div className="flex justify-between mt-6">
            <Button 
              onClick={handleCheckInteractions}
              className="bg-custom-500 text-white hover:bg-custom-600 transition-colors duration-200"
            >
              <Search className="mr-2 h-4 w-4" />
              Check Interactions
            </Button>
            <Button 
              variant="outline" 
              className="border-custom-500 text-custom-500 hover:bg-custom-50" 
              onClick={clearMedications}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear
            </Button>
            <Button 
              variant="outline" 
              className="border-custom-500 text-custom-500 hover:bg-custom-50" 
              onClick={loadExamples}
            >
              <ClipboardList className="mr-2 h-4 w-4" />
              Load Examples
            </Button>
          </div>
        </div>
        {showResults && <InteractionResults results={findInteractions(medications, interactionData)} />}
        <div className="bg-white shadow-lg rounded-lg p-8 mt-6">
          <p className="text-sm text-custom-600">
            <strong>Note:</strong> The results are based on current knowledge and some
            interactions may not be identified. Information provided is for
            reference only, not medical advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckInteractions;