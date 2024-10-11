import React from 'react';
import { Button } from '@/components/ui/button';

const ActionButtons = ({ onLoadExamples, onClearAll }) => {
  return (
    <div className="mb-4">
      <Button onClick={onLoadExamples} className="mr-2">
        Load Examples
      </Button>
      <Button onClick={onClearAll} variant="outline">
        Clear All
      </Button>
    </div>
  );
};

export default ActionButtons;