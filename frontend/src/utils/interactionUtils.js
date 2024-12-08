export const findInteractions = (medications, interactionData) => {
  // Initial validation with detailed logging
  if (!interactionData || !Array.isArray(interactionData) || !medications || medications.length < 2) {
    console.log('Invalid input data:', { 
      hasInteractionData: !!interactionData,
      interactionDataLength: interactionData?.length,
      medicationsLength: medications?.length,
      isInteractionDataArray: Array.isArray(interactionData)
    });
    return [];
  }

  console.log('Starting interaction check with:', {
    medications: medications.map(m => m.name),
    totalInteractions: interactionData.length,
    sampleInteraction: interactionData[0]
  });

  const results = [];
  const noInteractionPairs = [];

  for (let i = 0; i < medications.length; i++) {
    for (let j = i + 1; j < medications.length; j++) {
      const drugA = medications[i].name.toLowerCase().trim();
      const drugB = medications[j].name.toLowerCase().trim();

      console.log(`\nChecking interaction between: "${drugA}" and "${drugB}"`);

      // Log interaction data structure for the first pair
      if (i === 0 && j === 1) {
        console.log('First 3 interactions from database:', 
          interactionData.slice(0, 3).map(int => ({
            drugA: int.DrugA_Name,
            drugB: int.DrugB_Name,
            description: int.Description?.slice(0, 50) + '...',
            level: int.Level
          }))
        );
      }

      const interaction = interactionData.find(int => {
        if (!int.DrugA_Name || !int.DrugB_Name) {
          console.log('Invalid interaction record:', int);
          return false;
        }

        const drugAName = int.DrugA_Name.toLowerCase().trim();
        const drugBName = int.DrugB_Name.toLowerCase().trim();

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
      } else {
        noInteractionPairs.push({
          pair: `${medications[i].name} + ${medications[j].name}`,
          description: 'No interaction data available for this combination',
          riskLevel: 'unknown'
        });
      }
    }
  }

  console.log('Final results:', [...results, ...noInteractionPairs]);
  return [...results, ...noInteractionPairs];
};