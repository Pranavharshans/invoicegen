import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  nextLabel?: string;
  prevLabel?: string;
}

export function FormNavigation({ 
  currentStep, 
  totalSteps, 
  onNext, 
  onPrev,
  nextLabel = 'Next',
  prevLabel = 'Back'
}: FormNavigationProps) {
  return (
    <div className="flex justify-between items-center">
      {prevLabel && (
        <button
          onClick={onPrev}
          disabled={currentStep === 0}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50"
        >
          <ChevronLeft className="w-4 h-4" />
          {prevLabel}
        </button>
      )}
      <div className="flex-1" />
      <button
        onClick={onNext}
        disabled={currentStep === totalSteps - 1}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50"
      >
        {nextLabel}
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}