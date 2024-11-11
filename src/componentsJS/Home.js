import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/Home.css';

const Home = ({ visitedMenuPage = [] }) => {
  const navigate = useNavigate();
  const subjects = [
    { name: 'מי זאת המכללה', path: '/college-info' },
    { name: 'המכללה בחרבות ברזל', path: '/iron-swords-college' },
    { name: 'נכסים דיגיטליים', path: '/digital-assets' },
    { name: 'הספרייה הלאומית לחירןם', path: '/emergency-library' },
    { name: 'גמו"ש', path: '/kash' }
  ];

  const [states, setStates] = useState(subjects.map(() => 0));

  const moveToPage = (index) => {
    setStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? 1 : state))
    );
    navigate(subjects[index].path);
  };

  return (
    <div id="page">
      <h1 id="main-title">עמוד הבית</h1>
      <div className="text">
      <p id="intro1">אנחנו ממליצים ללכת לפי הסדר, למרות שאפשר איך שרוצים.</p>
    <p id="intro"> כל נושא מכיל הסבר קצר, אולי יהיה שם וידאו, בטוח יהיו תמונות ואפילו יש איזה משחק.
תבלו :)</p>
      </div>
      <div className="button-container">
        {subjects.map((subject, index) => (
          <button
            key={index}
            onClick={() => moveToPage(index)}
            className={`btn-class ${
              states[index] === 1 ? 'active-btn' : ''
            } ${visitedMenuPage?.includes(index) ? 'disabled-btn' : ''}`}
            disabled={visitedMenuPage?.includes(index)}
          >
            {subject.name}
          </button>
        ))}
       <p className="survey">יש הערות על הממשק?
יש מחמאות? מלאו את השאלון וצרו איתנו קשר
<a id="link" href="https://docs.google.com/forms/d/e/1FAIpQLSflGabIbTG0fNDp_MGmI64a9xzg4AHkJNyH7DovtxicCIuIhw/viewform" target="_blank">
      בקישור הבא
      </a>
</p>
      </div>
      <h1 className="margin-class">thgrthrthrthrthtrhrth</h1>
    </div>
  );
};

export default Home;
