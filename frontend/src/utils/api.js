const API_BASE_URL = 'http://127.0.0.1:5000/api';

export const fetchMedications = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/medications`);
    if (!response.ok) {
      throw new Error(`Failed to fetch medications: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched medications sample:', data.slice(0, 3));
    return data;
  } catch (error) {
    console.error('Error fetching medications:', error);
    throw error;
  }
};

export const fetchMedicationInfo = async (drugName) => {
  if (!drugName) return null;
  try {
    const response = await fetch(`${API_BASE_URL}/medication/${encodeURIComponent(drugName)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch medication info: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched medication info:', data);
    return data;
  } catch (error) {
    console.error('Error fetching medication info:', error);
    throw error;
  }
};

export const fetchInteractions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/interactions`);
    if (!response.ok) {
      throw new Error(`Failed to fetch interactions: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched interactions:', {
      total: data.length,
      sample: data.slice(0, 3)
    });
    return data;
  } catch (error) {
    console.error('Error fetching interactions:', error);
    throw error;
  }
};