import { useContext, useEffect, useState, useMemo } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import { StoreContext } from '../context/storeContext';

export default function BgPanel() {
  const { setUpdateStorage } = useContext(StoreContext);
  const storageValue = useMemo(() => JSON.parse(localStorage.getItem('value')) || {}, []);

  const [bgBorderRadius, setBgBorderRadius] = useState(storageValue.bgBorderRadius || 0);
  const [bgBorder, setBgBorder] = useState(storageValue.bgBorder || 0);
  const [bgBorderColor, setBgBorderColor] = useState(storageValue.bgBorderColor || '#000000');
  const [bgColor, setBgColor] = useState(storageValue.bgColor || '#000000');

  const resetValues = () => {
    setBgBorderRadius(0);
    setBgBorder(0);
    setBgBorderColor('#000000');
    setBgColor('#000000');
  };

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgBorderRadius,
      bgBorder,
      bgBorderColor,
      bgColor
    };

    setUpdateStorage(updatedValue);
    localStorage.setItem('value', JSON.stringify(updatedValue));
  }, [bgBorderRadius, bgBorder, bgBorderColor, bgColor, setUpdateStorage]);

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

      <div className="grid pt-5 p-4">
        <div className="flex items-center justify-between">
          <label className="font-semibold mb-1">Border:</label>
          <div className="flex">
            <input
              className="input-value outline-none w-12 p-0 m-0 text-end bg-inherit"
              type="number"
              value={bgBorder}
              onChange={(e) => setBgBorder(e.target.value)}
            />
            <span>px</span>
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <input
            type="color"
            value={bgBorderColor}
            onChange={(e) => setBgBorderColor(e.target.value)}
            className="border-color-picker outline-none border-none p-0"
          />
          <input
            type="range"
            min="0"
            max="10"
            value={bgBorder}
            onChange={(e) => setBgBorder(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="h-[1px] bg-gray-400 w-full"></div>

      <div className="grid p-4 pb-5">
        <label className="font-semibold mb-2">Background Color:</label>
        <div>
          <ColorPicker style={{ minWidth: '100%' }} value={bgColor} onChange={setBgColor} />
        </div>
      </div>

      <div className="h-[1px] bg-gray-400 w-full"></div>

      <div className="flex justify-center">
        <button
          onClick={resetValues}
          className="font-display uppercase m-4 w-full bg-neutral-800 hover:bg-[#23148f] rounded-lg font-semibold p-3 border-t-neutral-800 text-white">
          Reset Background
        </button>
      </div>
    </div>
  );
}
