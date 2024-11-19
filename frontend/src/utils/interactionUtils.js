export const findInteractions = (medications, interactionData) => {
    if (!interactionData || !Array.isArray(interactionData) || !medications || medications.length < 2) {
      return [];
    }
  
    const results = [];
    for (let i = 0; i < medications.length; i++) {
      for (let j = i + 1; j < medications.length; j++) {
        const drugA = medications[i].name.toLowerCase();
        const drugB = medications[j].name.toLowerCase();
  
        const interaction = interactionData.find(int => {
          const match1 = int.DrugA_Name?.toLowerCase() === drugA && int.DrugB_Name?.toLowerCase() === drugB;
          const match2 = int.DrugA_Name?.toLowerCase() === drugB && int.DrugB_Name?.toLowerCase() === drugA;
          return match1 || match2;
        });
  
        if (interaction) {
          results.push({
            pair: `${medications[i].name} + ${medications[j].name}`,
            description: interaction.Description || 'No description available',
            riskLevel: interaction.Level || 'Unknown'
          });
        }
      }
    }
    return results;
  };