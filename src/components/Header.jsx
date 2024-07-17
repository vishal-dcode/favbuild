import { useState } from 'react';
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
        <div
          title="Info"
          onClick={() => setIsModalOpen(true)}
          className="text-gray-800 border rounded-full grid place-items-center border-black hover:bg-[#4936d5] hover:text-white h-8 w-8 font-bold">
          <span className="transform -translate-y-[-1px]">i</span>
        </div>
        <Modal
          style={{
            overlay: {
              position: 'fixed',
              top: '0',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              border: 'none',
              background: 'transparent',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '0',
              outline: 'none',
              padding: '0'
            }
          }}
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[350px] md:min-w-[550px] bg-neutral-600 overflow-hidden rounded-xl border border-black">
            <div className="flex justify-between items-center p-4">
              <h3 className="text-lg max-sm:text-lg font-medium text-white">Create your own icons:</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-sm h-8 w-8 bg-neutral-900 rounded-full text-white hover:bg-red-600">
                X
              </button>
            </div>

            <Accordion />
          </div>
        </Modal>
      </div>
    </div>
  );
}
