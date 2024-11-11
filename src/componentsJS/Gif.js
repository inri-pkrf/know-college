import React from 'react';
import { useNavigate } from 'react-router-dom'; // הוספת ייבוא של useNavigate
import '../componentsCSS/Digital.css';

const Digital = () => {
  const navigate = useNavigate(); // יצירת פונקציה לניהול הניווט

  // פונקציה שתופעל בלחיצה על החץ
  const handleNextClick = () => {
    navigate('/gifPage'); // מבצע ניווט לכתובת הרצויה
  };

  return (
    <div id="gif">
   
    </div>
  );
};

export default Digital;
