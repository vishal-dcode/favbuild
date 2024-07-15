import { useState } from 'react';
import { FaInfo } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';

import { BiBorderRadius } from 'react-icons/bi';
import Modal from 'react-modal';
import Accordion from './Accordion.jsx'; // Assuming you have an Accordion component

//? Make sure to bind modal to your appElement (root of your app) for accessibility reasons
Modal.setAppElement('#root');

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full border-b border-b-gray-400 h-[4.5rem] px-4 flex justify-between items-center bg-[#f9f9f9]">
      <h1 className="text-4xl font-bold flex gap-2 items-center text-gray-800 pointer-events-none">
        <BiBorderRadius /> FavBuild
      </h1>
      <div className="h-full grid place-items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-gray-800 border rounded-full border-black p-1.5 hover:bg-[#4936d5] hover:text-white">
          <FaInfo />
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="h-full bg-[rgba(0,0,0,0.8)] ">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[350px] md:min-w-[550px]">
            <div className="flex justify-between items-center mb-3 px-2">
              <h3 className="text-lg font-semibold text-white">Steps to create your own icons</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-3xl text-white hover:text-[#fa3434]">
                <IoIosCloseCircle />
              </button>
            </div>

            <Accordion />
          </div>
        </Modal>
      </div>
    </div>
  );
}
