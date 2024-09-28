import { FaGithubAlt, FaLinkedinIn, FaMediumM } from 'react-icons/fa';

const socialMedia = [
  { icon: <FaGithubAlt />, link: 'https://github.com/vishal-dcode' },
  { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/vishal-s-vishwakarma/' },
  { icon: <FaMediumM />, link: 'https://medium.com/@vishaaal' }
];

export default function Footer() {
  return (
    <section className="border border-t-gray-400 px-4  bg-[#eeeeee]">
      <div className="h-[30px] flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Made by{' '}
          <a className="font-medium" target="_blank" href="https://vishaal.vercel.app/">
            Vishal Vishwakarma
          </a>{' '}
          &copy; 2024
        </p>
        <div className="flex gap-2">
          {socialMedia.map((item, idx) => (
            <a key={idx} href={item.link} className="text-gray-500 hover:text-gray-700">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
