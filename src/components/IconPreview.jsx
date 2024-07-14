import { useContext, useEffect, useState, useMemo } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import { StoreContext } from '../context/storeContext';
import * as reactIcons from 'react-icons/bi'; // Assuming you're using Bi icons from react-icons
import Select from 'react-select';

// Merge all icons into one object
const allIcons = { ...reactIcons };

const IconOption = ({ label, value }) => {
  const IconComponent = allIcons[value];
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <IconComponent size={24} style={{ marginRight: 8 }} />
      {label}
    </div>
  );
};

export default function IconPanel() {
  const { setUpdateStorage } = useContext(StoreContext);
  const storageValue = JSON.parse(localStorage.getItem('value')) || {};

  const [iconName, setIconName] = useState(storageValue.iconName || 'BiAlbum');
  const [iconSize, setIconSize] = useState(storageValue.iconSize || 120);
  const [iconRotation, setIconRotation] = useState(storageValue.iconRotation || 0);
  const [iconColor, setIconColor] = useState(storageValue.iconColor || '#ffffff');

  const Icon = ({ name, size, color }) => {
    const IconComponent = allIcons[name];
    if (!IconComponent) {
      return null;
    }
    return <IconComponent size={size} color={color} />;
  };

  const resetValues = () => {
    setIconSize(120);
    setIconRotation(0);
    setIconColor('#ffffff');
  };

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconName,
      iconSize,
      iconRotation,
      iconColor
    };

    setUpdateStorage(updatedValue);
    localStorage.setItem('value', JSON.stringify(updatedValue));
  }, [iconName, iconSize, iconRotation, iconColor, setUpdateStorage]);

  const iconOptions = useMemo(
    () =>
      Object.keys(allIcons).map((icon) => ({
        label: icon,
        value: icon
      })),
    []
  );

  return (
    <div>
      <div>
        <label>Select Icon</label>
        <Select
          value={iconOptions.find((option) => option.value === iconName)}
          onChange={(selectedOption) => setIconName(selectedOption.value)}
          options={iconOptions}
          formatOptionLabel={IconOption}
        />
      </div>

      <div>
        <div>
          <label>Size</label>
          <input type="number" value={iconSize} onChange={(e) => setIconSize(parseInt(e.target.value))} />
          <span>px</span>
        </div>
        <input
          type="range"
          min="50"
          max="500"
          value={iconSize}
          onChange={(e) => setIconSize(parseInt(e.target.value))}
        />
      </div>

      <div>
        <div>
          <label>Rotation</label>
          <input type="number" value={iconRotation} onChange={(e) => setIconRotation(parseInt(e.target.value))} />
          <sup>৹</sup>
        </div>
        <input
          type="range"
          min="0"
          max="360"
          value={iconRotation}
          onChange={(e) => setIconRotation(parseInt(e.target.value))}
        />
      </div>

      <div>
        <div>
          <label>Icon Color</label>
        </div>
        <div className="bg-red-500">
          <ColorPicker value={iconColor} onChange={setIconColor} />
        </div>
      </div>

      <div>
        <button onClick={resetValues}>Reset</button>
      </div>
    </div>
  );
}
