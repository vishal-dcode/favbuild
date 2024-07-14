import { LuBadgeInfo } from 'react-icons/lu';
import { BiBorderRadius } from 'react-icons/bi';

export default function Header() {
  return (
    <div className="w-full border-b border-b-gray-400 h-20 px-4 flex justify-between items-center bg-[#f9f9f9]">
      <h1 className="text-4xl font-bold flex gap-2 text-gray-800">
        <BiBorderRadius /> FavBuild
      </h1>
      <div className="text-3xl text-gray-800">
        <LuBadgeInfo />
      </div>
    </div>
  );
}
