import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const MedicationInput = ({ 
  inputValue, 
  setInputValue, 
  handleAddMedication, 
  error 
}) => {
  return (
    <div className="mb-6">
      <div className="flex gap-2">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter medication name"
          className="flex-1"
          onKeyPress={(e) => e.key === 'Enter' && handleAddMedication()}
        />
        <Button onClick={handleAddMedication}>Add</Button>
      </div>
      
      {error && (
        <Alert variant="destructive" className="mt-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default MedicationInput;