// frontend/src/utils/api.js
const API_BASE_URL = 'http://localhost:5000/api';

export const fetchMedications = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/medications`);
    if (!response.ok) {
      throw new Error('Failed to fetch medications');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching medications:', error);
    throw error;
  }
};

export const fetchMedicationInfo = async (name) => {
  try {
    const response = await fetch(`${API_BASE_URL}/medications/${encodeURIComponent(name)}`);
    if (!response.ok) {
      throw new Error('Medication not found');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching medication info:', error);
    throw error;
  }
};

export const checkInteractions = async (medications) => {
  try {
    const response = await fetch(`${API_BASE_URL}/check-interactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ medications }),
    });
    if (!response.ok) {
      throw new Error('Failed to check interactions');
    }
    return response.json();
  } catch (error) {
    console.error('Error checking interactions:', error);
    throw error;
  }
};