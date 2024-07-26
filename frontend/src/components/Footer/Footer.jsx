import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const Footer = () => {
  return (
    <footer className='footer'>
      <nav>
        <ul>
        <li><Link to="/"><HomeIcon sx={{ color: '#0011ff', fontSize: '40px' }}/></Link></li>
          <li><Link to="/employees"><PeopleIcon sx={{ color: '#0011ff', fontSize: '40px' }}/></Link></li>
          <li><Link to="/profile"><AccountBoxIcon sx={{ color: '#0011ff', fontSize: '40px' }}/></Link></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
