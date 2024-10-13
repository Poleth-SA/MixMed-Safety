import React from 'react';

function InteractionResults({ interactions }) {
  if (!interactions) return null;

  return (
    <div className="interaction-results">
      <h2>Interaction Results</h2>
      <p>{interactions}</p>
    </div>
  );
}

export default InteractionResults;