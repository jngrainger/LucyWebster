import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className="navigation-container">
      <div>
        <Link to="overview">
          <img src="/logo.png" width="250" alt="logo" />
        </Link>
      </div>
      <div className="menu-bar">
        <Link to="/styling">styling</Link>
        <Link to="/art-direction">art direction</Link>
        <Link to="/info">info</Link>
      </div>
    </div>
  );
};

export default NavigationBar;
