const menuList = [
  { id: 0, title: 'Icon' },
  { id: 1, title: 'Background' }
];

export default function Tabs({ activeMenu, setActiveMenu }) {
  return (
    <div className="flex w-full cursor-pointer justify-between items-center border-b-neutral-600">
      {menuList.map((item) => (
        <div
          key={item.id}
          onClick={() => setActiveMenu(item.id)}
          className={`px-4 h-[60px] w-full hover:bg-[#8a3418] uppercase font-bold grid place-items-center
                      ${activeMenu === item.id ? 'bg-[#3d190a]' : 'bg-neutral-500'}`}>
          <span title={item.title} className="text-lg text-gray-100">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}
