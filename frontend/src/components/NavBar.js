import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/interactions">Check Interactions</Link></li>
        <li><Link to="/medication-info">Check Medication Info</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;