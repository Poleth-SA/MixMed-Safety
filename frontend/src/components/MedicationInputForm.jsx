import { Button } from './ui/button';
import { Input } from './ui/input';
import { PlusCircle } from 'lucide-react';
import { MedicationList } from './MedicationList';
import { useToast } from '../components/ui/use-toast';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "../components/ui/alert-dialog";
import { useState } from 'react';

export const MedicationInputForm = ({ 
  currentMedication, 
  setCurrentMedication, 
  medications, 
  addMedication, 
  removeMedication 
}) => {
  const { toast } = useToast();
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);

  const validateMedication = async (medicationName) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/validate-medication/${encodeURIComponent(medicationName)}`);
      const data = await response.json();
      return data.valid;
    } catch (error) {
      console.error('Error validating medication:', error);
      return false;
    }
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddMedication();
    }
  };

  const handleInputChange = (e) => {
    setCurrentMedication(e.target.value);
  };

  const handleAddMedication = async (e) => {
    if (e) e.preventDefault();
    
    if (!currentMedication.trim()) {
      toast({
        title: "Error",
        description: "Please enter a medication name",
        variant: "destructive",
      });
      return;
    }

    const isValid = await validateMedication(currentMedication);
    
    if (!isValid) {
      setIsErrorDialogOpen(true);
      return;
    }

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
          onClick={handleAddMedication}
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

      <AlertDialog open={isErrorDialogOpen} onOpenChange={setIsErrorDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Error: Medication Not Found</AlertDialogTitle>
            <AlertDialogDescription>
              The medication you provided is either misspelled or not present in the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>OK</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};