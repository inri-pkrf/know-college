import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // השתמש ב-HashRouter
import './App.css';
import Home from './componentsJS/Home';
import Intro from './componentsJS/Intro';
import Header from './componentsJS/Header';
import CollegeGeneral from './componentsJS/CollegeGeneral';
import War from './componentsJS/War';
import Digital from './componentsJS/Digital';
import Gif from './componentsJS/Gif';
import Library from './componentsJS/Library';
import Society from './componentsJS/Society';
import FinalScreen from './componentsJS/FinalScreen';
import Quiz from './componentsJS/Quiz';

function App() {
  const navigate = useNavigate();
  const [visitedPages, setVisitedPages] = useState([]); // מעקב אחרי העמודים שביקרנו בהם

  const allPages = [
    "/home", 
    "/college-info", 
    "/iron-swords-college", 
    "/digital-assets", 
    "/gif-page", 
    "/emergency-library", 
    "/society"
  ];

  // הפונקציה שתתעדכן אחרי כל ביקור בעמוד
  const handlePageVisit = (page) => {
    if (!visitedPages.includes(page)) {
      const updatedPages = [...visitedPages, page];
      setVisitedPages(updatedPages);
      // שמירה ב-sessionStorage על הביקורים
      sessionStorage.setItem('visitedPages', JSON.stringify(updatedPages));
    }
  };

  useEffect(() => {
    // אם כל העמודים בוקרו, נעבור ל-final
    if (allPages.every(p => visitedPages.includes(p))) {
      navigate("/final");
    }
  }, [visitedPages, navigate]);

  return (
    <div className="App">
      <Header className="header-fixed" />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home onVisit={() => handlePageVisit("/home")} />} />
        <Route path="/college-info" element={<CollegeGeneral onVisit={() => handlePageVisit("/college-info")} />} />
        <Route path="/iron-swords-college" element={<War onVisit={() => handlePageVisit("/iron-swords-college")} />} />
        <Route path="/digital-assets" element={<Digital onVisit={() => handlePageVisit("/digital-assets")} />} />
        <Route path="/gif-page" element={<Gif onVisit={() => handlePageVisit("/gif-page")} />} />
        <Route path="/emergency-library" element={<Library onVisit={() => handlePageVisit("/emergency-library")} />} />
        <Route path="/society" element={<Society onVisit={() => handlePageVisit("/society")} />} />
        <Route path="/final" element={<FinalScreen />} />
        <Route path="/test" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
