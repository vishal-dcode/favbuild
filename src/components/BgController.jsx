import { useContext, useEffect, useState } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import { StoreContext } from '../context/storeContext';

export default function BgPanel() {
  const { setUpdateStorage } = useContext(StoreContext);
  const storageValue = JSON.parse(localStorage.getItem('value')) || {};

  const [bgBorderRadius, setBgBorderRadius] = useState(storageValue.bgBorderRadius || 25);
  const [bgColor, setBgColor] = useState(storageValue.bgColor || '#12006c');

  const resetValues = () => {
    setBgBorderRadius(25);
    setBgColor('#12006c');
  };

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgBorderRadius,
      bgColor
    };

    setUpdateStorage(updatedValue);
    localStorage.setItem('value', JSON.stringify(updatedValue));
  }, [bgBorderRadius, bgColor, setUpdateStorage]);

  return (
    <div>
      <div className="grid pt-5 p-4">
        <div className="flex items-center justify-between">
          <label className="font-semibold mb-1">Border Radius:</label>
          <div className="flex">
            <input
              className="input-value outline-none w-12 p-0 m-0 text-end bg-inherit"
              type="number"
              value={bgBorderRadius}
              onChange={(e) => setBgBorderRadius(e.target.value)}
            />
            <span>%</span>
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="50"
          value={bgBorderRadius}
          onChange={(e) => setBgBorderRadius(e.target.value)}
        />
      </div>

      <div className="h-[1px] bg-gray-400 w-full"></div>

      <div className="grid p-4 pb-5">
        <label className="font-semibold mb-2">Background Color:</label>
        <div>
          <ColorPicker style={{ minWidth: '100%' }} value={bgColor} onChange={setBgColor} />
        </div>
      </div>

      <div className="bg-[#3c2aca] hover:bg-[#23148f] font-semibold grid place-items-center p-3  border-t-neutral-800 text-white">
        <button onClick={resetValues} className="uppercase">
          Reset
        </button>
      </div>
    </div>
  );
}
