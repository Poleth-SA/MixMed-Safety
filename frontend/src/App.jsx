import React from 'react';
import { Layout } from './components/Layout/Layout';
import { MedicationInput } from './components/Medications/MedicationInput';
import { MedicationList } from './components/Medications/MedicationList';
import { QuickActions } from './components/common/QuickActions';
import { useMedications } from './hooks/useMedications';

export default function App() {
  const {
    medications,
    currentMed,
    setCurrentMed,
    error,
    addMedication,
    removeMedication,
    clearAll,
  } = useMedications();

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <MedicationInput
            onAdd={addMedication}
            error={error}
            currentMed={currentMed}
            setCurrentMed={setCurrentMed}
            onClear={clearAll}
          />
          <MedicationList
            medications={medications}
            onRemove={removeMedication}
          />
        </div>
        <div className="md:col-span-1">
          <QuickActions />
        </div>
      </div>
    </Layout>
  );
}