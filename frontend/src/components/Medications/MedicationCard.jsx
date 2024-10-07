import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
