import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/Hamburger.css';

const Hamburger = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (onClick) {
      onClick();
    }
  };

  const handleMenuClick = (path) => {
    setIsOpen(false); // סגור את התפריט לאחר בחירה
    navigate(path);
  };

  return (
    <div>
      <div className="hamburger-icon" onClick={handleClick} style={{ cursor: 'pointer' }}>
        <div className={`hamburger-line ${isOpen ? 'open' : ''}`} />
        <div className={`hamburger-line ${isOpen ? 'open' : ''}`} />
        <div className={`hamburger-line ${isOpen ? 'open' : ''}`} />
      </div>
      
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/imgs/whiteLogo.svg`}
          alt="Decorative"
          className="whiteLogoHam"
        />
        <h1 className="menu-title">הכרת המכללה</h1>
        <ul className="menu-list">
          <li onClick={() => handleMenuClick('/home')}>עמוד הבית</li>
          <div className="lineMenu"></div>
          <li onClick={() => handleMenuClick('/college-info')}>מי זאת המכללה</li>
          <div className="lineMenu"></div>
          <li onClick={() => handleMenuClick('/iron-swords-college')}>המכללה בחרבות ברזל</li>
          <div className="lineMenu"></div>
          <li onClick={() => handleMenuClick('/digital-assets')}>נכסים דיגיטליים</li>
          <div className="lineMenu"></div>
          <li onClick={() => handleMenuClick('/emergency-library')}>הספרייה הלאומית לחירום</li>
          <div className="lineMenu"></div>
          <li onClick={() => handleMenuClick('/socaity')}>קש"ח</li>
          <div className="lineMenu"></div>
        </ul>
        <div className="mashov-menu">
          <div className="mashovTextMenu">
            <br /> יש הערות על הממשק? יש מחמאות? מלאו את השאלון וצרו איתנו קשר
            <br />
            <a
              id="linkMenu"
              href="https://docs.google.com/forms/d/e/1FAIpQLSflGabIbTG0fNDp_MGmI64a9xzg4AHkJNyH7DovtxicCIuIhw/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              בקישור הבא
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
