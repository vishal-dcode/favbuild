import { useState } from 'react';
import Tabs from './Tabs.jsx';
import IconPreview from './IconPreview.jsx';
import BgPanel from './BgPanel.jsx';

export default function SideBar() {
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="flex w-full">
      <aside className="bg-[#f9f9f9] w-full flex flex-col">
        <Tabs activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        <div className="p-4 pt-2">
          {activeMenu === 0 && <IconPreview />}
          {activeMenu === 1 && <BgPanel />}
        </div>
      </aside>

      <span className="bg-gray-500 h-full w-[1px]"></span>
    </div>
  );
}
