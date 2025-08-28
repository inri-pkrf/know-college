import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/FinalScreen.css';

function FinalScreen() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [canAccess, setCanAccess] = useState(false);

  // רשימת כל הדפים שחייבים להיבקר
  const requiredPages = [
    '/college-info',
    '/iron-swords-college',
    '/digital-assets',
    '/emergency-library',
    '/society'
  ];

  useEffect(() => {
    const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages') || '[]');
    // בודק אם כל הדפים הנדרשים קיימים ב-visitedPages
    const allVisited = requiredPages.every((page) => visitedPages.includes(page));
    setCanAccess(allVisited);
  }, []);

  const handleStartQuiz = () => {
    navigate('/test', { state: { firstName, lastName } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleStartQuiz();
  };

  const handleGoHome = () => {
    navigate('/home');
  };

  const isFormValid = firstName.trim() !== '' && lastName.trim() !== '';

  if (!canAccess) {
    // אם המשתמש לא סיים את כל הדפים
    return (
      <div className="FinalScreen">
        <p className="blue-text-final">
          מצטערים, עליך לעבור את כל הלומדה לפני שניתן לגשת לבוחן.
        </p>
        <button className="button-final" onClick={handleGoHome}>
          חזרה לעמוד הבית
        </button>
      </div>
    );
  }

  // אם סיים את כל הדפים, מציגים את הטופס
  return (
    <div className="FinalScreen">
      <p className="blue-text-final">
        כל הכבוד על האיתנות! הגעת לסיום!<br/> גם של המשחק וגם של ההיכרות הראשונית עם המכללה
      </p>
      <p className="grey-big-final">שנעבור לבדוק מה הצלחת לזכור?</p>
      
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="first-name" className="input-label">שם פרטי:</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="הכניסו שם פרטי"
            className="input-field"
            required
          />
        </div>
        
        <div className="input-container">
          <label htmlFor="last-name" className="input-label">שם משפחה:</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="הכניסו שם משפחה"
            className="input-field"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="button-final" 
          disabled={!isFormValid}
        >
          לבוחן
        </button>
      </form>
      
      <p className="grey-big-final bottom">
        עליך להשיג לפחות ציון של 70 בכדי לקבל תעודת סיום, בהצלחה!
      </p>
    </div>
  );
}

export default FinalScreen;
