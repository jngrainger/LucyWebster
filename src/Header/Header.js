import React from 'react';
import { Link, Route } from 'react-router-dom';
import { StylingHeader } from '../Styling';

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="overview">
          <img src="/logo.png" height={135} alt="logo" />
        </Link>
      </div>
      <div className="menu-bar">
        <Link to="/styling" activeClassName="active">styling</Link>
        <Link to="/art-direction" activeClassName="active">art direction</Link>
        <Link to="/info" activeClassName="active">info</Link>
      </div>
      <Route path="/styling" component={StylingHeader} />
    </div>
  );
};

export default Header;
