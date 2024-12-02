import React from 'react';
import { AlertTriangle, AlertCircle, Info, HelpCircle } from 'lucide-react';

const getRiskIcon = (riskLevel) => {
  const riskLowerCase = (riskLevel || '').toLowerCase().trim();
  switch (riskLowerCase) {
    case 'major':
      return <AlertTriangle className="text-red-500 h-6 w-6" />;
    case 'moderate':
      return <AlertCircle className="text-yellow-500 h-6 w-6" />;
    case 'minor':
      return <Info className="text-green-500 h-6 w-6" />;
    default:
      return <HelpCircle className="text-gray-500 h-6 w-6" />;
  }
};

export const InteractionResults = ({ results }) => {
  const getRiskColor = (riskLevel) => {
    const riskLowerCase = (riskLevel || '').toLowerCase().trim();
    switch (riskLowerCase) {
      case 'major':
        return 'text-red-500 font-semibold';
      case 'moderate':
        return 'text-yellow-500 font-semibold';
      case 'minor':
        return 'text-green-500 font-semibold';
      default:
        return 'text-gray-500 font-semibold';
    }
  };

  const getRiskBorder = (riskLevel) => {
    const riskLowerCase = (riskLevel || '').toLowerCase().trim();
    switch (riskLowerCase) {
      case 'major':
        return 'border-red-200';
      case 'moderate':
        return 'border-yellow-200';
      case 'minor':
        return 'border-green-200';
      default:
        return 'border-gray-200';
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Interaction Results</h2>
      {results.map((result, index) => (
        <div 
          key={index} 
          className={`mb-4 p-4 border-2 rounded-lg ${getRiskBorder(result.riskLevel)} hover:shadow-md transition-shadow`}
        >
          <div className="flex items-center mb-2">
            {getRiskIcon(result.riskLevel)}
            <h3 className="text-lg font-semibold ml-2">{result.pair}</h3>
          </div>
          <p className="text-gray-600 mb-2">
            <strong>Risk Level: </strong>
            <span className={getRiskColor(result.riskLevel)}>
              {result.riskLevel || 'Unknown'}
            </span>
          </p>
          <p className="text-gray-700">{result.description}</p>
        </div>
      ))}
    </div>
  );
};