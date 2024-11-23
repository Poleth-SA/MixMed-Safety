import { Button } from './ui/button';
import { Input } from './ui/input';
import { PlusCircle } from 'lucide-react';
import { MedicationList } from './MedicationList';

export const MedicationInputForm = ({ 
  currentMedication, 
  setCurrentMedication, 
  medications, 
  addMedication, 
  removeMedication 
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addMedication();
    }
  };

  const handleInputChange = (e) => {
    setCurrentMedication(e.target.value);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    addMedication();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-custom-800">
        Check for potential risks of drug co-administrations:
      </h2>
      <div className="flex items-center gap-2 mb-4">
        <Input
          type="text"
          value={currentMedication}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter a medication name"
          className="flex-grow"
        />
        <Button 
          onClick={handleAddClick}
          className="bg-custom-500 text-white hover:bg-custom-600 transition-colors duration-200"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Medication
        </Button>
      </div>
      <MedicationList 
        medications={medications} 
        onRemove={removeMedication} 
      />
    </div>
  );
};