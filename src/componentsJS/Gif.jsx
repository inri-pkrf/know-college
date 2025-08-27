import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/Gif.css';

const Gif = () => {
  const navigate = useNavigate(); 

  const handleNextClick = () => {
    navigate('/emergency-library'); 
  };

  return (
    <div id="gif">
      <img className="image-content-gif" src={`${process.env.PUBLIC_URL}/assets/imgs/carry.gif`} alt="Carry GIF" />
      <p className="grey-bold-gif">אז לסיכום, לייק ועוברים הלאה :) קדימה, אנחנו מחכים..</p>
      <span className="brands-gif">
        <a href="https://www.facebook.com/ilResilience" target="_blank" rel="noopener noreferrer">
          <img className="brand-gif" src={`${process.env.PUBLIC_URL}/assets/imgs/facebook.png`} alt="Facebook" />
        </a>
        <a href="https://x.com/ILresilience" target="_blank" rel="noopener noreferrer">
          <img className="brand-gif" src={`${process.env.PUBLIC_URL}/assets/imgs/twitter.png`} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/ilresilience/" target="_blank" rel="noopener noreferrer">
          <img className="brand-gif" src={`${process.env.PUBLIC_URL}/assets/imgs/instagram.png`} alt="Instagram" />
        </a>
        <a href="https://il.linkedin.com/company/ilresilience?trk=similar-pages" target="_blank" rel="noopener noreferrer">
          <img className="brand-gif" src={`${process.env.PUBLIC_URL}/assets/imgs/linkedin.png`} alt="LinkedIn" />
        </a>
      </span>
      <img
        src={`${process.env.PUBLIC_URL}/assets/imgs/blueNextBtn.png`}
        id="next-btn-gif"
        alt="Next Button"
        onClick={handleNextClick}
      />
          <div className="footer-gif"></div>

    </div>
  );
};

export default Gif;
