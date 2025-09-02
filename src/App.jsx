import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
  const [visitedPages, setVisitedPages] = useState(
    JSON.parse(sessionStorage.getItem('visitedPages')) || []
  );

  const allPages = [
    "/home", 
    "/college-info", 
    "/iron-swords-college", 
    "/digital-assets", 
    "/gif-page", 
    "/emergency-library", 
    "/society"
  ];

  const handlePageVisit = (page) => {
    if (!visitedPages.includes(page)) {
      const updatedPages = [...visitedPages, page];
      setVisitedPages(updatedPages);
      sessionStorage.setItem('visitedPages', JSON.stringify(updatedPages));
      console.log("Visited Pages:", updatedPages);
    }
  };


  const resetProgress = () => {
    sessionStorage.removeItem('visitedPages'); // איפוס ה-sessionStorage
    setVisitedPages([]); // איפוס הסטייט
    navigate("/"); // חזרה לעמוד הפתיחה
  };
  


  return (
    <div className="App">
      <Header className="header-fixed" />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home onVisit={handlePageVisit} />} />
        <Route path="/college-info" element={<CollegeGeneral onVisit={() => handlePageVisit("/college-info")} />} />
        <Route path="/iron-swords-college" element={<War onVisit={() => handlePageVisit("/iron-swords-college")} />} />
        <Route path="/digital-assets" element={<Digital onVisit={() => handlePageVisit("/digital-assets")} />} />
        <Route path="/gif-page" element={<Gif onVisit={() => handlePageVisit("/gif-page")} />} />
        <Route path="/emergency-library" element={<Library onVisit={() => handlePageVisit("/emergency-library")} />} />
        <Route path="/society" element={<Society onVisit={() => handlePageVisit("/society")} />} />
        <Route path="/final" element={<FinalScreen />} />
        <Route path="/test" element={<Quiz onReset={resetProgress} />} />
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
