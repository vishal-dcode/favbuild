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
          className={`p-4 w-full hover:bg-[#26169c] uppercase font-bold grid place-items-center
                      ${activeMenu === item.id ? 'bg-[#4936d5]' : 'bg-neutral-800'}`}>
          <span title={item.title} className="text-sm text-gray-100">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}
