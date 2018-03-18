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
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          backgroundImage: 'url("/showcase.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          width: '100%',
          height: 800,
          transform: 'translateX(-50%)',
        }}
      />
    </div>
  );
};

export default Styling;

// 1744 × 1304
