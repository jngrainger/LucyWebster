import React from 'react';
import { NavLink } from 'react-router-dom';
import stylingCollections from '../Styling/collections';

const StylingHeader = () => (
  <div className="sub-menu-bar">
    {stylingCollections.map(c => (
      <div>
        <NavLink to={`/styling/${c.title}`} activeClassName="active">
          {c.title}
        </NavLink>
      </div>
    ))}
  </div>
);

export default StylingHeader;
