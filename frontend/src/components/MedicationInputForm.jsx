import { Button } from './ui/button';
import { PlusCircle, X } from 'lucide-react';
import { useToast } from './ui/use-toast';

export const MedicationInputForm = ({ 
  currentMedication, 
  setCurrentMedication, 
  medications, 
  addMedication, 
  removeMedication 
}) => {
  return (
    <div>
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
    </div>
  );
};