import { useState } from 'react';

const Accordion = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <div className="border border-b-gray-400" onClick={() => handleStepClick(1)}>
        <div className={`accordion-title px-5 py-3 ${activeStep === 1 ? 'active' : ''}`}>1. Choose the Icon</div>
        {activeStep === 1 && (
          <div className="bg-white px-5 py-3">
            <p>Instructions for choosing the icon...</p>
          </div>
        )}
      </div>
      <div className="border border-b-gray-400" onClick={() => handleStepClick(2)}>
        <div className={`accordion-title px-5 py-3 ${activeStep === 2 ? 'active' : ''}`}>
          2. Edit Icon and Background
        </div>
        {activeStep === 2 && (
          <div className="bg-white px-5 py-3">
            <p>Instructions for editing the icon and background...</p>
          </div>
        )}
      </div>
      <div className="border border-b-gray-400" onClick={() => handleStepClick(3)}>
        <div className={`accordion-title px-5 py-3 ${activeStep === 3 ? 'active' : ''}`}>
          3. Download with Size and File Format
        </div>
        {activeStep === 3 && (
          <div className="bg-white px-5 py-3">
            <p>Instructions for downloading with size and file format options...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
