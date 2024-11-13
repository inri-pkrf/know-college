import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // הוספת ה-import של useNavigate
import '../componentsCSS/FinalScreen.css';

function FinalScreen() {
  const navigate = useNavigate(); // יצירת פונקציה של ניווט
  const [firstName, setFirstName] = useState(''); // מצב לשם פרטי
  const [lastName, setLastName] = useState(''); // מצב לשם משפחה

  const handleStartQuiz = () => {
    // ניווט לעמוד /test עם שמות המשתמש כ-state
    navigate('/test', { state: { firstName, lastName } });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // מונע את ברירת המחדל של שליחת הטופס
    // אפשר להוסיף כאן לוגיקה להשלמת השם והכנת המידע למשלוח
    console.log(`שם פרטי: ${firstName}, שם משפחה: ${lastName}`);
    handleStartQuiz(); // ניווט לעמוד הבוחן לאחר שליחת הטופס
  };

  return (
    <div id="final-screen">
      <p className="blue-text-final">כל הכבוד על האיתנות! הגעת לסיום! גם של המשחק וגם של ההיכרות הראשונית עם המכללה</p>
      <p className="grey-big-final">שנעבור לבדוק מה הצלחת לזכור?</p>
      
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="first-name" className="input-label">שם פרטי:</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="הכנס שם פרטי"
            className="input-field"
          />
        </div>
        
        <div className="input-container">
          <label htmlFor="last-name" className="input-label">שם משפחה:</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="הכנס שם משפחה"
            className="input-field"
          />
        </div>
        
        <button type="submit" className="button-final">הגש את השם והתחל את הבוחן</button>
      </form>
      
      <p className="grey-big-final bottom">עליך להשיג לפחות ציון של 70 בכדי לקבל תעודת סיום, בהצלחה!</p>
    </div>
  );
}

export default FinalScreen;
