import React from 'react';
import collections from './collections';
import Slideshow from '../Slideshow';

const Overview = () => {
  return (
    <div>
      {collections.map(c => <Slideshow collectionInformation={c} numberInRotation={3} />)}
    </div>
  );
};

export default Overview;
