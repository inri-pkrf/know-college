import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/Digital.css';

const Digital = ({ onVisit }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (onVisit) {
      onVisit(); // קריאה לפונקציית העדכון כאשר הקומפוננטה נטענת
    }
  }, [onVisit]);

  const handleNextClick = () => {
    navigate('/gif-page');
  };

  return (
    <div id="digital">
      <p className="titles-gray-digital">נכסים דיגיטליים של המכללה</p>
      <p className="grey-bold-digital">המכללה עברה בשנתיים האחרונות טרנספורמציה דיגיטלית, עם הנגשה משמעותית של ידע בשעת חירום לצד שיפור תהליכים בשגרה, שהפכו קלים, קצרים ומהירים יותר.</p>
      <img className="image-content-digital" src={`${process.env.PUBLIC_URL}/assets/imgs/collage-comp.png`} alt="Digital Transformation" />
      <p className="blue-text-digital">ידע ומידע - הכל באתר המכללה</p>
      <p className="simple-text-digital">באתר המכללה ניתן להירשם ולקבל מידע על כל ההכשרות שלנו לבעלי תפקידים במשרדי הממשלה, הרשויות המקומיות ובמפקדות צבאיות.</p>
      <a id="link-digital" href="https://inri.orc.org.il/" target="_blank" rel="noopener noreferrer">
        מעבר לאתר
      </a>
      <p className="simple-text-digital" id="cute-text-digital">בואו לעשות לנו לייק ולעקוב אחרינו ברשתות החברתיות, אתם גם ככה שם :)</p>
      <p className="grey-big-center-digital">המכללה ברשתות</p>
      <span className="brands-digital">
        <a href="https://www.facebook.com/ilResilience" target="_blank" rel="noopener noreferrer"><img className="brand-digital" src={`${process.env.PUBLIC_URL}/assets/imgs/facebook.png`} alt="Facebook" /></a>
        <a href="https://x.com/ILresilience" target="_blank" rel="noopener noreferrer"><img className="brand-digital" src={`${process.env.PUBLIC_URL}/assets/imgs/twitter.png`} alt="Twitter" /></a>
        <a href="https://www.instagram.com/ilresilience/" target="_blank" rel="noopener noreferrer"><img className="brand-digital" src={`${process.env.PUBLIC_URL}/assets/imgs/instagram.png`} alt="Instagram" /></a>
        <a href="https://il.linkedin.com/company/ilresilience?trk=similar-pages" target="_blank" rel="noopener noreferrer"><img className="brand-digital" src={`${process.env.PUBLIC_URL}/assets/imgs/linkedin.png`} alt="LinkedIn" /></a>
      </span>
      <p className="green-text-digital">מידע על הכשרות צבאיות, נתונים היסטוריים ותוכן מקצועי</p>
      <p className="simple-text-digital">המידע הצבאי במרחב המכללה מכיל את ׳אתר שיתוף הידע׳ המסייע לשימור ידע של קורסים, מופעים ומצגות.
      האתר נגיש לכל מי שברשותו גישה למחשב צבאי, דרך צהלנ״ט כותבים בחיפוש: ׳אתר שיתוף הידע׳.</p>
      <img className="image-content-neve-digital" src={`${process.env.PUBLIC_URL}/assets/imgs/neve.png`} alt="Neve Digital" />
      <p className="orange-text-digital">יש לנו אפילו רשות מקומית דיגיטלית!</p>
      <p className="simple-text-digital">הכירו את נווה איתנים - הרשות הכי מוכנה במדינה :) 
      בתוך מערכות השליטה והבקרה הזמינות לבעלי תפקידים בשעת חירום, הקמנו רשות מקוונת שניתן להתאמן עליה במגוון תרחישים.</p>
      <img src={`${process.env.PUBLIC_URL}/assets/imgs/blueNextBtn.png`} id="next-btn" alt="Next Button" onClick={handleNextClick} />
      <div className="footer-war"></div>
    </div>
  );
};

export default Digital;
