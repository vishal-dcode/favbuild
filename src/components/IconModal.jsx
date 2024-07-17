import { useMemo, useState, useEffect, Suspense } from 'react';
import Modal from 'react-modal';
import * as reactIcons from 'react-icons/bi';
import * as heroIcons from '@heroicons/react/24/solid';

const allReactIcons = { ...reactIcons };
const allHeroIcons = { ...heroIcons };

const IconOption = ({ label, value, iconSet, onClick }) => {
  const IconComponent = iconSet === 'react' ? allReactIcons[value] : allHeroIcons[value];

  return (
    <div
      className="grid place-items-center "
      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      onClick={() => onClick(value, iconSet)}>
      <Suspense fallback={<div className="text-black">Loading...</div>}>
        {IconComponent && <IconComponent size={32} />}
      </Suspense>
    </div>
  );
};

const IconModal = ({ isOpen, onClose, onSelectIcon }) => {
  const [activeTab, setActiveTab] = useState('react');
  const [loading, setLoading] = useState(true);

  const iconOptions = useMemo(
    () => ({
      react: Object.keys(allReactIcons).map((icon) => ({ label: icon, value: icon })),
      hero: Object.keys(allHeroIcons).map((icon) => ({ label: icon, value: icon }))
    }),
    []
  );

  useEffect(() => {
    // Simulate an async fetch operation
    const fetchIcons = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
      setLoading(false);
    };

    fetchIcons();
  }, []);

  const handleIconSelect = (iconName, iconSet) => {
    onSelectIcon(iconName, iconSet);
    onClose();
  };

  return (
    <Modal
      style={{
        content: {
          border: '1px solid #141414',
          background: '#f2f2f2',
          borderRadius: '16px',
          outline: 'none',
          padding: '0',
          zIndex: '100000'
        }
      }}
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      contentLabel="Icon Modal">
      <div>
        <div className="flex justify-between gap-2 items-center p-4 border border-b-black">
          <div className="flex rounded-full overflow-hidden justify-between items-center">
            {['react', 'hero'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab ? 'bg-[#26169c]' : 'bg-neutral-600'
                } text-sm h-9 text-white px-4 whitespace-nowrap font-semibold`}>
                {tab === 'react' ? 'React Icons' : 'Hero Icons'}
              </button>
            ))}
          </div>
          <button
            onClick={onClose}
            className="bg-red-400 h-9 w-9 font-bold text-sm p-2 text-white rounded-full hover:bg-red-600">
            X
          </button>
        </div>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>Loading icons...</div>
        ) : (
          <div
            className="p-4 bg-white py-6 grid gap-4"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(32px, 1fr))' }}>
            {iconOptions[activeTab].map((option) => (
              <IconOption key={option.value} {...option} iconSet={activeTab} onClick={handleIconSelect} />
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default IconModal;
