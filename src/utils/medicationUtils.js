export const checkInteractions = (medications, medicationData) => {
    const found = [];
    medications.forEach((med1, i) => {
      medications.slice(i + 1).forEach(med2 => {
        if (medicationData[med1]?.interactions[med2]) {
          found.push(`${med1} + ${med2}: ${medicationData[med1].interactions[med2]}`);
        }
        if (medicationData[med2]?.interactions[med1]) {
          found.push(`${med2} + ${med1}: ${medicationData[med2].interactions[med1]}`);
        }
      });
    });
    return found;
  };