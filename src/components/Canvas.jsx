import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/storeContext';
import * as ReactIcons from 'react-icons/bi';
import * as heroIcons from '@heroicons/react/24/solid';

export default function Canvas({ exportRef }) {
  const [storageValue, setStorageValue] = useState({});
  const { updateStorage } = useContext(StoreContext);

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
    </section>
  );
}
