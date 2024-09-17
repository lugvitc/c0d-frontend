import React, { useState, useEffect, useRef } from 'react';

const DropdownMenu: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select a team');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Push the team names over here
  const teams = [
    'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10',
    'Option 11', 'Option 12', 'Option 13', 'Option 14', 'Option 15', 'Option 16', 'Option 17', 'Option 18', 'Option 19', 'Option 20',
    'Option 21', 'Option 22', 'Option 23', 'Option 24', 'Option 25', 'Option 26', 'Option 27', 'Option 28', 'Option 29', 'Option 30',
    'Option 31', 'Option 32', 'Option 33', 'Option 34', 'Option 35', 'Option 36', 'Option 37', 'Option 38', 'Option 39', 'Option 40',
    'Option 41', 'Option 42', 'Option 43', 'Option 44', 'Option 45', 'Option 46', 'Option 47', 'Option 48', 'Option 49', 'Option 50',
    'Option 51', 'Option 52', 'Option 53', 'Option 54', 'Option 55', 'Option 56', 'Option 57', 'Option 58', 'Option 59', 'Option 60',
    'Option 61', 'Option 62', 'Option 63', 'Option 64', 'Option 65', 'Option 66', 'Option 67', 'Option 68', 'Option 69'
  ];

  const filteredOptions = teams.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full border border-gray-300 shadow-sm px-4 py-2 bg-sweetgray text-sm font-medium text-white hover:bg-red-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 shadow-lg bg-sweetgrey ring-1 ring-black ring-opacity-5 border-2">
          <div className="px-4 py-3">
            <input
              type="text"
              className="block w-full px-3 py-2 border-2 border-gray-300 text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 text-gray-500"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="py-1 max-h-60 overflow-y-auto">
            {filteredOptions.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                onClick={() => {
                  setSelectedOption(option);
                  setSearchTerm('');
                  setIsOpen(false);
                }}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;