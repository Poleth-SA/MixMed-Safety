import React from 'react';
import { Plus } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function MedicationInput({ onAdd, error, currentMed, setCurrentMed, onClear }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(currentMed);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Medications</CardTitle>
        <CardDescription>
          Enter your medications to check for interactions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              value={currentMed}
              onChange={(e) => setCurrentMed(e.target.value)}
              placeholder="Enter medication name"
              className="flex-1"
            />
            <Button type="submit">
              <Plus className="w-4 h-4 mr-2" />
              Add
            </Button>
          </div>

          <div className="flex justify-end">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClear}
              className="text-red-500"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </div>
        </form>

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}

// src/components/medications/MedicationList.jsx
import { X } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function MedicationList({ medications, onRemove }) {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Your Medications</CardTitle>
        <CardDescription>
          {medications.length === 0 
            ? "No medications added yet"
            : `${medications.length} medication${medications.length === 1 ? '' : 's'} in your list`
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {medications.map((med, index) => (
            <MedicationCard
              key={index}
              medication={med}
              onRemove={() => onRemove(index)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// src/components/medications/MedicationCard.jsx
export function MedicationCard({ medication, onRemove }) {
  return (
    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
      <span className="font-medium">{medication}</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={onRemove}
        className="text-red-500 hover:text-red-700 hover:bg-red-50"
      >
        <X className="w-4 h-4" />
      </Button>
    </div>
  );
}