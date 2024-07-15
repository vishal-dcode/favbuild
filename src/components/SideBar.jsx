import { useState } from 'react';
import Tabs from './Tabs.jsx';
import IconController from './IconController.jsx';
import BgController from './BgController.jsx';

export default function SideBar() {
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="scroll-smooth border border-black rounded-xl overflow-hidden flex ">
      <aside className="w-full bg-[#e2e2e2] flex flex-col">
        <Tabs activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        <div>
          {activeMenu === 0 && <IconController />}
          {activeMenu === 1 && <BgController />}
        </div>
      </aside>
    </div>
  );
}
