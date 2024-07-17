import { useContext, useEffect, useRef, useState } from 'react';
import Download from './Download.jsx';
import { StoreContext } from '../context/storeContext';
import * as ReactIcons from 'react-icons/bi'; // Import all icons from react-icons/bi
import * as heroIcons from '@heroicons/react/24/solid';

export default function Canvas() {
  const exportRef = useRef();
  const [storageValue, setStorageValue] = useState({});
  const { updateStorage } = useContext(StoreContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('value'));
    setStorageValue(storageData);
  }, [updateStorage]);

  const Icon =
    storageValue?.iconSet === 'react' ? ReactIcons[storageValue?.iconName] : heroIcons[storageValue?.iconName];

  return (
    <section className="relative w-full h-full grid place-items-center md:p-4 p-4 py-10">
      <div
        ref={exportRef}
        id="mainIcon"
        style={{
          borderRadius: `${storageValue.bgBorderRadius}%`,
          background: `${storageValue.bgColor}`,
          border: `${storageValue.bgBorder}px solid ${storageValue.bgBorderColor}`
        }}
        className="w-full h-fill sm:w-[512px] sm:h-[512px] aspect-square bg-[#141414] grid place-items-center">
        <div style={{ transform: `rotate(${storageValue?.iconRotation}deg)` }}>
          {Icon && (
            <Icon
              style={{
                color: storageValue?.iconColor,
                width: storageValue?.iconSize,
                height: storageValue?.iconSize
              }}
            />
          )}
        </div>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="max-md:absolute bottom-10 right-4 text-sm float-right uppercase font-semibold text-white border border-neutral-200 rounded-full p-3 px-5 bg-neutral-800 hover:bg-[#3c2aca]">
        Download
      </button>

      <Download exportRef={exportRef} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </section>
  );
}
