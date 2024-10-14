import React, { useState, useEffect } from 'react';

const MixmedSafety = () => {
  const [medications, setMedications] = useState([]);
  const [selectedMeds, setSelectedMeds] = useState([]);
  const [currentMed, setCurrentMed] = useState('');
  const [error, setError] = useState('');
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/medications')
      .then(response => response.json())
      .then(data => setMedications(data))
      .catch(error => console.error('Error fetching medications:', error));
  }, []);

  const handleInputChange = (e) => {
    setCurrentMed(e.target.value);
    setError('');
  };

  const handleAddMedication = () => {
    const medToAdd = medications.find(med => med.Drug_Name.toLowerCase() === currentMed.toLowerCase());
    if (!medToAdd) {
      setError('Medication not found in our database.');
      return;
    }
    if (selectedMeds.some(med => med.Drug_ID === medToAdd.Drug_ID)) {
      setError('This medication is already in the list.');
      return;
    }
    setSelectedMeds([...selectedMeds, medToAdd]);
    setCurrentMed('');
    updateInteractions([...selectedMeds, medToAdd]);
  };

  const handleRemoveMedication = (medId) => {
    const updatedMeds = selectedMeds.filter(med => med.Drug_ID !== medId);
    setSelectedMeds(updatedMeds);
    updateInteractions(updatedMeds);
  };

  const updateInteractions = (meds) => {
    // checking only for Interaction_A here
    fetch('http://localhost:5000/api/interactions/A')
      .then(response => response.json())
      .then(data => {
        const newInteractions = data.filter(interaction => 
          meds.some(med => med.Drug_ID === interaction.DrugA_ID) && 
          meds.some(med => med.Drug_ID === interaction.DrugB_ID)
        );
        setInteractions(newInteractions);
      })
      .catch(error => console.error('Error fetching interactions:', error));
  };

  return (
    <div className="mixmed-safety">
      <h1>Mixmed Safety</h1>
      <div className="input-section">
        <input
          type="text"
          value={currentMed}
          onChange={handleInputChange}
          placeholder="Enter medication name"
        />
        <button onClick={handleAddMedication}>Add Medication</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      <h2>Your Medications</h2>
      <ul className="medication-list">
        {selectedMeds.map((med) => (
          <li key={med.Drug_ID}>
            <strong>{med.Drug_Name}</strong>: {med.Description}
            <button onClick={() => handleRemoveMedication(med.Drug_ID)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Potential Interactions</h2>
      <ul className="interaction-list">
        {interactions.map((interaction, index) => (
          <li key={index}>
            <strong>{interaction.DrugA_Name}</strong> and <strong>{interaction.DrugB_Name}</strong>: 
            {interaction.Description} (Level: {interaction.Level})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MixmedSafety;