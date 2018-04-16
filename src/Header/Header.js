import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import { StylingHeader } from '../Styling';

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/overview">
          <img src="/logo.png" height={135} alt="logo" />
        </Link>
      </div>
      <div className="menu-bar">
        <NavLink to="/styling" activeClassName="active">styling</NavLink>
        <NavLink to="/art-direction" activeClassName="active">art direction</NavLink>
        {/* <NavLink to="/info" activeClassName="active">info</NavLink> */}
      </div>
      <Route path="/styling" exact component={StylingHeader} />
    </div>
  );
};

export default Header;
