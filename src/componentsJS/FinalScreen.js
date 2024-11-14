import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/FinalScreen.css';

function FinalScreen() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleStartQuiz = () => {
    navigate('/test', { state: { firstName, lastName } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`שם פרטי: ${firstName}, שם משפחה: ${lastName}`);
    handleStartQuiz();
  };

  // בדיקה אם השדות ריקים
  const isFormValid = firstName.trim() !== '' && lastName.trim() !== '';

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
            placeholder="הכנס שם משפחה"
            className="input-field"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="button-final" 
          disabled={!isFormValid} // השבתה אם השדות ריקים
        >
          לבוחן
        </button>
      </form>
      
      <p className="grey-big-final bottom">עליך להשיג לפחות ציון של 70 בכדי לקבל תעודת סיום, בהצלחה!</p>
    </div>
  );
}

export default FinalScreen;
