// src/components/NavBar.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentsCSS/NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [visitedPages, setVisitedPages] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem('visitedPages')) || [];
    } catch {
      return [];
    }
  });

  const subjects = [
    { name: 'עמוד הבית', path: '/home' },
    { name: 'מי זאת המכללה', path: '/college-info' },
    { name: 'המכללה בחרבות ברזל', path: '/iron-swords-college' },
    { name: 'נכסים דיגיטליים', path: '/digital-assets' },
    { name: 'הספרייה הלאומית לחירום', path: '/emergency-library' },
    { name: 'קש"ח', path: '/society' },
    { name: 'בוחן', path: '/final' },
  ];

  // עדכון visitedPages בכל מעבר עמוד
  useEffect(() => {
    if (!visitedPages.includes(location.pathname)) {
      const updated = [...visitedPages, location.pathname];
      setVisitedPages(updated);
      sessionStorage.setItem('visitedPages', JSON.stringify(updated));
    }
  }, [location.pathname]);

  const allPagesVisited = subjects
    .filter(s => s.path !== '/final')
    .every(s => visitedPages.includes(s.path));

  const go = (path, disabled) => {
    if (disabled) return;
    navigate(path);
  };

  return (
    <nav className="navbar" dir="rtl">
      <ul className="nav-list">
        {subjects.map((s, idx) => {
          const isActive = location.pathname === s.path;
          const isDisabled = s.path === '/final' && !allPagesVisited;

          return (
            <li
              key={idx}
              className={`nav-item 
                ${isActive ? 'active' : ''} 
                ${visitedPages.includes(s.path) ? 'visited' : ''} 
                ${isDisabled ? 'disabled' : ''}`}
              onClick={() => go(s.path, isDisabled)}
            >
              {s.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
