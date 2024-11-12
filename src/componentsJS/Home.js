import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/Home.css';

const Home = ({ visitedMenuPage = [] }) => {
  const navigate = useNavigate();
  const subjects = [
    { name: 'מי זאת המכללה', path: '/college-info' },
    { name: 'המכללה בחרבות ברזל', path: '/iron-swords-college' },
    { name: 'נכסים דיגיטליים', path: '/digital-assets' },
    { name: 'הספרייה הלאומית לחירןם', path: '/emergency-library' },
    { name: 'קש"ח', path: '/socaity' }
  ];

  // שליפת רשימת כפתורים שנלחצו מ-localStorage או השארת רשימה ריקה אם אין נתונים
  const [clickedPages, setClickedPages] = useState(
    JSON.parse(localStorage.getItem('clickedPages')) || []
  );

  const moveToPage = (index) => {
    if (!clickedPages.includes(index)) {
      const updatedClickedPages = [...clickedPages, index];
      setClickedPages(updatedClickedPages);
      localStorage.setItem('clickedPages', JSON.stringify(updatedClickedPages)); // עדכון localStorage
    }
    navigate(subjects[index].path);
  };

  return (
    <div id="page">
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
            className={`btn-class ${
              clickedPages.includes(index) ? 'clicked-btn' : ''
            } ${visitedMenuPage?.includes(index) ? 'disabled-btn' : ''}`}
            disabled={visitedMenuPage?.includes(index)}
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
      <h1 className="margin-class">thgrthrthrthrthtrhrth</h1>
    </div>
  );
};

export default Home;
