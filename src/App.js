
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('light')
  const toogleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      document.body.style.backgroundColor = 'rgb(174, 245, 244)';
    }
    else {
      setTheme('dark')
      document.body.style.backgroundColor = 'rgb(10, 79, 107)';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="ThunderText" mode={theme} toogle={toogleTheme} />
        <div className="container my-3">


          <TextForm heading="Enter the text to edit" mode={theme} toogle={toogleTheme} />

          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
