import React from 'react';
import collections from './collections';
import Slideshow from '../Slideshow';

function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Styling = () => {
  return (
    <div>
      {collections.map(collection => {
        return <Slideshow key={collection.title} collectionInformation={collection} autoFlick />;
      })}
    </div>
  );
};

export default Styling;
