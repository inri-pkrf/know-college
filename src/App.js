import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // השתמש ב-HashRouter
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
  return (
    <div className="App">
      <Header className="header-fixed" />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/college-info" element={<CollegeGeneral />} />
        <Route path="/iron-swords-college" element={<War />} />
        <Route path="/digital-assets" element={<Digital />} />
        <Route path="/gif-page" element={<Gif />} />
        <Route path="/emergency-library" element={<Library />} />
        <Route path="/society" element={<Society />} />
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
