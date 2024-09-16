import React, { useState } from 'react';
import ArrowLeft from '../icons/ArrowLeft';
import PixelatedDropdown from './pixelated-dropdown';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-homevideo bg-black p-5">
      <button
        className="bg-red-500 text-white p-2 rounded"
        onClick={openModal}
      >
        Powerups
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="bg-sweetgrey border-2 border-white p-5 z-50 relative">
            <header className="text-white border-2 p-5 flex items-center justify-between">
              <ArrowLeft className="text-white w-10 h-10 mr-2" />
              <div className="flex-grow text-center">
                <h1 className="text-5xl text-red-500">POWER-UPS</h1>
                <h2 className="text-1xl text-white text-center">
                  spend your points to shield your defenses or launch a fierce attack on your rivals
                </h2>
              </div>
            </header>

            <main className="flex-grow text-white flex flex-col">
              <div className="flex flex-row">
                <div className="flex justify-center flex-col">
                  <div className='border-2 p-5 m-5 mb-0 flex justify-center items-center w-64'>
                    SABOTAGE
                  </div>
                  <div className='border-2 p-5 m-5 mb-0 flex justify-center items-center w-64'>
                    AIRSTRIKE
                  </div>
                  <div className='border-2 p-5 m-5 flex justify-center items-center w-64'>
                    SHIELD
                  </div>
                  {children}
                </div>

                <div className="border-2 text-center p-5 m-5 flex justify-center items-center">
                  <span>Image Placeholder</span>
                </div>

                <div className="border-2 text-center p-5 m-5 flex justify-center items-center">
                  <span>Description Placeholder big ahh desc</span>
                </div>

                <div className="text-center p-5 m-5 flex items-center justify-around flex-col">
                  <div className="p-2 my-5">
                    <span>CHOOSE TEAM</span>
                    <PixelatedDropdown />
                  </div>
                  <div className="border-2 p-2 my-5">
                    <span>USE POWERUP</span>
                  </div>
                </div>
              </div>
            </main>
            <footer className="text-white border-2 p-5 text-center">
              © 2024 lugvitc
            </footer>
            <button
              className="absolute top-0 right-0 m-2 text-white"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;