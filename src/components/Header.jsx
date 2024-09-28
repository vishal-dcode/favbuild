import { useState } from 'react';
import Modal from 'react-modal';
import Accordion from './Accordion.jsx'; // Assuming you have an Accordion component
import logo from '../assets/logo.svg';

//? Make sure to bind modal to your appElement (root of your app) for accessibility reasons
Modal.setAppElement('#root');

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full border-b border-b-gray-400 px-5 bg-[#fbeee7]">
      <div className="h-[70px] flex justify-between items-center">
        <img className="w-auto h-10" src={logo} alt="Racon Icon Logo" />
        <div className="h-full grid place-items-center">
          <div
            title="Info"
            onClick={() => setIsModalOpen(true)}
            className="text-gray-800 border rounded-full grid place-items-center border-black hover:bg-[#3d190a] hover:text-white h-8 w-8 font-bold">
            i
          </div>
          <Modal
            style={{
              overlay: {
                position: 'fixed',
                top: '0',
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.75)'
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
              <div className="flex border border-t-0 border-x-0 border-b-black justify-between bg-neutral-700 items-center p-4">
                <h3 className="text-lg max-sm:text-lg font-medium text-white">Create your own icons:</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-sm h-8 w-8 border border-neutral-500 rounded-full text-white hover:bg-red-600">
                  X
                </button>
              </div>

              <Accordion />
            </div>
          </Modal>
        </div>
      </div>
    </section>
  );
}
