import React, { useState } from 'react';
import '../componentsCSS/Hamburger.css';

const HamburgerMenu = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="hamburger-icon" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className={`hamburger-line ${isOpen ? 'open' : ''}`} />
      <div className={`hamburger-line ${isOpen ? 'open' : ''}`} />
      <div className={`hamburger-line ${isOpen ? 'open' : ''}`} />
    </div>
  );
};

export default HamburgerMenu;
