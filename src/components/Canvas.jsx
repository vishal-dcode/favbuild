import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/storeContext';
import * as ReactIcons from 'react-icons/bi'; // Import all icons from react-icons/bi
import * as heroIcons from '@heroicons/react/24/solid';

export default function Canvas() {
  const [storageValue, setStorageValue] = useState({});
  const { updateStorage } = useContext(StoreContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('value'));
    // console.log(storageData);
    setStorageValue(storageData);
  }, [updateStorage]);

  const Icon =
    storageValue?.iconSet === 'react' ? ReactIcons[storageValue?.iconName] : heroIcons[storageValue?.iconName];

  return (
    <section className="relative w-full h-full grid place-items-center p-5">
      <div
        id="mainIcon"
        style={{
          borderRadius: `${storageValue.bgBorderRadius}%`,
          background: `${storageValue.bgColor}`,
          border: `${storageValue.bgBorder}px solid ${storageValue.bgBorderColor}`
        }}
        className="w-[512px] h-[512px] aspect-square bg-[#141414] grid place-items-center">
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

      <button className="uppercase font-semibold text-white text-sm absolute bottom-5 right-5 border border-neutral-800 rounded-full p-3 px-5 bg-neutral-800 hover:bg-[#3c2aca]">
        Download
      </button>
    </section>
  );
}
