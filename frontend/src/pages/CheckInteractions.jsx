import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { InteractionResults } from '../components/InteractionResults';
import { useQuery } from '@tanstack/react-query';
import { fetchMedications, fetchInteractions } from '../utils/api';
import { Search, Trash2, ClipboardList } from 'lucide-react';
import { useToast } from '../components/ui/use-toast';
import { InteractionNav } from '../components/InteractionNav';
import { MedicationInputForm } from '../components/MedicationInputForm';

const CheckInteractions = () => {
  const [medications, setMedications] = useState([]);
  const [currentMedication, setCurrentMedication] = useState('');
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
    if (!currentMedication) {
      toast({
        title: "Error",
        description: "Please enter a medication name",
        variant: "destructive",
      });
      return;
    }

    if (medications.find(med => med.name.toLowerCase() === currentMedication.toLowerCase())) {
      toast({
        title: "Error",
        description: "This medication is already in the list",
        variant: "destructive",
      });
      return;
    }

    setMedications([...medications, { id: Date.now(), name: currentMedication }]);
    setCurrentMedication('');
  };

  const removeMedication = (id) => {
    setMedications(medications.filter(med => med.id !== id));
  };

  const clearMedications = () => {
    setMedications([]);
  };

  const loadExamples = () => {
    if (allMedications?.length > 0) {
      const randomMedications = allMedications
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(med => ({ id: Date.now() + Math.random(), name: med.Drug_Name }));
      setMedications(randomMedications);
    }
  };

  const getInteractions = () => {
    if (!interactionData) return [];

    const results = [];
    for (let i = 0; i < medications.length; i++) {
      for (let j = i + 1; j < medications.length; j++) {
        const interaction = interactionData.find(
          int => (int.DrugA_Name.toLowerCase() === medications[i].name.toLowerCase() && 
                 int.DrugB_Name.toLowerCase() === medications[j].name.toLowerCase()) ||
                (int.DrugA_Name.toLowerCase() === medications[j].name.toLowerCase() && 
                 int.DrugB_Name.toLowerCase() === medications[i].name.toLowerCase())
        );
        if (interaction) {
          results.push({
            pair: `${medications[i].name} + ${medications[j].name}`,
            description: interaction.Description,
            riskLevel: interaction.Level
          });
        }
      }
    }
    return results;
  };

  const interactionResults = getInteractions();

  const handleCheckInteractions = () => {
    if (medications.length < 2) {
      toast({
        title: "Error",
        description: "Please add at least two medications to check interactions",
        variant: "destructive",
      });
      return;
    }
    
    const results = getInteractions();
    if (results.length === 0) {
      toast({
        title: "Info",
        description: "No known interactions found between these medications",
      });
    }
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
              Get Interactions
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
        {interactionResults.length > 0 && <InteractionResults results={interactionResults} />}
        <div className="bg-white shadow-lg rounded-lg p-8 mt-6">
          <p className="text-sm text-custom-600">
            <strong>Note:</strong> The results of prescription checking are based on the current knowledge and some
            interactions that do exist may have not been identified. Information provided here is for
            reference and researches only, not any medical advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckInteractions;