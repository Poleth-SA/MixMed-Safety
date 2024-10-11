import React, { useState } from 'react';
import { TEST_MEDICATIONS } from './data/medications';
import { checkInteractions } from './utils/medicationUtils';
import MedicationInput from './components/MedicationInput';
import MedicationList from './components/MedicationList';
import InteractionsList from './components/InteractionsList';
import ActionButtons from './components/ActionButtons';

const App = () => {
  const [medications, setMedications] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleAddMedication = () => {
    const med = inputValue.toLowerCase().trim();
    
    if (!med) {
      setError('Please enter a medication name');
      return;
    }

    if (medications.includes(med)) {
      setError('This medication is already in your list');
      return;
    }

    if (TEST_MEDICATIONS[med]) {
      setMedications([...medications, med]);
      setInputValue('');
      setError('');
    } else {
      setError('Medication not found in our database');
    }
  };

  const handleRemoveMedication = (med) => {
    setMedications(medications.filter(m => m !== med));
  };

  const interactions = checkInteractions(medications, TEST_MEDICATIONS);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">MixMed Safely</h1>
        <p className="text-gray-600">Check your medications for interactions</p>
      </header>

      <MedicationInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddMedication={handleAddMedication}
        error={error}
      />

      <ActionButtons
        onLoadExamples={() => setMedications(Object.keys(TEST_MEDICATIONS))}
        onClearAll={() => setMedications([])}
      />

      {medications.length > 0 && (
        <>
          <MedicationList
            medications={medications}
            medicationData={TEST_MEDICATIONS}
            onRemove={handleRemoveMedication}
          />
          <InteractionsList interactions={interactions} />
        </>
      )}
    </div>
  );
};

export default App;