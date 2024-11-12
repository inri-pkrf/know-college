import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/Society.css';

const Cash = () => {
  const navigate = useNavigate(); 

  const handleNextClick = () => {
    navigate('/test'); 
  };

  return (
    <div id="society">
       <p class="titles-gray-soc" > קש"ח - קשרי חוץ  
    </p>
    <p class="blue-text-soc">אנחנו לגמרי בינלאומיים!</p>
    <p class="simple-text-soc">מעת לעת אנחנו מארחים משלחות ובעלי תפקידים בממשלות וצבאות מרחבי העולם, הבאים ארצה ללמוד על חוסנה של מדינת ישראל וניהול העורף בשעת חירום.
    </p>
    <img src={`${process.env.PUBLIC_URL}/assets/imgs/spain.jpg`} class="image-content-soc" />

    <p class="simple-text-soc" >כבר יצא לנו להיפגש עם שישה גנרלים מספרד, ראשת FEMA (רח"ל האמריקאית), נציגים בכירים ממשטרת שבדיה, קהילות יהודיות מרחבי העולם וגורמים נוספים, שבאים מכל היבשות לשמוע על קידום המוכנות ברשויות המקומיות, ההכשרות והאימונים - מכיתה י' ועד משרדי הממשלה. 
    </p>
    <p class="blue-text-soc" > עם איזה מדינות נפגשנו?</p>
      <p class="simple-text-soc" >שימו לב לדגלים בתנועה, זהו את הדגלים וכמות המדינות ואולי אפילו תרשמו לכם בצד -</p>
      <img src={`${process.env.PUBLIC_URL}/assets/imgs/flags.gif`} class="image-content" />
      <p class="grey-bold-soc" id="center-text">בטוח ספרת טוב? (זאת לגמרי שאלה שנשאל בבוחן סיום)</p>
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

export default Cash;
