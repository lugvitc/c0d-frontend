import React, { useState } from 'react';
import ArrowLeft from '../icons/ArrowLeft';
import PixelatedDropdown from './pixelated-dropdown';
import './pixelated.css'; 
import Text from "~/components/text";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPowerup, setSelectedPowerup] = useState<{ name: string, description: string, points: number, count: number } | null>(null);
  const [hoveredPowerup, setHoveredPowerup] = useState<{ name: string, description: string, points: number, count: number } | null>(null);
  const [isLightMode, setIsLightMode] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleLightModeClick = () => setIsLightMode(!isLightMode);

  const [powerups, setPowerups] = useState([
    { name: 'SABOTAGE', description: 'Sabotage your rivals\' defenses.', points: 500, count: 1 },
    { name: 'AIRSTRIKE', description: 'Launch an airstrike on your enemies.', points: 200, count: 3 },
    { name: 'SHIELD', description: 'Shield your defenses from attacks.', points: 200, count: 3 },
  ]);

  const points = 0;
  const teamName = "TEAM-meow";

  const handleUsePowerup = () => {
    if (selectedPowerup && selectedPowerup.count > 0) {
      setPowerups(powerups.map(powerup => 
        powerup.name === selectedPowerup.name 
          ? { ...powerup, count: powerup.count - 1 }
          : powerup
      ));
      setSelectedPowerup(prev => prev ? { ...prev, count: prev.count - 1 } : null);
    }
  };

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
            <header className="text-white border-2 p-5 flex items-center justify-between gap-x-4">
              <button><ArrowLeft className="text-white w-10 h-10 mr-2" onClick={closeModal} /></button>
              <div className="flex-grow text-center">
                <h1 className="text-5xl text-red-500 ml-5 select-none">ㅤㅤㅤPOWER-UPS</h1>
                <h2 className="text-1xl text-white text-center">
                  Spend your points to shield your defenses or launch a fierce attack on your rivals
                </h2>
              </div>
              <div className="flex flex-col">
                <Text className="text-white font-homevideo text-right" glow="primary">
                  <button className='text-right text-shadow-glow hover:text-shadow-glow-hover' onClick={handleLightModeClick}>
                    {isLightMode ? "WELL WE DON'T DO THAT HERE" : 'LIGHT MODE'}
                  </button>
                </Text>
                <div className='text-right'>
                  {points} PTS
                </div>
                <div className='text-right text-red-500'>
                  Team name: {teamName}
                </div>
              </div>
            </header>

            <main className="flex-grow text-white flex flex-col">
              <div className="flex flex-row w-full justify-between">
                <div className="flex flex-col">
                  {powerups.map((powerup, index) => (
                    <div
                      key={index}
                      className='border-2 p-5 m-5 mx-0 flex justify-center items-center w-64 cursor-pointer hover:bg-red-500'
                      onClick={() => setSelectedPowerup(powerup)}
                      onMouseEnter={() => setHoveredPowerup(powerup)}
                      onMouseLeave={() => setHoveredPowerup(null)}
                    >
                      {powerup.name} [{powerup.count}]
                    </div>
                  ))}
                  {children}
                </div>

                <div>
                  <div className="border-2 text-center p-5 m-5 flex justify-center items-center">
                    <div>
                      <span className={`text-4xl ${hoveredPowerup ? 'animate-gradient' : ''}`}>
                        {selectedPowerup ? selectedPowerup.name : 'Select a power-up to see what it is.'}
                      </span>
                      <br />
                      <span>
                        {selectedPowerup ? `${selectedPowerup.description}` : 'Select a power-up to see what it does.'}
                      </span>
                      <br />
                      <span className='text-red-500'>
                        {selectedPowerup ? `(Points: ${selectedPowerup.points})` : ''}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center border-2 justify-between p-9 pb-5 mt-5 md-0 mx-0 h-full flex items-center flex-col">
                  <div className="p-2 my-5 h-full">
                    {selectedPowerup?.name === 'SHIELD' ? (
                      <span>Team: {teamName}</span>
                    ) : (
                      <>
                        <span>CHOOSE TEAM</span> <br />
                        <PixelatedDropdown />
                      </>
                    )}
                  </div>
                  <button 
                    className="border-2 p-2 my-5 hover-gradient-bg" 
                    onClick={handleUsePowerup}
                    disabled={!selectedPowerup || selectedPowerup.count === 0}
                  >
                    USE POWERUP
                  </button>
                </div>
              </div>
            </main>

            <footer className="text-white border-2 p-5 text-center">
              © 2024 lugvitc
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
