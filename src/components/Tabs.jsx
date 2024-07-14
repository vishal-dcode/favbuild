const menuList = [
  { id: 0, title: 'Icon' },
  { id: 1, title: 'Background' }
];

export default function Tabs({ activeMenu, setActiveMenu }) {
  return (
    <div className="flex gap-2 p-2">
      {menuList.map((item) => (
        <div
          key={item.id}
          onClick={() => setActiveMenu(item.id)}
          className={`flex gap-2 py-2 px-4 cursor-pointer
                      h-fit rounded-full transition-all ease-in-out duration-100
                      hover:bg-[#ff4406]
                      ${activeMenu === item.id ? 'bg-[#ff4406]' : 'bg-black'}`}>
          <span title={item.title} className="text-xs text-gray-100">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}
