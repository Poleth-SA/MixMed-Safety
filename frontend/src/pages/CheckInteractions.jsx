import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { InteractionResults } from '../components/InteractionResults';
import { parseMedicationCSV, parseInteractionCSV } from '../utils/csvParser';
import { Search, Trash2, ClipboardList, PlusCircle, X } from 'lucide-react';

const CheckInteractions = () => {
  const [medications, setMedications] = useState([]);
  const [interactionResults, setInteractionResults] = useState(null);
  const [allMedications, setAllMedications] = useState([]);
  const [interactionData, setInteractionData] = useState([]);
  const [currentMedication, setCurrentMedication] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const medicationData = await parseMedicationCSV();
      setAllMedications(medicationData);
      const interactionData = await parseInteractionCSV();
      setInteractionData(interactionData);
    };
    fetchData();
  }, []);

  const addMedication = () => {
    if (currentMedication && !medications.find(med => med.name === currentMedication)) {
      setMedications([...medications, { id: Date.now(), name: currentMedication }]);
      setCurrentMedication('');
    }
  };

  const removeMedication = (id) => {
    setMedications(medications.filter(med => med.id !== id));
  };

  const clearMedications = () => {
    setMedications([]);
    setInteractionResults(null);
  };

  const loadExamples = () => {
    const exampleMeds = ['Ibuprofen', 'Aspirin', 'Paracetamol', 'Warfarin', 'Omeprazole'];
    const randomMedications = exampleMeds
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(med => ({ id: Date.now() + Math.random(), name: med }));
    setMedications(randomMedications);
  };

  const getInteractions = () => {
    const results = [];
    for (let i = 0; i < medications.length; i++) {
      for (let j = i + 1; j < medications.length; j++) {
        const interaction = interactionData.find(
          int => (int.drug1 === medications[i].name && int.drug2 === medications[j].name) ||
                 (int.drug1 === medications[j].name && int.drug2 === medications[i].name)
        );
        if (interaction) {
          results.push({
            pair: `${medications[i].name} + ${medications[j].name}`,
            description: interaction.interaction,
            riskLevel: interaction.severity
          });
        }
      }
    }
    setInteractionResults(results);
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
              <Link to="/medication-info" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-custom-600 hover:text-custom-800 hover:border-custom-300">
                Medication Info
              </Link>
              <Link to="/check-interactions" className="inline-flex items-center px-1 pt-1 border-b-2 border-custom-500 text-sm font-medium text-custom-900">
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
          Interaction Checker
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-custom-800">
            Check for potential risks of drug co-administrations:
          </h2>
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={currentMedication}
              onChange={(e) => setCurrentMedication(e.target.value)}
              placeholder="Enter a medication name"
              className="flex-grow mr-2 p-2 border rounded"
            />
            <Button onClick={addMedication} className="bg-custom-500 text-white hover:bg-custom-600 transition-colors duration-200">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Medication
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {medications.map((med) => (
              <Button
                key={med.id}
                variant="outline"
                className="bg-white text-gray-700 hover:bg-gray-100"
                onClick={() => removeMedication(med.id)}
              >
                {med.name}
                <X className="w-4 h-4 ml-2" />
              </Button>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <Button onClick={getInteractions} className="bg-custom-500 text-white hover:bg-custom-600 transition-colors duration-200">
              <Search className="mr-2 h-4 w-4" />
              Get Interactions
            </Button>
            <Button variant="outline" className="border-custom-500 text-custom-500 hover:bg-custom-50" onClick={clearMedications}>
              <Trash2 className="mr-2 h-4 w-4" />
              Clear
            </Button>
            <Button variant="outline" className="border-custom-500 text-custom-500 hover:bg-custom-50" onClick={loadExamples}>
              <ClipboardList className="mr-2 h-4 w-4" />
              Load Examples
            </Button>
          </div>
        </div>
        {interactionResults && <InteractionResults results={interactionResults} />}
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
