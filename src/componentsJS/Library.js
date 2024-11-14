import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/Library.css';

const Library = ({ onVisit }) => {
  const navigate = useNavigate(); 
  useEffect(() => {
    if (onVisit) {
      onVisit(); // קריאה לפונקציית העדכון כאשר הקומפוננטה נטענת
    }
  }, [onVisit]);

  const handleNextClick = () => {
    navigate('/society'); 
  };

  return (
    <div id="library">
         <p className="titles-gray-lib" > הספרייה הלאומית לחירום
    </p>
    <p className="blue-text-lib" >מאגר ידע לאומי לחירום
לחיזוק האיתנות של מדינת ישראל</p>
    <p className="simple-text-lib">אתר המכללה מרכז בתוכו גם את הספרייה הלאומית לחירום - מאגר ידע להיערכות, התערבות ושיקום.
    </p>
    <img className="image-content-lib" src={`${process.env.PUBLIC_URL}/assets/imgs/7ImgCollage.jpg`}
    />
    <p className="simple-text-lib" >הספרייה היא מאגר ידע דיגיטלי מעודכן וכולל כ-1,500 פרטי מידע, חוקים ותקנות, נהלים ותדריכים, תוכניות מענה, מאמרים ומחקרים, סרטים, קישורים ופודקאסטים.
    </p>
    <p className="blue-text-lib" >מובילי הידע
    </p>
    <p className="simple-text-lib" >הנגשת הידע ללא מגבלות מתגשם בזכות שיתוף פעולה פורה עם למעלה מ-75 ארגונים מהמגזר הציבורי כמו משרדי הממשלה, רשויות ייעודיות, הרשויות המקומיות, ארגוני חירום והצלה, אקדמיה ומכוני מחקר ופעילות המגזר השלישי. 
    </p>
    <img className="image-content-lib" src={`${process.env.PUBLIC_URL}/assets/imgs/libraryComp.png`} />
    <p className="simple-text-lib" >.בהתאם לצורך, ניתן לחפש קבצים בספרייה, לצפות, להוריד או לשתף
    צפו בסרטון הממש מגניב שלנו שמסביר בקצרה על הספרייה
    </p>
    <video id="video-lib" src={`${process.env.PUBLIC_URL}/assets/media/library.mp4`} controls ></video>
    <p className="blue-text-center" >כדאי לשמור את הקישור
    </p>
    <p className="simple-text-lib" id="text-center" >תמצאו בספרייה הרבה חומרים מקצועיים שבטוח תצטרכו בשגרה ובחירום. 
    </p>
      <a id="link-lib" href="https://inri.orc.org.il/%D7%94%D7%A1%D7%A4%D7%A8%D7%99%D7%99%D7%94-%D7%94%D7%9C%D7%90%D7%95%D7%9E%D7%99%D7%AA-%D7%9C%D7%97%D7%99%D7%A8%D7%95%D7%9D/" target="_blank">
        מעבר לספרייה
      </a>
    
      <img
        src={`${process.env.PUBLIC_URL}/assets/imgs/blueNextBtn.png`}
        id="next-btn-lib"
        alt="Next Button"
        onClick={handleNextClick}
      />
          <div className="footer-lib"></div>

    </div>
  );
};

export default Library;
