import React from 'react';
import { useNavigate } from 'react-router-dom'; // הוספת ייבוא של useNavigate
import '../componentsCSS/CollegeGeneral.css';

const CollegeGeneral = () => {
  const navigate = useNavigate(); // יצירת פונקציה לניהול הניווט

  // פונקציה שתופעל בלחיצה על החץ
  const handleNextClick = () => {
    navigate('/iron-swords-college'); // מבצע ניווט לכתובת הרצויה
  };

  return (
    <div id="college-general">
      <p className="titles-gray">פעילות המכללה</p>
      <p className="blue-text">ברוכים הבאים וברוכות הבאות למכללה הלאומית לאיתנות ישראלית</p>
      <p className="simple-text">
        המכללה מכשירה מנהלים ומנהלות שיש להם תפקיד בשעת חירום ממשרדי הממשלה, רשויות ייעודיות, הרשויות המקומיות ובמפקדות צבאיות,
        לתפקוד מיטבי וניהול מצבי חירום כמו במצב מלחמה, טרור, אסון טבע, אסון אזרחי, מגיפה ועוד.
      </p>
      <img className="image-content" src={`${process.env.PUBLIC_URL}/assets/imgs/11ImgCollage.jpg`} alt="Collage Image" />
      <p className="simple-text">
        המכללה הוקמה בכדי להוות בית להכשרות בתחום ניהול מצבי החירום. בניין אחד המרכז את כל מחלקות פקע"ר בשיתוף פעולה עם רשות החירום הלאומית (רח"ל).
      </p>
      <p className="blue-text">למכללה ארבע מגמות:</p>
      <p className="grey-bold">1. מגמת הכשרות</p>
      <p className="simple-text">אחראית להכשיר מנהלים ומנהלות של המכלולים ברשויות המקומיות.</p>
      <p className="grey-bold">2. מגמת משרדי ממשלה</p>
      <p className="simple-text">מגמה בהובלת רח"ל, האחראית על הכשרת מנהלים ומנהלות במשרדים לחירום.</p>
      <p className="grey-bold">3. מגמת אימוני מפקדות</p>
      <p className="simple-text">הרגל הצבאית שלנו, מכשירה, מאמנת וחונכת את כל בעלי התפקידים במפקדה צבאית של פיקוד העורף.</p>
      <p className="grey-bold">4. מגמת אימוני רשויות</p>
      <p className="simple-text">אחראית לממש את מה שנלמד בהכשרה - באימון לפי תרחיש ועל-פי תוכנית מותאמת.</p>
      <img className="image-content" src={`${process.env.PUBLIC_URL}/assets/imgs/22ImgCollage.jpg`} alt="Collage Image" />
      <p className="grey-bold" id="important-text">
        כך נוצר מעגל ההכשרה השלם, המאפשר לנו לפגוש בבית אחד כמה שיותר בעלי תפקידים המנהלים מצבי חירום בתחומם
      </p>
      <img className="gif-content" src={`${process.env.PUBLIC_URL}/assets/imgs/collageGif.gif`} alt="Collage GIF" />
      <p className="simple-text">
        אנחנו מייצרים פה שפה אחודה ומקדמים שיתופי פעולה עם מובילים מקצועיים ממשרדי הממשלה השונים, מרכז השלטון המקומי והאזורי,
        ארגוני חירום והצלה, מוסדות אקדמאים וארגונים מהחברה האזרחית.
      </p>
      <img className="image-content" src={`${process.env.PUBLIC_URL}/assets/imgs/infoCollage1.jpg`} alt="Info Collage" />
      <p className="simple-text">
        אנחנו גם מכשירים צוותי סע"ר (סיוע עצמי ראשוני) של הרשות המקומית ותלמידי כיתות י' לחילוץ קל - בכדי שיוכלו לסייע באירוע חילוץ בסביבה שלהם, כמו במקרה של רעידת אדמה.
      </p>
      <img className="image-content" src={`${process.env.PUBLIC_URL}/assets/imgs/firefighters.jpg`} alt="Firefighters" />
      <p className="simple-text">
        כיתות נבחרות מכל בתי הספר עוברות הכשרה של יומיים, בעוד צוותי הסע"ר לאחר ההכשרה, עוברים אימונים באתרי הרס בשיתוף ארגוני החירום הנוספים של הרשות.
      </p>
      <p className="blue-text">מעניין, לא?</p>
      <p className="simple-text">
        את כל זה יש לנו גם בסרטון קצר ומגניב, אז בואו נראה קצת מספרים.
        כדאי לנסות לזכור כמה שיותר פרטים, כי באיזשהו שלב תגיע שאלה..
      </p>
      <video id="video" src={`${process.env.PUBLIC_URL}/assets/media/videoCollage.mp4`} controls></video>
      <p className="grey-bold" id="important-text">
        בראשות המכללה ניצבת מפקדת בדרגת אל"ם ולרשותה מטה מקצועי המורכב ממשרתי קבע, מילואים ויועצים. סגל המרצים כולל מומחים מקצועיים מפיקוד העורף,
        רח"ל, משרדי הממשלה, המינהל הציבורי והאקדמיה.
      </p>
      <img src={`${process.env.PUBLIC_URL}/assets/imgs/blueNextBtn.png`} id="next-btn" alt="Next Button" onClick={handleNextClick} />
      <div className="footer"></div>
    </div>
  );
};

export default CollegeGeneral;
