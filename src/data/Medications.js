export const TEST_MEDICATIONS = {
    'aspirin': {
      purpose: 'Pain relief and fever reduction',
      sideEffects: ['Stomach irritation', 'Bleeding risk'],
      interactions: {
        'ibuprofen': 'May reduce aspirin\'s heart benefits'
      }
    },
    'ibuprofen': {
      purpose: 'Pain and inflammation relief',
      sideEffects: ['Stomach upset', 'Kidney problems'],
      interactions: {
        'aspirin': 'May interfere with aspirin\'s benefits'
      }
    },
    'acetaminophen': {
      purpose: 'Pain relief and fever reduction',
      sideEffects: ['Liver problems in high doses', 'Rare skin reactions'],
      interactions: {}
    }
  };
  