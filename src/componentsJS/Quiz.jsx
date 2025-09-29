import React, { useState } from 'react';
import '../componentsCSS/Quiz.css';
import { useLocation } from 'react-router-dom'; 
import html2canvas from 'html2canvas';
import { questions, answers, correctAnswers } from '../Data/quizData';

const Quiz = ({ onReset }) => {
  const location = useLocation(); 
  const { firstName, lastName } = location.state || {};

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerSelect = (answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentIndex] = answer;
    setSelectedAnswers(newAnswers);
  
    if (answer === correctAnswers[currentIndex]) {
      setScore(prevScore => Math.min(prevScore + 10, 100));
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

  const finishQuiz = () => setIsSubmitted(true);

  const retryQuiz = () => {
    setScore(0);
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setIsSubmitted(false);
  };

  const captureAndShareScreenshot = () => {
    const element = document.querySelector('.results');
  
    html2canvas(element).then((canvas) => {
      const dataUrl = canvas.toDataURL('image/png');
      const byteString = atob(dataUrl.split(',')[1]);
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const uintArray = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        uintArray[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([uintArray], { type: 'image/png' });
      const file = new File([blob], "screenshot.png", { type: 'image/png' });

      if (navigator.share) {
        navigator.share({ title: 'תוצאת הבוחן', text: 'הנה תוצאת הבוחן שלי!', files: [file] })
          .catch((error) => console.log('שיתוף נכשל:', error));
      } else {
        alert('הדפדפן שלך לא תומך בשיתוף');
      }
    });
  };

  const answerOptions = answers[currentIndex];
  const progressWidth = `${((currentIndex + 1) / questions.length) * 100}%`;

  return (
    <div className="quiz-container">
      {!isSubmitted ? (
        <div className="Quiz">
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
              className={`${currentIndex === 0 ? 'button-disabled' : 'prev-button'}`}
              onClick={prevQuestion}
              disabled={currentIndex === 0}
            >
              שאלה קודמת
            </button>
            <button
              className={`${selectedAnswers[currentIndex] === undefined || currentIndex === questions.length - 1 ? 'button-disabled' : 'next-button'}`}
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
          <p className="user-name">שם: {firstName} {lastName}</p>
          {score >= 70 ? (
            <div>
              <p className='message'>מזל טוב!<br /> סיימת את הבוחן בהצלחה!</p>
              <button className='share-btn' onClick={captureAndShareScreenshot}>שתפו תוצאה עם צילום מסך</button>
              <button className='try-button' onClick={retryQuiz}>נסו שוב</button>
              <button onClick={onReset} className="reset-btn">להתחלת הלומדה מחדש</button>
            </div>
          ) : (
            <div>
              <p className='message'>אוי, לא נורא</p>
              <button className='try-btn' onClick={retryQuiz}>נסו שוב</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
