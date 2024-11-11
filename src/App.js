import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './componentsJS/Home';
import Intro from './componentsJS/Intro';
import Header from './componentsJS/Header';
import CollegeGeneral from './componentsJS/CollegeGeneral';
import War from './componentsJS/War';
import Digital from './componentsJS/Digital';

function App() {
    return (
        <div className="App">
            <Header className="header-fixed" />
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/home" element={<Home className="home" />} />
                <Route path="/college-info" element={<CollegeGeneral  />} />
                <Route path="/iron-swords-college" element={<War  />} />
                <Route path="/digital-assets" element={<Digital  />} />
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
