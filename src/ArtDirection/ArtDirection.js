import React from 'react';
import collections from './collections';
import Slideshow from '../Slideshow';
import FlickType from '../FlickType';

function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Styling = () => {
  return (
    <div className="body">
      <div style={{ paddingTop: 220 }}>
        {collections.map(collection => {
          return (
            <div style={{ width: '100%', paddingTop: 55 }}>
              <Slideshow
                jump={false}
                collectionInformation={collection}
                autoFlick={FlickType.EVEN}
                showTitle={false}
                showDescription={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Styling;

// 1744 × 1304
