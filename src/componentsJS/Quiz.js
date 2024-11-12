import React, { useState } from 'react';
import '../componentsCSS/Quiz.css';

// מערכים שהספקת:
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
  "ב. ללמוד על פעילויות המכללה",
  "ג. לחפש תוכן מקצועי",
  "ד. כל התשובות נכונות"
];
const answers2 = [
  "א. כ-1,000 פריטים",
  "ב. כ-1,250",
  "ג. כ-1,500",
  "ד. מעל 1,700"
];
const answers3 = [
  "א. מעגל שאם מסתובבים בו מספיק פעמים, גשם מתחיל לרדת",
  "ב. מעגל ההכשרות שעוברות על מנהלי המכלולים שמגיעים למכללה",
  "ג. המעגל שעובר דרך התורה, ההכשרה ואימון במכללה והיכולת ללמוד מהשטח ולהשתפר תו\"כ תנועה",
  "ד. כל מגמה בנפרד על מעגל הכשרה אחד, כשכל אחד משפיע רק בתחומו"
];
const answers4 = [
  "א. יום אחד",
  "ב. 11 שעות",
  "ג. שני ימי הכשרה",
  "ד. חצי יום בלחץ"
];
const correctAnswers = [
  "ד. כל התשובות נכונות",
  "ג. כ-1,500",
  "ג. המעגל שעובר דרך התורה, ההכשרה ואימון במכללה והיכולת ללמוד מהשטח ולהשתפר תו\"כ תנועה",
  "ג. שני ימי הכשרה",
  "ג. רשות החירום הלאומית",
  "ד. 11",
  "ג. שישה",
  "ה. כל התשובות נכונות",
  "ג. 456",
  "ד. הכי מוכנים במדינה"
];

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
      setScore(prevScore => prevScore + 10);  // מוסיף 10 נקודות על תשובה נכונה
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

  // מערכים של תשובות
  const answerArrays = [answers1, answers2, answers3, answers4];

  return (
    <div className="quiz-container">
      {!isSubmitted ? (
        <div id="quiz">
          <p className="question">{questions[currentIndex]}</p>
          <div className="answers">
            {answerArrays[currentIndex].map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(answer)}
                className={`answer-button ${selectedAnswers[currentIndex] === answer ? 'selected' : ''}`}
                disabled={isSubmitted}
              >
                {answer}
              </button>
            ))}
          </div>

          <div className="navigation-buttons">
            <button onClick={prevQuestion} disabled={currentIndex === 0}>שאלה קודמת</button>
            <button
              onClick={nextQuestion}
              disabled={selectedAnswers[currentIndex] === undefined}
            >
              שאלה הבאה
            </button>
          </div>

          {currentIndex === questions.length - 1 && (
            <button onClick={finishQuiz}>סיים את המשחק</button>
          )}
        </div>
      ) : (
        <div className="results">
          <p>ציון: {score}</p>
          {score >= 70 ? (
            <div>
              <p>מזל טוב! סיימת את הבוחן בהצלחה!</p>
              <button>שתף צילום מסך</button>
              <button onClick={retryQuiz}>נסו שוב</button>
            </div>
          ) : (
            <div>
              <p>ננסה שוב!</p>
              <button onClick={retryQuiz}>נסו שוב</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
