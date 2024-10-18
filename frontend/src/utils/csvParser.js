import Papa from 'papaparse';

export const parseMedicationCSV = async () => {
  try {
    const response = await fetch('/data/medication.csv');
    const csvText = await response.text();
    const { data } = Papa.parse(csvText, { header: true });
    return data;
  } catch (error) {
    console.error('Error parsing medication CSV:', error);
    return [];
  }
};

export const parseInteractionCSV = async () => {
  try {
    const response = await fetch('/data/interaction.csv');
    const csvText = await response.text();
    const { data } = Papa.parse(csvText, { header: true });
    return data;
  } catch (error) {
    console.error('Error parsing interaction CSV:', error);
    return [];
  }
};