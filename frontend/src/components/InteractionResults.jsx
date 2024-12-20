import React from 'react';
import { AlertTriangle, AlertCircle, Info, HelpCircle } from 'lucide-react';

const getRiskIcon = (riskLevel) => {
  const riskLowerCase = riskLevel?.toLowerCase() || 'unknown';
  switch (riskLowerCase) {
    case 'major':
      return <AlertTriangle className="text-red-500" />;
    case 'moderate':
      return <AlertTriangle className="text-yellow-500" />;
    case 'minor':
      return <Info className="text-blue-500" />;
    case 'neutral':
      return <Info className="text-green-500" />;
    default:
      return <HelpCircle className="text-gray-500" />;
  }
};

export const InteractionResults = ({ results }) => {
  const getRiskColor = (riskLevel) => {
    const riskLowerCase = riskLevel?.toLowerCase() || 'unknown';
    switch (riskLowerCase) {
      case 'major':
        return 'text-red-500 font-semibold';
      case 'moderate':
        return 'text-yellow-500 font-semibold';
      case 'minor':
        return 'text-blue-500 font-semibold';
      case 'neutral':
        return 'text-green-500 font-semibold';
      default:
        return 'text-gray-500 italic';
    }
  };

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
            <strong>Risk Level: </strong>
            <span className={getRiskColor(result.riskLevel)}>{result.riskLevel}</span>
          </p>
          <p className={`${result.riskLevel.toLowerCase() === 'unknown' ? 'text-gray-500 italic' : 'text-gray-700'}`}>
            {result.description}
          </p>
        </div>
      ))}
    </div>
  );
};