import React from 'react';

function MedicationList({ medications, removeMedication }) {
  return (
    <ul>
      {medications.map((medication, index) => (
        <li key={index}>
          {medication}
          <button onClick={() => removeMedication(medication)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default MedicationList;