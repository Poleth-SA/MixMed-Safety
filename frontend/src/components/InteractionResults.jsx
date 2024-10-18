import React from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

const getRiskIcon = (riskLevel) => {
  switch (riskLevel.toLowerCase()) {
    case 'high':
      return <AlertTriangle className="text-red-500" />;
    case 'moderate':
      return <AlertCircle className="text-yellow-500" />;
    default:
      return <Info className="text-green-500" />;
  }
};

export const InteractionResults = ({ results }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Interaction Results</h2>
      {results.map((result, index) => (
        <div key={index} className="mb-4 p-4 border rounded-lg">
          <div className="flex items-center mb-2">
            {getRiskIcon(result.riskLevel)}
            <h3 className="text-lg font-semibold ml-2">{result.pair}</h3>
          </div>
          <p className="text-gray-600 mb-2">
            <strong>Risk Level:</strong> {result.riskLevel}
          </p>
          <p className="text-gray-700">{result.description}</p>
        </div>
      ))}
    </div>
  );
};