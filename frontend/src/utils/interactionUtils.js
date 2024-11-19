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
  
        // Log the drugs being checked
        console.log('Checking interaction between:', drugA, 'and', drugB);
  
        const interaction = interactionData.find(int => {
          const drugAName = int.DrugA_Name?.toLowerCase().trim();
          const drugBName = int.DrugB_Name?.toLowerCase().trim();
          
          // Log the comparison
          console.log('Comparing with:', drugAName, 'and', drugBName);
          
          const match1 = drugAName === drugA && drugBName === drugB;
          const match2 = drugAName === drugB && drugBName === drugA;
          return match1 || match2;
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
    
    console.log('Final results:', results);
    return results;
  };