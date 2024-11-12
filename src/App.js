import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './componentsJS/Home';
import Intro from './componentsJS/Intro';
import Header from './componentsJS/Header';
import CollegeGeneral from './componentsJS/CollegeGeneral';
import War from './componentsJS/War';
import Digital from './componentsJS/Digital';
import Gif from './componentsJS/Gif';
import Library from './componentsJS/Library';
import Cash from './componentsJS/Society';

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
                <Route path="/socaity" element={<Cash />} />
            </Routes>
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
