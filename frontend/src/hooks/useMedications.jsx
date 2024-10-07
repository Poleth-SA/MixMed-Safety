import { useState } from 'react';

export function useMedications() {
  const [medications, setMedications] = useState([]);
  const [currentMed, setCurrentMed] = useState('');
  const [error, setError] = useState('');

  const addMedication = (medication) => {
    if (!medication.trim()) {
      setError('Please enter a medication name');
      return;
    }
    
    if (medications.some(med => med.toLowerCase() === medication.toLowerCase())) {
      setError('This medication is already in the list');
      return;
    }

    setMedications([...medications, medication.trim()]);
    setCurrentMed('');
    setError('');
  };

  const removeMedication = (index) => {
    setMedications(medications.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setMedications([]);
    setError('');
  };

  return {
    medications,
    currentMed,
    setCurrentMed,
    error,
    addMedication,
    removeMedication,
    clearAll,
  };
}