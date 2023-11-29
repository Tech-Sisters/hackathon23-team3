/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.onscroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <div>
      {showButton && (
        <button onClick={scrollToTop} className="bg-white p-3 rounded">
          <FaArrowUp className="icon" />
        </button>
      )}
    </div>
  );
};

export default GoToTopButton;
