import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/storeContext';
import * as icons from 'react-icons/bi'; // Import all icons from react-icons/bi

export default function Canvas() {
  const [storageValue, setStorageValue] = useState({});
  const { updateStorage } = useContext(StoreContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('value'));
    // console.log(storageData);
    setStorageValue(storageData);
  }, [updateStorage]);

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return null;
    }
    return <LucidIcon size={size} color={color} />;
  };

  return (
    <section className="relative w-full h-full grid place-items-center">
      <div
        id="mainIcon"
        style={{
          borderRadius: `${storageValue.bgBorderRadius}%`,
          padding: `${storageValue.bgPadding}px`,
          background: `${storageValue.bgColor}`
        }}
        className="w-[512px] aspect-square bg-[#141414] grid place-items-center">
        <div style={{ transform: `rotate(${storageValue?.iconRotation}deg)` }}>
          <Icon name={storageValue?.iconName} color={storageValue?.iconColor} size={storageValue?.iconSize} />
        </div>
      </div>
      <span className="polka-dots absolute w-full h-full bg-[#ffffff] opacity-70 bg-[radial-gradient(#000000_0.75px,_#ffffff_0.75px)] [background-size:15px_15px]"></span>
    </section>
  );
}
