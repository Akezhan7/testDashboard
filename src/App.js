import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Employees from './components/Employees/Employess';
import Profile from './components/Profile/Profile';
import './App.css';

const telegram = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    telegram.ready();
  })

  return (
    <Router>
      <div className="App">
          <div className='container'>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/employees" element={<Employees/>} />
              <Route path="/profile" element={<Profile/>} />
            </Routes>
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
