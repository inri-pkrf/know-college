import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentsCSS/Hamburger.css';

const Hamburger = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visitedPages, setVisitedPages] = useState(() => {
    const storedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || [];
    return storedPages;
  });
  const [isOpen, setIsOpen] = useState(false);

  const subjects = [
    { name: 'עמוד הבית', path: '/home' },
    { name: 'מי זאת המכללה', path: '/college-info' },
    { name: 'המכללה בחרבות ברזל', path: '/iron-swords-college' },
    { name: 'נכסים דיגיטליים', path: '/digital-assets' },
    { name: 'הספרייה הלאומית לחירום', path: '/emergency-library' },
    { name: 'קש"ח', path: '/society' },
    { name: 'בוחן', path: '/final' }
  ];

  useEffect(() => {
    if (!visitedPages.includes(location.pathname)) {
      const updatedVisitedPages = [...visitedPages, location.pathname];
      setVisitedPages(updatedVisitedPages);
      sessionStorage.setItem('visitedPages', JSON.stringify(updatedVisitedPages));
    }
  }, [location.pathname, visitedPages]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (path) => {
    setIsOpen(false); 
    navigate(path);
  };

  const allPagesVisited = subjects
    .filter(subject => subject.path !== '/final')
    .every(subject => visitedPages.includes(subject.path));

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
          {subjects.map((subject, index) => (
            <React.Fragment key={index}>
              <li
                onClick={() => handleMenuClick(subject.path)}
                className={`menu-item ${visitedPages.includes(subject.path) ? 'active' : ''} 
                  ${subject.path === '/final' && !allPagesVisited ? 'fade' : ''}`}
                style={{ cursor: subject.path === '/final' && !allPagesVisited ? 'not-allowed' : 'pointer' }}
              >
                {subject.name}
              </li>
              {index < subjects.length - 1 && <div className="lineMenu"></div>}
            </React.Fragment>
          ))}
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
