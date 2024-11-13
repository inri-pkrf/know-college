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
    { name: 'קש"ח', path: '/society' },
    { name: 'בוחן', path: '/final' }
  ];

  useEffect(() => {
    // בודק אם מדובר בביקור ראשון בעמוד ומנקה את visitedPages אם כן
    if (!sessionStorage.getItem('initialized')) {
      sessionStorage.removeItem('visitedPages');
      sessionStorage.setItem('initialized', 'true');
      setVisitedPages([]);
    } else {
      const storedPages = sessionStorage.getItem('visitedPages');
      if (storedPages) {
        setVisitedPages(JSON.parse(storedPages));
      }
    }
  }, []);

  const moveToPage = (index) => {
    const subject = subjects[index];
    let updatedVisitedPages = [...visitedPages];

    if (!updatedVisitedPages.includes(subject.path)) {
      updatedVisitedPages.push(subject.path);
      sessionStorage.setItem('visitedPages', JSON.stringify(updatedVisitedPages));
    }

    setVisitedPages(updatedVisitedPages);
    navigate(subject.path);
  };

  // בודק אם כל העמודים בוקרו, חוץ מהעמוד של הבוחן
  const allPagesVisited = subjects
    .filter(subject => subject.path !== '/final') // מסנן את העמוד של הבוחן
    .every(subject => visitedPages.includes(subject.path));

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
            className={`btn-class ${visitedPages.includes(subject.path) ? 'active' : ''} ${subject.path === '/final' && !allPagesVisited ? 'fade' : ''}`} // אם לא ביקרו בעמודים, נוסיף fade
            disabled={subject.path === '/final' && !allPagesVisited} // מאופשר רק אם כל העמודים בוקרו
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
