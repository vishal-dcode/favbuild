import { FaGithubAlt, FaLinkedinIn, FaMediumM } from 'react-icons/fa';

const socialMedia = [
  { icon: <FaGithubAlt />, link: 'https://github.com/vishal-dcode' },
  { icon: <FaLinkedinIn />, link: 'https://github.com/vishal-dcode' },
  { icon: <FaMediumM />, link: 'https://github.com/vishal-dcode' }
];

export default function Footer() {
  return (
    <section className="border border-t-gray-400 px-4 h-10 flex items-center justify-between bg-[#f9f9f9]">
      <p className="text-sm text-gray-500">Made by Vishal Vishwakarma &copy; 2024</p>
      <div className="flex gap-2">
        {socialMedia.map((item, idx) => (
          <a key={idx} href={item.link} className="text-gray-500 hover:text-gray-700">
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
