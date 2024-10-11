import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const MedicationList = ({ medications, medicationData, onRemove }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <h2 className="text-xl font-semibold">Your Medications</h2>
      </CardHeader>
      <CardContent>
        {medications.map(med => (
          <div key={med} className="flex justify-between items-start p-2 border-b last:border-0">
            <div>
              <h3 className="font-medium capitalize">{med}</h3>
              <p className="text-sm text-gray-600">{medicationData[med].purpose}</p>
              <div className="text-sm text-gray-600 mt-1">
                <strong>Side Effects:</strong>
                <ul className="list-disc ml-5">
                  {medicationData[med].sideEffects.map(effect => (
                    <li key={effect}>{effect}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemove(med)}
            >
              <X className="w-4 w-4" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default MedicationList;