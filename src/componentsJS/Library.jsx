import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/Library.css';

const Library = ({ onVisit }) => {
  const navigate = useNavigate(); 
  const elementsRef = useRef([]);

  useEffect(() => {
    if (onVisit) {
      onVisit();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 } 
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [onVisit]);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  const handleNextClick = () => {
    navigate('/society'); 
  };

  return (
    <div className="Library">
      <p className="titles-gray-lib fade-in-library" ref={addToRefs}>הספרייה הלאומית לחירום</p>
      <p className="blue-text-lib fade-in-library" ref={addToRefs}>מאגר ידע לאומי לחירום לחיזוק האיתנות של מדינת ישראל</p>
      <p className="simple-text-lib fade-in-library" ref={addToRefs}>
        אתר המכללה מרכז בתוכו גם את הספרייה הלאומית לחירום - מאגר ידע להיערכות, התערבות ושיקום.
      </p>
      <img className="image-content-lib fade-in-library" ref={addToRefs} src={`${process.env.PUBLIC_URL}/assets/imgs/7ImgCollage.jpg`} alt="Library" />
      <p className="simple-text-lib fade-in-library" ref={addToRefs}>
        הספרייה היא מאגר ידע דיגיטלי מעודכן וכולל כ-1,500 פרטי מידע, חוקים ותקנות, נהלים ותדריכים, תוכניות מענה, מאמרים ומחקרים, סרטים, קישורים ופודקאסטים.
      </p>
      <p className="blue-text-lib fade-in-library" ref={addToRefs}>מובילי הידע</p>
      <p className="simple-text-lib fade-in-library" ref={addToRefs}>
        הנגשת הידע ללא מגבלות מתגשם בזכות שיתוף פעולה פורה עם למעלה מ-75 ארגונים מהמגזר הציבורי כמו משרדי הממשלה, רשויות ייעודיות, הרשויות המקומיות, ארגוני חירום והצלה, אקדמיה ומכוני מחקר ופעילות המגזר השלישי. 
      </p>
      <img className="image-content-lib fade-in-library" ref={addToRefs} src={`${process.env.PUBLIC_URL}/assets/imgs/libraryComp.png`} alt="Library Comp" />
      <p className="simple-text-lib fade-in-library" ref={addToRefs}>
        בהתאם לצורך, ניתן לחפש קבצים בספרייה, לצפות, להוריד או לשתף. צפו בסרטון שלנו שמסביר בקצרה על הספרייה
      </p>
      <video className="fade-in-library" ref={addToRefs} id="video-lib" src={`${process.env.PUBLIC_URL}/assets/media/library.mp4`} controls></video>
      <p className="blue-text-center fade-in-library" ref={addToRefs}>כדאי לשמור את הקישור</p>
      <p className="simple-text-lib fade-in-library" ref={addToRefs} id="text-center">
        תמצאו בספרייה הרבה חומרים מקצועיים שבטוח תצטרכו בשגרה ובחירום. 
      </p>
      <a className="fade-in-library" ref={addToRefs} id="link-lib" href="https://inri.orc.org.il/%D7%94%D7%A1%D7%A4%D7%A8%D7%99%D7%99%D7%94-%D7%94%D7%9C%D7%90%D7%95%D7%9E%D7%99%D7%AA-%D7%9C%D7%97%D7%99%D7%A8%D7%95%D7%9D/" target="_blank" rel="noopener noreferrer">
        מעבר לספרייה
      </a>
      <img
        className="fade-in-library"
        src={`${process.env.PUBLIC_URL}/assets/imgs/blueNextBtn.png`}
        id="next-btn-lib"
        alt="Next Button"
        onClick={handleNextClick}
        ref={addToRefs}
      />
      <div className="footer-lib fade-in-library" ref={addToRefs}></div>
    </div>
  );
};

export default Library;
