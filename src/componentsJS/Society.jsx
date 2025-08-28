import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/Society.css';

const Society = ({ onVisit }) => {
  const navigate = useNavigate(); 
  const elementsRef = useRef([]);

  useEffect(() => {
    if (onVisit) {
      onVisit(); // קריאה לפונקציה חיצונית
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
      { threshold: 0.1 } // מופעל כשהאלמנט 10% בתוך המסך
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
    navigate('/final'); 
  };

  return (
    <div className="Society">
      <p className="titles-gray-soc fade-in-society" ref={addToRefs}>קש"ח - קשרי חוץ</p>
      <p className="blue-text-soc fade-in-society" ref={addToRefs}>אנחנו לגמרי בינלאומיים!</p>
      <p className="simple-text-soc fade-in-society" ref={addToRefs}>
        מעת לעת אנחנו מארחים משלחות ובעלי תפקידים בממשלות וצבאות מרחבי העולם, הבאים ארצה ללמוד על חוסנה של מדינת ישראל וניהול העורף בשעת חירום.
      </p>
      <img src={`${process.env.PUBLIC_URL}/assets/imgs/spain.jpg`} className="image-content-soc fade-in-society" ref={addToRefs} alt="Spain" />

      <p className="simple-text-soc fade-in-society" ref={addToRefs}>
        כבר יצא לנו להיפגש עם שישה גנרלים מספרד, ראשת FEMA (רח"ל האמריקאית), נציגים בכירים ממשטרת שבדיה, קהילות יהודיות מרחבי העולם וגורמים נוספים, שבאים מכל היבשות לשמוע על קידום המוכנות ברשויות המקומיות, ההכשרות והאימונים - מכיתה י' ועד משרדי הממשלה. 
      </p>
      <p className="blue-text-soc fade-in-society" ref={addToRefs}>עם איזה מדינות נפגשנו?</p>
      <p className="simple-text-soc fade-in-society" ref={addToRefs}>
        שימו לב לדגלים בתנועה, זהו את הדגלים וכמות המדינות ואולי אפילו תרשמו לכם בצד -
      </p>
      <img src={`${process.env.PUBLIC_URL}/assets/imgs/flags.gif`} className="image-content fade-in-society" ref={addToRefs} alt="Flags" />
      <p className="grey-bold-soc fade-in-society" ref={addToRefs} id="center-text">
        בטוח ספרת טוב? (זאת לגמרי שאלה שנשאל בבוחן סיום)
      </p>
      <img
        src={`${process.env.PUBLIC_URL}/assets/imgs/blueNextBtn.png`}
        id="next-btn-soc"
        alt="Next Button"
        onClick={handleNextClick}
        className="fade-in-society"
        ref={addToRefs}
      />
      <div className="footer-soc fade-in-society" ref={addToRefs}></div>
    </div>
  );
};

export default Society;
