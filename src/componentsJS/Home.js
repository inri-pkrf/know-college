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
    // בודק אם יש מערך של paths ב-localStorage ומעדכן את ה-state
    const storedPages = localStorage.getItem('visitedPages');
    if (storedPages) {
      setVisitedPages(JSON.parse(storedPages)); // ממיר את המידע חזרה למערך
    }
  }, []);

  const moveToPage = (index) => {
    const subject = subjects[index];
    let updatedVisitedPages = [...visitedPages];

    // אם עוד לא ביקרנו בעמוד הזה, נוסיף אותו
    if (!updatedVisitedPages.includes(subject.path)) {
      updatedVisitedPages.push(subject.path);
      // שומר את המערך המעודכן ב-localStorage
      localStorage.setItem('visitedPages', JSON.stringify(updatedVisitedPages));
    }

    // עדכון ה-state
    setVisitedPages(updatedVisitedPages);

    // נווט לעמוד הרצוי
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
            className={`btn-class ${visitedPages.includes(subject.path) ? 'active' : ''}`} // מוסיף את ה-class "active" אם ביקרנו בעמוד הזה
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
