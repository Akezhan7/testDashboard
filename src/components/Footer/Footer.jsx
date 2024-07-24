import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
const Footer = () => {
  return (
    <footer className='footer'>
      <nav>
        <ul>
        <li><Button variant="contained"><Link to="/">Главная</Link></Button></li>
          <li><Button variant="contained"><Link to="/employees">Сотрудники</Link></Button></li>
          <li><Button variant="contained"><Link to="/profile">Профиль</Link></Button></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
