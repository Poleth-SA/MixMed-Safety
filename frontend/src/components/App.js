import React, { useState } from 'react';

const MixmedSafety = () => {
  const [medications, setMedications] = useState([]);
  const [currentMed, setCurrentMed] = useState('');

  const handleInputChange = (e) => {
    setCurrentMed(e.target.value);
  };

  const handleAddMedication = () => {
    if (currentMed && !medications.includes(currentMed)) {
      setMedications([...medications, currentMed]);
      setCurrentMed('');
    }
  };

  const handleRemoveMedication = (med) => {
    setMedications(medications.filter(m => m !== med));
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
      <ul className="medication-list">
        {medications.map((med, index) => (
          <li key={index}>
            {med}
            <button onClick={() => handleRemoveMedication(med)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MixmedSafety;