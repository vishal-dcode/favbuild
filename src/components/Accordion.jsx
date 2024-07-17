import { useState } from 'react';

const accordionData = [
  {
    id: 1,
    title: 'STEP 01: Choose the Icon',
    content: 'Instructions for choosing the icon.'
  },
  {
    id: 2,
    title: 'STEP 02: Edit Icon and Background',
    content: 'Instructions for editing the icon and background.'
  },
  {
    id: 3,
    title: 'STEP 03: Download with Size and File Format',
    content: 'Instructions for downloading with size and file format options.'
  }
];

const Accordion = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div>
      {accordionData.map((item) => (
        <div
          key={item.id}
          className={`accordion border border-b-gray-400 ${activeStep === item.id ? 'active' : ''}`}
          onClick={() => setActiveStep(item.id)}>
          <div className="accordion-title px-5 py-3 font-semibold ">{item.title}</div>
          {activeStep === item.id && (
            <div className="bg-white px-5 py-3 text-sm">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
