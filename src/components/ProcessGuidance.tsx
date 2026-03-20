"use client";
import { useState } from 'react';

export default function ProcessGuidance() {
  const steps = [
    "Verify customer identity (Aadhaar / PAN)",
    "Check FD certificate and account details",
    "Calculate premature withdrawal penalty",
    "Get customer signature on closure form",
    "Process the closure in CBS system",
    "Disburse amount to linked savings account"
  ];
  
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(steps.length).fill(false));

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="mb-8">
      <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Process Guidance</h3>
      <div className="space-y-3">
        {steps.map((step, index) => (
            <label key={index} className="flex items-center gap-3 group cursor-pointer">
              <input 
                checked={checkedState[index]} 
                onChange={() => handleOnChange(index)}
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" 
                type="checkbox" 
              />
              <span className={`text-sm text-on-surface font-medium group-hover:text-primary transition-colors ${checkedState[index] ? 'line-through text-slate-400' : ''}`}>
                {step}
              </span>
            </label>
        ))}
      </div>
    </div>
  );
}
