import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const InteractionsList = ({ interactions }) => {
  if (interactions.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Potential Interactions</h2>
      </CardHeader>
      <CardContent>
        {interactions.map((interaction, index) => (
          <Alert key={index} className="mb-2 last:mb-0">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{interaction}</AlertDescription>
          </Alert>
        ))}
      </CardContent>
    </Card>
  );
};

export default InteractionsList;