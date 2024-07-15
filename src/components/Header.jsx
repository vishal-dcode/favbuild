import { useState } from 'react';
import { FaInfo } from 'react-icons/fa';

import { BiBorderRadius } from 'react-icons/bi';
import Modal from 'react-modal';
import Accordion from './Accordion.jsx'; // Assuming you have an Accordion component

//? Make sure to bind modal to your appElement (root of your app) for accessibility reasons
Modal.setAppElement('#root');

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full border-b border-b-gray-400 h-16 px-4 flex justify-between items-center bg-[#f9f9f9]">
      <h1 className="text-3xl font-bold flex gap-2 items-center text-gray-800 pointer-events-none">
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
          className="InfoModal relative h-full bg-[rgba(0,0,0,0.5)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[600px] w-full">
            <Accordion />
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-black border border-gray-600 bg-white uppercase font-semibold
              p-2 mt-2 w-full grid place-items-center rounded-full hover:bg-[#4936d5] hover:text-white">
              Close
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
