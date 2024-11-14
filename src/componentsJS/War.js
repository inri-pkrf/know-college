import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // הוספת ייבוא של useNavigate
import '../componentsCSS/War.css';

const War = ({ onVisit }) => {
  const navigate = useNavigate(); // יצירת פונקציה לניהול הניווט

  useEffect(() => {
    if (onVisit) {
      onVisit(); // קריאה לפונקציית העדכון כאשר הקומפוננטה נטענת
    }
  }, [onVisit]);

  const handleNextClick = () => {
    navigate('/digital-assets'); // מבצע ניווט לכתובת הרצויה
  };

  return (
    <div id="war">
    <p className="titles-red">המכללה בחרבות ברזל</p>
    <p className="red-bold">7 באוקטובר</p>
    <p className="red-text">
      עם פרוץ המלחמה והכרזת 'מצב מיוחד בעורף', עברה המכללה להפעלה במצב חירום.
    </p>
    <p className="simple-text-war">
      נתחיל עם סרטון שיעשה רעש ויעלה את הדופק, ומשם נפרט קצת מה עשינו כדי שתהיו בעניינים -
    </p>
    <video id="video" src={`${process.env.PUBLIC_URL}/assets/media/war.mp4`} controls></video>
  
    <p className="simple-text-war">
      במסגרת מאמצי הפיקוד, הובילה המכללה שני מוקדי סיוע לאומיים - המרס"ל (מרכז סיוע לאזרח) שמקדם תהליך של מיצוי יכולות בתוך פקע"ר בהתאם להכוונת הסיוע לרשויות המקומיות, והשני, משל"ט ינאי, שריכז את משימת המפונים והמתפנים בבתי המלון וסיפק תמונת מצב לאומית.
    </p>
    
    <div className="image-container">
      <img className="image-content" src={`${process.env.PUBLIC_URL}/assets/imgs/warImage1.jpg`} alt="War Image 1"/>
      <p className="image-discription">ביקור נשיא המדינה ורעייתו במרס"ל</p>
    </div>
  
    <p className="red-bold">מרס"ל</p>
    <p className="simple-text-war">
      המרס"ל (מרכז סיוע לאזרח) מרכז במרחב משותף את מחוזות פקע"ר, ארגוני ההתנדבות ונציגים מהמגזר העסקי, המייצג כ-2,000,000 עובדים במשק. מנגנון הפעולה מאפשר למחוזות פיקוד העורף להעלות בקשות לסיוע ובמקרה ולא נמצא להן מענה אחר במרחבן, עולה הבקשה לרמה הפיקודית, לטיפול במשאבים לאומיים.
    </p>
    <p className="simple-text-war">
      במהלך הפעלת המרס"ל מאוקטובר 2023 עד פברואר 2024, טיפלו במרס"ל בלמעלה מ-700 פניות שעלו מהמחוזות בתחומים שונים כמו אספקת מנות מזון, חיתולים, מטרנה, מתנדבים, שינוע תרופות ועוד משימות ייחודיות וערכיות, שלא ניתן להן כל מענה ממקורות אחרים.
    </p>
    
    <div className="image-container">
      <img className="image-content" src={`${process.env.PUBLIC_URL}/assets/imgs/warImage2.jpg`} alt="War Image 2"/>
      <p className="image-discription">ביקור הרמטכ"ל במשל"ט</p>
    </div>
  
    <p className="red-bold">משלט ינאי</p>
    <p className="simple-text-war">
      אפשר לומר שחוץ מראש הממשלה כולם הגיעו לבקר - מהנשיא ורעייתו, הרמטכ"ל, שרים, מנכ"לי משרדי ממשלה, אלופי המטכ"ל ועוד.
      המשל"ט ניהל, ריכז ותכלל את תמונת המצב של המפונים בבתי המלון עם למעלה מרבע מיליון ישראלים שיצאו מביתם, 97 יישובים מתפנים ו-456 מלונות בשיא.
    </p>
  
    <p className="red-bold">המכללה בחירום</p>
    <p className="simple-text-war">
      לצד שתי המשימות הלאומיות, המכללה המשיכה להכשיר בחירום קורסים לבעלי תפקידים שהיו נחוצים בשטח, הנגשנו תוכן מקצועי ומתוקף לבעלי התפקידים ברשויות, ביצענו 'זמן יקר' במפקדות, הפצנו תוכן דיגיטלי לצוותי הצח"י ומנהלי המכלולים, ערכנו אבחון לקריית שמונה לסיוע בהתמודדות הרשות עם אתגרי הפינוי ופיצול הרשות ועוד פעולות רבות כחלק מהמאמץ המלחמתי בעורף.
    </p>
    <img src={`${process.env.PUBLIC_URL}/assets/imgs/blueNextBtn.png`} id="next-btn" alt="Next Button" onClick={handleNextClick} />
    <div className="footer-war"></div>
  
  </div>
  
  );
};

export default War;
