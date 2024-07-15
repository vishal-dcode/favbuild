import { useContext, useEffect, useState, Suspense } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import { StoreContext } from '../context/storeContext';
import IconModal from './IconModal';
import * as ReactIcons from 'react-icons/bi';
import * as HeroIcons from '@heroicons/react/24/solid';

const allReactIcons = { ...ReactIcons };
const allHeroIcons = { ...HeroIcons };

export default function IconPanel() {
  const { setUpdateStorage } = useContext(StoreContext);
  const storageValue = JSON.parse(localStorage.getItem('value')) || {};

  const [iconName, setIconName] = useState(storageValue.iconName || 'BiBorderRadius');
  const [iconSet, setIconSet] = useState(storageValue.iconSet || 'react');
  const [iconSize, setIconSize] = useState(storageValue.iconSize || 310);
  const [iconRotation, setIconRotation] = useState(storageValue.iconRotation || 0);
  const [iconColor, setIconColor] = useState(storageValue.iconColor || '#ffffff');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetValues = () => {
    setIconSize(310);
    setIconRotation(0);
    setIconColor('#ffffff');
  };

  const handleSelectIcon = (name, set) => {
    setIconName(name);
    setIconSet(set);
  };

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconName,
      iconSet,
      iconSize,
      iconRotation,
      iconColor
    };

    setUpdateStorage(updatedValue);
    localStorage.setItem('value', JSON.stringify(updatedValue));
  }, [iconName, iconSet, iconSize, iconRotation, iconColor, setUpdateStorage]);

  const IconComponent = iconSet === 'react' ? allReactIcons[iconName] : allHeroIcons[iconName];

  return (
    <div>
      <div className="grid pt-5 p-4">
        <label className="font-semibold mb-1">Select Icon:</label>
        <div className="relative overflow-hidden flex items-center border border-gray-400 p-2 h-12 rounded-lg hover:bg-neutral-300">
          <button onClick={() => setIsModalOpen(true)} className="pl-2">
            Open Icon Selector
          </button>
          <IconModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSelectIcon={handleSelectIcon} />
          <div className="w-12 h-12 text-lg text-neutral-800 absolute border border-l-neutral-400 top-0 right-0 bg-neutral-300 grid place-items-center">
            {IconComponent && (
              <Suspense fallback={<div>Loading...</div>}>
                <IconComponent />
              </Suspense>
            )}
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-gray-400 w-full"></div>

      <div className="grid p-4">
        <div className="flex items-center justify-between">
          <label className="font-semibold mb-1">Size:</label>
          <div className="flex gap-0.5">
            <input
              className="input-value outline-none w-12 p-0 m-0 text-end bg-inherit"
              type="number"
              min="50"
              max="500"
              value={iconSize}
              onChange={(e) => setIconSize(parseInt(e.target.value))}
            />
            <span>px</span>
          </div>
        </div>
        <input
          type="range"
          min="50"
          max="500"
          value={iconSize}
          onChange={(e) => setIconSize(parseInt(e.target.value))}
        />
      </div>

      <div className="h-[1px] bg-gray-400 w-full"></div>

      <div className="grid p-4">
        <div className="flex items-center justify-between">
          <label className="font-semibold mb-1">Rotation:</label>
          <div className="flex">
            <input
              className="input-value outline-none w-12 p-0 m-0 text-end bg-inherit"
              type="number"
              value={iconRotation}
              onChange={(e) => setIconRotation(parseInt(e.target.value))}
            />
            <span className="transform -translate-y-1.5">৹</span>
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="360"
          value={iconRotation}
          onChange={(e) => setIconRotation(parseInt(e.target.value))}
        />
      </div>

      <div className="h-[1px] bg-gray-400 w-full"></div>

      <div className="grid p-4 pb-5">
        <label className="font-semibold mb-2">Icon Color:</label>
        <div>
          <ColorPicker style={{ minWidth: '100%' }} value={iconColor} onChange={setIconColor} hideControls={true} />
        </div>
      </div>

      <button
        onClick={resetValues}
        className="uppercase w-full bg-[#3c2aca] hover:bg-[#23148f] font-semibold grid place-items-center p-3  border-t-neutral-800 text-white">
        Reset Icon
      </button>
    </div>
  );
}
