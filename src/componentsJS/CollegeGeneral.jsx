import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/CollegeGeneral.css';

const CollegeGeneral = ({ onVisit }) => {
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
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // לא בודק שוב אחרי הופעה
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

  const handleNextClick = () => {
    navigate('/iron-swords-college');
  };

  // פונקציה להוספת רפרנסים לכל אלמנט
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div className="CollegeGeneral">
      <p className="titles-gray fade-in-collage" ref={addToRefs}>פעילות המכללה</p>
      <p className="blue-text fade-in-collage" ref={addToRefs}>ברוכים הבאים וברוכות הבאות למכללה הלאומית לאיתנות ישראלית</p>
      <p className="simple-text fade-in-collage" ref={addToRefs}>
        המכללה מכשירה מנהלים ומנהלות שיש להם תפקיד בשעת חירום ממשרדי הממשלה, רשויות ייעודיות, הרשויות המקומיות ובמפקדות צבאיות,
        לתפקוד מיטבי וניהול מצבי חירום כמו במצב מלחמה, טרור, אסון טבע, אסון אזרחי, מגיפה ועוד.
      </p>
      <img className="image-content fade-in-collage" ref={addToRefs} src={`${process.env.PUBLIC_URL}/assets/imgs/11ImgCollage.jpg`} alt="Collage Image" />
      
      <p className="simple-text fade-in-collage" ref={addToRefs}>
        המכללה הוקמה בכדי להוות בית להכשרות בתחום ניהול מצבי החירום. בניין אחד המרכז את כל מחלקות פקע"ר בשיתוף פעולה עם רשות החירום הלאומית (רח"ל).
      </p>
      <p className="blue-text fade-in-collage" ref={addToRefs}>למכללה ארבע מגמות:</p>
      <p className="grey-bold fade-in-collage" ref={addToRefs}>1. מגמת הכשרות</p>
      <p className="simple-text fade-in-collage" ref={addToRefs}>אחראית להכשיר מנהלים ומנהלות של המכלולים ברשויות המקומיות.</p>
      <p className="grey-bold fade-in-collage" ref={addToRefs}>2. מגמת משרדי ממשלה</p>
      <p className="simple-text fade-in-collage" ref={addToRefs}>מגמה בהובלת רח"ל, האחראית על הכשרת מנהלים ומנהלות במשרדים לחירום.</p>
      <p className="grey-bold fade-in-collage" ref={addToRefs}>3. מגמת אימוני מפקדות</p>
      <p className="simple-text fade-in-collage" ref={addToRefs}>הרגל הצבאית שלנו, מכשירה, מאמנת וחונכת את כל בעלי התפקידים במפקדה צבאית של פיקוד העורף.</p>
      <p className="grey-bold fade-in-collage" ref={addToRefs}>4. מגמת אימוני רשויות</p>
      <p className="simple-text fade-in-collage" ref={addToRefs}>אחראית לממש את מה שנלמד בהכשרה - באימון לפי תרחיש ועל-פי תוכנית מותאמת.</p>
      <img className="image-content fade-in-collage" ref={addToRefs} src={`${process.env.PUBLIC_URL}/assets/imgs/22ImgCollage.jpg`} alt="Collage Image" />
      
      <p className="grey-bold fade-in-collage" ref={addToRefs} id="important-text">
        כך נוצר מעגל ההכשרה השלם, המאפשר לנו לפגוש בבית אחד כמה שיותר בעלי תפקידים המנהלים מצבי חירום בתחומם
      </p>
      <img className="gif-content fade-in-collage" ref={addToRefs} src={`${process.env.PUBLIC_URL}/assets/imgs/collageGif.gif`} alt="Collage GIF" />
      <p className="simple-text fade-in-collage" ref={addToRefs}>
        אנחנו מייצרים פה שפה אחודה ומקדמים שיתופי פעולה עם מובילים מקצועיים ממשרדי הממשלה השונים, מרכז השלטון המקומי והאזורי,
        ארגוני חירום והצלה, מוסדות אקדמאים וארגונים מהחברה האזרחית.
      </p>
      <img className="image-content fade-in-collage" ref={addToRefs} src={`${process.env.PUBLIC_URL}/assets/imgs/infoCollage1.jpg`} alt="Info Collage" />
      
      <p className="simple-text fade-in-collage" ref={addToRefs}>
        אנחנו גם מכשירים צוותי סע"ר (סיוע עצמי ראשוני) של הרשות המקומית ותלמידי כיתות י' לחילוץ קל - בכדי שיוכלו לסייע באירוע חילוץ בסביבה שלהם, כמו במקרה של רעידת אדמה.
      </p>
      <img className="image-content fade-in-collage" ref={addToRefs} src={`${process.env.PUBLIC_URL}/assets/imgs/firefighters.jpg`} alt="Firefighters" />
      
      <p className="simple-text fade-in-collage" ref={addToRefs}>
        כיתות נבחרות מכל בתי הספר עוברות הכשרה של יומיים, בעוד צוותי הסע"ר לאחר ההכשרה, עוברים אימונים באתרי הרס בשיתוף ארגוני החירום הנוספים של הרשות.
      </p>
      <p className="blue-text fade-in-collage" ref={addToRefs}>מעניין, לא?</p>
      <p className="simple-text fade-in-collage" ref={addToRefs}>
        את כל זה יש לנו גם בסרטון קצר ומגניב, אז בואו נראה קצת מספרים.
        כדאי לנסות לזכור כמה שיותר פרטים, כי באיזשהו שלב תגיע שאלה..
      </p>
      <video className="fade-in-collage" ref={addToRefs} id="video" src={`${process.env.PUBLIC_URL}/assets/media/videoCollage.mp4`} controls></video>
      
      <p className="grey-bold fade-in-collage" ref={addToRefs} id="important-text">
        בראשות המכללה ניצבת מפקדת בדרגת אל"ם ולרשותה מטה מקצועי המורכב ממשרתי קבע, מילואים ויועצים. סגל המרצים כולל מומחים מקצועיים מפיקוד העורף,
        רח"ל, משרדי הממשלה, המינהל הציבורי והאקדמיה.
      </p>

      <img src={`${process.env.PUBLIC_URL}/assets/imgs/blueNextBtn.png`} id="next-btn" alt="Next Button" onClick={handleNextClick} />
      <div className="footer"></div>
    </div>
  );
};

export default CollegeGeneral;
