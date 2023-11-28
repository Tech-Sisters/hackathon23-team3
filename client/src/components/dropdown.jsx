/* eslint-disable no-unused-vars */
// Dropdown.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Dropdown.css';

const Dropdown = ({ options, defaultOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
    onSelect(value);
  };

  return (
    <div className="custom-dropdown relative inline-block">
      <div className="cursor-pointer" onClick={toggleDropdown}>
        <div className="flex items-center">
          <span className="font-medium text-2xl font-serif text-primary">
            {selectedOption}
          </span>
          <svg
            className={`ml-2 h-5 w-5 ${isOpen ? 'transform rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="dropdown-options absolute bg-white shadow-lg rounded-md mt-2">
          {options.map((option) => (
            <div
              key={option}
              className="option cursor-pointer py-2 px-4 hover:bg-gray-200"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultOption: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
