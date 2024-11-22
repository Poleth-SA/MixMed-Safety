export const findInteractions = (medications, interactionData) => {
  if (!interactionData || !Array.isArray(interactionData) || !medications || medications.length < 2) {
    console.log('Invalid input data:', { medications, interactionDataLength: interactionData?.length });
    return [];
  }

  const results = [];
  for (let i = 0; i < medications.length; i++) {
    for (let j = i + 1; j < medications.length; j++) {
      const drugA = medications[i].name.toLowerCase().trim();
      const drugB = medications[j].name.toLowerCase().trim();

      console.log('Checking interaction between:', drugA, 'and', drugB);

      const interaction = interactionData.find(int => {
        const drugAName = int.DrugA_Name?.toLowerCase().trim();
        const drugBName = int.DrugB_Name?.toLowerCase().trim();
        
        console.log('Comparing with database entry:', drugAName, 'and', drugBName);
        
        return (drugAName === drugA && drugBName === drugB) ||
               (drugAName === drugB && drugBName === drugA);
      });

      if (interaction) {
        console.log('Found interaction:', interaction);
        results.push({
          pair: `${medications[i].name} + ${medications[j].name}`,
          description: interaction.Description || 'No description available',
          riskLevel: interaction.Level || 'Unknown'
        });
      }
    }
  }
  
  console.log('Final interaction results:', results);
  return results;
};