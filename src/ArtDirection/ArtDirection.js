import React from 'react';
import collections from './collections';
import Slideshow from '../Slideshow';

function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Styling = () => {
  return (
    <div style={{ position: 'relative', padding: 20 }}>
      {collections.map(collection => {
        return (
          <div style={{ width: '100%', paddingTop: 55 }}>
            <Slideshow key={collection.title} collectionInformation={collection} autoFlick />
          </div>
        );
      })}
      <img
        src="/showcase.png"
        height={800}
        alt="computer screen showing the content on its screen"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
    </div>
  );
};

export default Styling;

// 1744 × 1304
