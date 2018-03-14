import React from 'react';
import { Link, Route } from 'react-router-dom';
import stylingCollections from '../Styling/collections';

const NavigationBar = () => {
  return (
    <div className="overview-container">
      <Link to="overview">
        <img src="/logo.png" width="250" alt="logo" />
      </Link>
      <div className="menu-bar">
        <Link to="/styling">
          <span>styling</span>
        </Link>
        <Link to="/art-direction">
          <span>art direction</span>
        </Link>
        <Link to="/info">
          <span>info</span>
        </Link>
      </div>
      <Route
        path="/styling"
        render={() => (
          <div className="menu-bar">
            {stylingCollections.map(c => <Link to={`/styling/${c.title}`}>{c.title}</Link>)}
          </div>
        )}
      />
      <Route
        path="/info"
        render={() => (
          <div className="sub-menu-bar">
            <span>still life/ texture stylist - london - </span>
            <a href="mailto:hello@lucy.webster.co.uk">hello@lucy.webster.co.uk</a>
            <span> - </span>
            <a href="">lucywebster</a>
            <span> - </span>
            <a href="tel:+44 7841 779106">+44 7841 779106</a>
          </div>
        )}
      />
    </div>
  );
};

export default NavigationBar;
