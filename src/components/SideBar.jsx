import { useState } from 'react';
import Tabs from './Tabs.jsx';
import IconController from './IconController.jsx';
import BgController from './BgController.jsx';

export default function SideBar() {
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="scroll-smooth border border-black rounded-xl overflow-hidden flex ">
      <aside className="w-full bg-white flex flex-col">
        <Tabs activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        <div className="tab-items md:max-h-[73vh] max-h-[100%] overflow-y-scroll">
          {activeMenu === 0 && <IconController />}
          {activeMenu === 1 && <BgController />}

          {/* <div className="flex gap-2 font-display m-4">
            <button className="uppercase flex-1 bg-neutral-800 hover:bg-[#23148f] rounded-lg font-semibold p-3 border-t-neutral-800 text-white">
              Reset
            </button>
            <button className=" uppercase flex-[2] bg-neutral-800 hover:bg-[#23148f] rounded-lg font-semibold p-3 border-t-neutral-800 text-white">
              Download
            </button>
          </div> */}
        </div>
      </aside>
    </div>
  );
}
