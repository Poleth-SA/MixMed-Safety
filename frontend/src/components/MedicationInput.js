import React, { useState } from 'react';

function MedicationInput({ addMedication }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addMedication(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter medication name"
      />
      <button type="submit">Add Medication</button>
    </form>
  );
}

export default MedicationInput;