import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [visitedPages, setVisitedPages] = useState([]); // מכיל את כל ה-pathים של העמודים בהם ביקרת

  const subjects = [
    { name: 'מי זאת המכללה', path: '/college-info' },
    { name: 'המכללה בחרבות ברזל', path: '/iron-swords-college' },
    { name: 'נכסים דיגיטליים', path: '/digital-assets' },
    { name: 'הספרייה הלאומית לחירןם', path: '/emergency-library' },
    { name: 'קש"ח', path: '/society' }
  ];

  useEffect(() => {
    // בודק אם מדובר בביקור ראשון בעמוד ומנקה את visitedPages אם כן
    if (!localStorage.getItem('initialized')) {
      localStorage.removeItem('visitedPages');
      localStorage.setItem('initialized', 'true');
      setVisitedPages([]);
    } else {
      const storedPages = localStorage.getItem('visitedPages');
      if (storedPages) {
        setVisitedPages(JSON.parse(storedPages));
      }
    }
  }, []);

  useEffect(() => {
    console.log('Visited Pages:', visitedPages); // מדפיס את visitedPages בכל פעם שהוא מתעדכן
  }, [visitedPages]);

  const moveToPage = (index) => {
    const subject = subjects[index];
    let updatedVisitedPages = [...visitedPages];

    if (!updatedVisitedPages.includes(subject.path)) {
      updatedVisitedPages.push(subject.path);
      localStorage.setItem('visitedPages', JSON.stringify(updatedVisitedPages));
    }

    setVisitedPages(updatedVisitedPages);
    navigate(subject.path);
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
            className={`btn-class ${visitedPages.includes(subject.path) ? 'active' : ''}`}
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
