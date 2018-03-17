import React from 'react';
import { Link } from 'react-router-dom';
import stylingCollections from '../Styling/collections';

const StylingHeader = () => (
  <div className="sub-menu-bar">
    {stylingCollections.map(c => (
      <div>
        <Link to={`/styling/${c.title}`}>{c.title}</Link>
      </div>
    ))}
  </div>
);

export default StylingHeader;
