import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentsCSS/Header.css';
import Hamburger from './Hamburger';
import NavBar from './NavBar';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const imageSrc = location.pathname === '/iron-swords-college'
    ? `${process.env.PUBLIC_URL}/assets/imgs/red.png` 
    : `${process.env.PUBLIC_URL}/assets/imgs/orange.png`;
  return (
    <header className="header">
      {/* בטלפון → המבורגר, בדסקטופ → נאבר */}
      {isMobile ? (
        <Hamburger className="hamburger" />
      ) : (
        <NavBar />
      )}

      <img
        src={`${process.env.PUBLIC_URL}/assets/imgs/collegeLogo.png`}
        className="App-logo"
        alt="logo"
        onClick={() => navigate('/home')}
      />

      <button
        className="back-homeNav"
        onClick={() => navigate('/home')} 
      >
      </button>

      <img
        src={imageSrc}
        alt="Decorative"
        className="decorative-photo"
      />
    </header>
  );
}

export default Header;
