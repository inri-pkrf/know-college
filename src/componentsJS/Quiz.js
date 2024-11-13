import React, { useState } from 'react';
import '../componentsCSS/Quiz.css';
import html2canvas from 'html2canvas'; // ייבוא של הספרייה

// שאלות ותשובות כפי שהיו במבנה המקורי
const questions = [
  "מה אפשר לעשות באתר המכללה?",
  "כמה פרטי מידע יש בספרייה הלאומית לחירום?",
  "מהו 'מעגל ההכשרה השלם'?",
  "כמה זמן נמשכת הכשרת סע\"ר לכיתות י'?",
  "מהן ראשי התיבות רח\"ל?",
  "לפי כמות הדגלים שהופיעו בפרק הקש\"ח, נציגים מכמה מדינות ביקרו אצלינו?",
  "כמה גנרלים ספרדים היו פה?",
  "מה עשתה המכללה בזמן המלחמה?",
  "כמה מלונות ניהל משל\"ט ינאי בשיא במהלך מלחמת 'חרבות ברזל?",
  "מה הסלוגן של נווה איתנים?"
];
const answers1 = [
  "א. להירשם להכשרות",
  "א. כ-1,000 פריטים",
  "א. מעגל שאם מסתובבים בו מספיק פעמים, גשם מתחיל לרדת",
  "א. יום אחד",
  "א. רשת חירום לישראל",
  "א. 6",
  "א. ארבעה",
  "א. ביצוע 'זמן יקר' במפקדות",
  "א. 465",
  "א. הכי מוכנה בארץ"
];
const answers2 = [
  "ב. ללמוד על פעילויות המכללה",
  "ב. כ-1,250",
  "ב. מעגל ההכשרות שעוברות על מנהלי המכלולים שמגיעים למכללה",
  "ב. 11 שעות",
  "ב. רשת חברים לאומית",
  "ב. 7",
  "ב. חמישה",
  "ב. הפצת שיעור דיגיטלי של הצח\"י",
  "ב. 564",
  "ב. איתנים ונהנים"
];
const answers3 = [
  "ג. לחפש תוכן מקצועי",
  "ג. כ-1,500",
  "ג. המעגל שעובר דרך התורה, ההכשרה ואימון במכללה והיכולת ללמוד מהשטח ולהשתפר תו\"כ תנועה",
  "ג. שני ימי הכשרה",
  "ג. רשות החירום הלאומית",
  "ג. 9",
  "ג. שישה",
  "ג. אירחה את שר התיירות, שר המדע ואת כל נציגי וועדת חוץ וביטחון",
  "ג. 456",
  "ג. הכי מוכנים לחירום"
];
const answers4 = [
  "ד. כל התשובות נכונות",
  "ד. מעל 1,700",
  "ד. כל מגמה בנפרד על מעגל הכשרה אחד, כשכל אחד משפיע רק בתחומו",
  "ד. חצי יום בלחץ",
  "ד. רשות החירום לישראל",
  "ד. 11",
  "ד. הם היו אמריקאים, לא מספרד",
  "ד. כל התשובות נכונות",
  "ד. 546",
  "ד. הכי מוכנים במדינה"
];
const correctAnswers = [
  "ד. כל התשובות נכונות",
  "ג. כ-1,500",
  "ג. המעגל שעובר דרך התורה, ההכשרה ואימון במכללה והיכולת ללמוד מהשטח ולהשתפר תו\"כ תנועה",
  "ג. שני ימי הכשרה",
  "ג. רשות החירום הלאומית",
  "ד. 11",
  "ג. שישה",
  "ד. כל התשובות נכונות",
  "ג. 456",
  "ד. הכי מוכנים במדינה"
];

// Quiz component
const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerSelect = (answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentIndex] = answer;
    setSelectedAnswers(newAnswers);

    if (answer === correctAnswers[currentIndex]) {
      setScore(prevScore => prevScore + 10);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const finishQuiz = () => {
    setIsSubmitted(true);
  };

  const retryQuiz = () => {
    setScore(0);
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setIsSubmitted(false);
  };
  const captureAndShareScreenshot = () => {
    const element = document.querySelector('.results');
  
    // השתמש ב-html2canvas כדי לצלם את האלמנט וליצור תמונה
    html2canvas(element).then((canvas) => {
      const dataUrl = canvas.toDataURL('image/png'); // ייצור תמונה בפורמט PNG
  
      // יצירת אובייקט Blob שמייצג את התמונה
      const byteString = atob(dataUrl.split(',')[1]);
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const uintArray = new Uint8Array(arrayBuffer);
  
      for (let i = 0; i < byteString.length; i++) {
        uintArray[i] = byteString.charCodeAt(i);
      }
  
      const blob = new Blob([uintArray], { type: 'image/png' });
  
      // יצירת לינק להורדה של התמונה
      const file = new File([blob], "screenshot.png", { type: 'image/png' });
  
      // אם הדפדפן תומך בשיתוף, נבצע את השיתוף
      if (navigator.share) {
        navigator.share({
          title: 'תוצאת הבוחן',
          text: 'הנה תוצאת הבוחן שלי!',
          files: [file]
        })
        .then(() => console.log('הצלחה בשיתוף'))
        .catch((error) => console.log('שיתוף נכשל:', error));
      } else {
        alert('הדפדפן שלך לא תומך בשיתוף');
      }
    });
  };
  
  

  // מערך התשובות לכל שאלה
  const answerOptions = [answers1[currentIndex], answers2[currentIndex], answers3[currentIndex], answers4[currentIndex]];
  const progressWidth = `${((currentIndex + 1) / questions.length) * 100}%`;

  return (
    <div className="quiz-container">
      {!isSubmitted ? (
        <div id="quiz">
          <p className="question-number">שאלה {currentIndex + 1} מתוך {questions.length}</p>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: progressWidth }}></div>
          </div>

          <p className="question">{questions[currentIndex]}</p>

          <div className="answers">
            {answerOptions.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(answer)}
                className={`answer-button ${selectedAnswers[currentIndex] === answer ? 'selected' : ''}`}
              >
                {answer}
              </button>
            ))}
          </div>

          <div className="navigation-buttons">
            <button
              className={` ${currentIndex === 0 ? 'button-disabled ' : 'prev-button'}`}
              onClick={prevQuestion}
              disabled={currentIndex === 0}
            >
              שאלה קודמת
            </button>
            <button
              className={` ${selectedAnswers[currentIndex] === undefined || currentIndex === questions.length - 1 ? 'button-disabled ' : 'next-button'}`}
              onClick={nextQuestion}
              disabled={selectedAnswers[currentIndex] === undefined || currentIndex === questions.length - 1}
            >
              שאלה הבאה
            </button>
          </div>

          {currentIndex === questions.length - 1 && (
            <button className='end-btn' onClick={finishQuiz}>סיים את המשחק</button>
          )}
        </div>
      ) : (
        <div className="results">
          <p className='score'>ציון: {score}</p>
          {score >= 70 ? (
            <div>
              <p className='message'>מזל טוב! סיימת את הבוחן בהצלחה!</p>
              <button className='share-btn' onClick={captureAndShareScreenshot}>שתף תוצאה עם צילום מסך</button>
              <button className='try-button' onClick={retryQuiz}>נסו שוב</button>
            </div>
          ) : (
            <div>
              <p className='message'>אוי, לא נורא</p>
              <button className='end-btn' onClick={retryQuiz}>נסו שוב</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
