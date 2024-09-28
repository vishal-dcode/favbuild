import { useState, useContext } from 'react';
import Tabs from './Tabs.jsx';
import IconController from './IconController.jsx';
import BgController from './BgController.jsx';
import { StoreContext } from '../context/storeContext';
import Download from './Download.jsx';

export default function SideBar({ exportRef }) {
  const [activeMenu, setActiveMenu] = useState(0);
  const { setUpdateStorage } = useContext(StoreContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetAll = () => {
    const defaultValues = {
      // Icon default values
      iconName: 'BiBowlRice',
      iconSet: 'react',
      iconSize: 260,
      iconRotation: 0,
      iconColor: '#ffffff',
      // Background default values
      bgBorderRadius: 0,
      bgBorder: 0,
      bgBorderColor: '#000000',
      bgColor: '#000000'
    };

    setUpdateStorage(defaultValues);
    localStorage.setItem('value', JSON.stringify(defaultValues));
  };

  return (
    <div className="flex border-r border-neutral-400">
      <aside className="w-full max-h-[calc(100vh-100px)] bg-white flex flex-col">
        <Tabs activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        <div className="tab-items max-h-[calc(100vh-160px)] overflow-scroll bg-[#eeeeee]">
          {activeMenu === 0 && <IconController />}
          {activeMenu === 1 && <BgController />}
        </div>

        <div className="h-[1px] bg-gray-400 w-full"></div>

        <div className="flex gap-2 m-4">
          <button
            onClick={resetAll}
            className="uppercase flex-1 w-full bg-neutral-600 hover:bg-[#3d190a] rounded-lg font-semibold p-3 text-white">
            Reset
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="uppercase flex-[2] bg-[#8a3418] hover:bg-[#3d190a] rounded-lg font-semibold p-3 border-t-neutral-800 text-white">
            Download
          </button>
        </div>

        <Download exportRef={exportRef} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </aside>
    </div>
  );
}
