import React from 'react';
import { useNavigate } from 'react-router-dom'; // הוספת ה-import של useNavigate
import '../componentsCSS/FinalScreen.css';

function FinalScreen() {
  const navigate = useNavigate(); // יצירת פונקציה של ניווט

  const handleStartQuiz = () => {
    navigate('/test'); // ניווט לעמוד /test
  };

  return (
    <div id="final-screen">
      <p className="blue-text-final">כל הכבוד על האיתנות! הגעת לסיום! גם של המשחק וגם של ההיכרות הראשונית עם המכללה</p>
      <p className="grey-big-final">שנעבור לבדוק מה הצלחת לזכור?</p>
      <button className="button-final" onClick={handleStartQuiz}>קדימה לבוחן!</button>
      <p className="grey-big-final bottom">עליך להשיג לפחות ציון של 70 בכדי לקבל תעודת סיום, בהצלחה!</p>
    </div>
  );
}

export default FinalScreen;
