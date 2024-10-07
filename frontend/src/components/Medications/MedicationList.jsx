import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
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