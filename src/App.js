import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import Client from './components/Home/client';
import Slider from './components/Home/slider';
import Total from './components/body/Total';
import Footer from './components/Footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // الانتقال إلى أعلى الصفحة
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // لجعل الانتقال سلساً
    });
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Header darkMode={darkMode} />
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
      
      <Slider />
      <Client />
      <Total />
      <Footer />
    </div>
  );
}

export default App;
