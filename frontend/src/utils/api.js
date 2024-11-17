const API_BASE_URL = 'http://127.0.0.1:5000/api';

export const fetchMedications = async () => {
  const response = await fetch(`${API_BASE_URL}/medications`);
  if (!response.ok) {
    throw new Error('Failed to fetch medications');
  }
  return response.json();
};

export const fetchMedicationInfo = async (drugName) => {
  const response = await fetch(`${API_BASE_URL}/medication/${drugName}`);
  if (!response.ok) {
    throw new Error('Failed to fetch medication info');
  }
  return response.json();
};

export const fetchInteractions = async () => {
  const response = await fetch(`${API_BASE_URL}/interactions`);
  if (!response.ok) {
    throw new Error('Failed to fetch interactions');
  }
  return response.json();
};