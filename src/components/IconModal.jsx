import { useMemo, useState, useEffect, Suspense } from 'react';
import Modal from 'react-modal';
import * as reactIcons from 'react-icons/bi';
import * as heroIcons from '@heroicons/react/24/solid';

const allReactIcons = { ...reactIcons };
const allHeroIcons = { ...heroIcons };

const IconOption = ({ label, value, iconSet, onClick }) => {
  const IconComponent = iconSet === 'react' ? allReactIcons[value] : allHeroIcons[value];

  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onClick(value, iconSet)}>
      <Suspense fallback={<div>Loading...</div>}>{IconComponent && <IconComponent size={24} />}</Suspense>
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
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false} contentLabel="Icon Modal">
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          {['react', 'hero'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: activeTab === tab ? '2px solid black' : 'none'
              }}>
              {tab === 'react' ? 'React Icons' : 'Hero Icons'}
            </button>
          ))}
        </div>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>Loading icons...</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px' }}>
            {iconOptions[activeTab].map((option) => (
              <IconOption key={option.value} {...option} iconSet={activeTab} onClick={handleIconSelect} />
            ))}
          </div>
        )}
      </div>

      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default IconModal;
