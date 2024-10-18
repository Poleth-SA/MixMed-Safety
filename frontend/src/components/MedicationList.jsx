import React from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

export const MedicationList = ({ medications, onRemove }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {medications.map((med) => (
        <Button
          key={med.id}
          variant="outline"
          className="bg-white text-gray-700 hover:bg-gray-100"
          onClick={() => onRemove(med.id)}
        >
          {med.name}
          <X className="w-4 h-4 ml-2" />
        </Button>
      ))}
    </div>
  );
};