import { useContext, useEffect, useState } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import { StoreContext } from '../context/storeContext';

export default function BgPanel() {
  const { setUpdateStorage } = useContext(StoreContext);

  const storageValue = JSON.parse(localStorage.getItem('value'));

  const [bgBorderRadius, setBgBorderRadius] = useState(storageValue.bgBorderRadius);
  const [bgPadding, setBgPadding] = useState(storageValue.bgPadding);
  const [bgColor, setBgColor] = useState(storageValue.bgColor);

  const resetValues = () => {
    setBgBorderRadius(0);
    setBgPadding(25);
    setBgColor('#141414');
  };

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgBorderRadius,
      bgPadding,
      bgColor
    };

    setUpdateStorage(updatedValue);
    localStorage.setItem('value', JSON.stringify(updatedValue));
  }, [bgBorderRadius, bgPadding, bgColor, setUpdateStorage]);

  return (
    <div>
      <div>
        <div>
          <label>Border Radius</label>
          <input type="number" value={bgBorderRadius} onChange={(e) => setBgBorderRadius(e.target.value)} />
          <span>%</span>
        </div>
        <input
          type="range"
          min="0"
          max="50"
          value={bgBorderRadius}
          onChange={(e) => setBgBorderRadius(e.target.value)}
        />
      </div>

      <div>
        <div>
          <label>Padding</label>
          <input type="number" value={bgPadding} onChange={(e) => setBgPadding(e.target.value)} />
          <span>px</span>
        </div>
        <input type="range" min="0" max="120" value={bgPadding} onChange={(e) => setBgPadding(e.target.value)} />
      </div>

      <div>
        <div>
          <label>Background Color</label>
        </div>
        <div className="bg-red-500">
          <ColorPicker value={bgColor} onChange={setBgColor} />
        </div>
      </div>

      <div>
        <button onClick={resetValues}>Reset</button>
      </div>
    </div>
  );
}
