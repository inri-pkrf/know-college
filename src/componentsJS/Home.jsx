import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentsCSS/Home.css';

const Home = ({ onVisit }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visitedPages, setVisitedPages] = useState(() => {
    const storedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || [];
    return storedPages;
  });

  const subjects = [
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
      onVisit(location.pathname);
    }
  }, [location.pathname, visitedPages, onVisit]);

  const moveToPage = (index) => {
    navigate(subjects[index].path);
  };

  const allPagesVisited = subjects
    .filter(subject => subject.path !== '/final')
    .every(subject => visitedPages.includes(subject.path));

  return (
    <div className="Home">
      <h1 id="main-title">עמוד הבית</h1>
      <div className="text">
        <p id="intro1">אנחנו ממליצים ללכת לפי הסדר, למרות שאפשר איך שרוצים.</p>
        <p id="intro">
          כל נושא מכיל הסבר קצר, אולי יהיה שם וידאו, בטוח יהיו תמונות ואפילו יש איזה משחק. תבלו :)
        </p>
      </div>
      <div className="button-container">
        {subjects.map((subject, index) => (
          <button
            key={index}
            onClick={() => moveToPage(index)}
            className={`btn-class ${visitedPages.includes(subject.path) ? 'active' : ''} ${subject.path === '/final' && !allPagesVisited ? 'fade' : ''}`}
            disabled={subject.path === '/final' && !allPagesVisited}
          >
            {subject.name}
          </button>
        ))}
        <p className="survey">
          יש הערות על הממשק? יש מחמאות? מלאו את השאלון וצרו איתנו קשר
          <a
            id="link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSflGabIbTG0fNDp_MGmI64a9xzg4AHkJNyH7DovtxicCIuIhw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            בקישור הבא
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
