import React, { useState } from 'react';
import MedicationInput from './components/MedicationInput';
import MedicationList from './components/MedicationList';
import InteractionResults from './components/InteractionResults';
import './App.css';

function App() {
  const [medications, setMedications] = useState([]);
  const [interactions, setInteractions] = useState(null);

  const addMedication = (medication) => {
    if (!medications.includes(medication)) {
      setMedications([...medications, medication]);
    }
  };

  const removeMedication = (medication) => {
    setMedications(medications.filter(med => med !== medication));
  };

  const clearMedications = () => {
    setMedications([]);
    setInteractions(null);
  };

  const loadExamples = () => {
    // This is a placeholder. In a real app, you'd probably fetch these from an API
    const examples = ['Aspirin', 'Ibuprofen', 'Acetaminophen', 'Lisinopril', 'Metformin'];
    setMedications(examples);
  };

  const getInteractions = () => {
    // This is a placeholder. In a real app, you'd make an API call here
    setInteractions("Placeholder interaction information");
  };

  return (
    <div className="App">
      <h1>Mixmed Safety</h1>
      <MedicationInput addMedication={addMedication} />
      <MedicationList 
        medications={medications} 
        removeMedication={removeMedication} 
      />
      <div className="controls">
        <button onClick={clearMedications}>Clear</button>
        <button onClick={loadExamples}>Load Examples</button>
        <button onClick={getInteractions}>Get Interactions</button>
      </div>
      <InteractionResults interactions={interactions} />
    </div>
  );
}

export default App;