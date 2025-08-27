// War.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/War.css';

const War = ({ onVisit }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (onVisit) {
      onVisit();
    }
  }, [onVisit]);

  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-in-war");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // כמה אחוז מהאלמנט צריך להיות גלוי
    );

    fadeEls.forEach((el) => observer.observe(el));

    return () => {
      fadeEls.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleNextClick = () => {
    navigate('/digital-assets');
  };

  return (
    <div className="War">
      <p className="titles-red fade-in-war">המכללה בחרבות ברזל</p>
      <p className="red-bold fade-in-war">7 באוקטובר</p>
      <p className="red-text fade-in-war">
        עם פרוץ המלחמה והכרזת 'מצב מיוחד בעורף', עברה המכללה להפעלה במצב חירום.
      </p>
      <p className="simple-text-war fade-in-war">
        נתחיל עם סרטון שיעשה רעש ויעלה את הדופק, ומשם נפרט קצת מה עשינו כדי שתהיו בעניינים -
      </p>
      <video
        id="video"
        src={`${process.env.PUBLIC_URL}/assets/media/war.mp4`}
        controls
        className="fade-in-war"
      ></video>

      <p className="simple-text-war fade-in-war">
        במסגרת מאמצי הפיקוד, הובילה המכללה שני מוקדי סיוע לאומיים - המרס"ל (מרכז סיוע לאזרח) שמקדם תהליך של מיצוי יכולות בתוך פקע"ר בהתאם להכוונת הסיוע לרשויות המקומיות, והשני, משל"ט ינאי, שריכז את משימת המפונים והמתפנים בבתי המלון וסיפק תמונת מצב לאומית.
      </p>

      <div className="image-container fade-in-war">
        <img
          className="image-content"
          src={`${process.env.PUBLIC_URL}/assets/imgs/warImage1.jpg`}
          alt="War Image 1"
        />
        <p className="image-discription">ביקור נשיא המדינה ורעייתו במרס"ל</p>
      </div>

      <p className="red-bold fade-in-war">מרס"ל</p>
      <p className="simple-text-war fade-in-war">
        במהלך הפעלת המרס"ל מאוקטובר 2023 עד פברואר 2024, טיפלו במרס"ל בלמעלה מ-700 פניות שעלו מהמחוזות בתחומים שונים כמו אספקת מנות מזון, חיתולים, מטרנה, מתנדבים, שינוע תרופות ועוד משימות ייחודיות וערכיות, שלא ניתן להן כל מענה ממקורות אחרים.
      </p>

      <div className="image-container fade-in-war">
        <img
          className="image-content"
          src={`${process.env.PUBLIC_URL}/assets/imgs/warImage2.jpg`}
          alt="War Image 2"
        />
        <p className="image-discription">ביקור הרמטכ"ל במשל"ט</p>
      </div>

      <p className="red-bold fade-in-war">משלט ינאי</p>
      <p className="simple-text-war fade-in-war">
 אפשר לומר שחוץ מראש הממשלה כולם הגיעו לבקר - מהנשיא ורעייתו, הרמטכ"ל, שרים, מנכ"לי משרדי ממשלה, אלופי המטכ"ל ועוד.
        המשל"ט ניהל, ריכז ותכלל את תמונת המצב של המפונים בבתי המלון עם למעלה מרבע מיליון ישראלים שיצאו מביתם, 97 יישובים מתפנים ו-456 מלונות בשיא.      </p>

      <p className="red-bold fade-in-war">המכללה בחירום</p>
      <p className="simple-text-war fade-in-war">
        לצד שתי המשימות הלאומיות, המכללה המשיכה להכשיר בחירום קורסים לבעלי תפקידים שהיו נחוצים בשטח, הנגשנו תוכן מקצועי ומתוקף לבעלי התפקידים ברשויות, ביצענו 'זמן יקר' במפקדות, הפצנו תוכן דיגיטלי לצוותי הצח"י ומנהלי המכלולים, ערכנו אבחון לקריית שמונה לסיוע בהתמודדות הרשות עם אתגרי הפינוי ופיצול הרשות ועוד פעולות רבות כחלק מהמאמץ המלחמתי בעורף.
      </p>

      <img
        src={`${process.env.PUBLIC_URL}/assets/imgs/blueNextBtn.png`}
        id="next-btn"
        alt="Next Button"
        onClick={handleNextClick}
        className="fade-in-war"
      />

      <div className="footer-war"></div>
    </div>
  );
};

export default War;
