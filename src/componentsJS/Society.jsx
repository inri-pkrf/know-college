import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/Society.css';

const Society = ({ onVisit }) => {
  const navigate = useNavigate(); 

  useEffect(() => {
    if (onVisit) {
      onVisit(); // קריאה לפונקציית העדכון כאשר הקומפוננטה נטענת
    }
  }, [onVisit]);

  const handleNextClick = () => {
    navigate('/final'); 
  };

  return (
    <div id="society">
       <p className="titles-gray-soc" > קש"ח - קשרי חוץ  
    </p>
    <p className="blue-text-soc">אנחנו לגמרי בינלאומיים!</p>
    <p className="simple-text-soc">מעת לעת אנחנו מארחים משלחות ובעלי תפקידים בממשלות וצבאות מרחבי העולם, הבאים ארצה ללמוד על חוסנה של מדינת ישראל וניהול העורף בשעת חירום.
    </p>
    <img src={`${process.env.PUBLIC_URL}/assets/imgs/spain.jpg`} className="image-content-soc" />

    <p className="simple-text-soc" >כבר יצא לנו להיפגש עם שישה גנרלים מספרד, ראשת FEMA (רח"ל האמריקאית), נציגים בכירים ממשטרת שבדיה, קהילות יהודיות מרחבי העולם וגורמים נוספים, שבאים מכל היבשות לשמוע על קידום המוכנות ברשויות המקומיות, ההכשרות והאימונים - מכיתה י' ועד משרדי הממשלה. 
    </p>
    <p className="blue-text-soc" > עם איזה מדינות נפגשנו?</p>
      <p className="simple-text-soc" >שימו לב לדגלים בתנועה, זהו את הדגלים וכמות המדינות ואולי אפילו תרשמו לכם בצד -</p>
      <img src={`${process.env.PUBLIC_URL}/assets/imgs/flags.gif`} className="image-content" />
      <p className="grey-bold-soc" id="center-text">בטוח ספרת טוב? (זאת לגמרי שאלה שנשאל בבוחן סיום)</p>
      <img
        src={`${process.env.PUBLIC_URL}/assets/imgs/blueNextBtn.png`}
        id="next-btn-soc"
        alt="Next Button"
        onClick={handleNextClick}
      />
          <div className="footer-soc"></div>

    </div>
  );
};

export default Society;
