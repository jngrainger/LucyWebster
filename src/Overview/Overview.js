import React from 'react';
import chunk from 'lodash/chunk';
import collections from './collections';
import Slideshow from '../Slideshow';
import FlickType from '../FlickType';

export default class Overview extends React.Component {
  
  render() {
    return chunk(collections, 2).map(pair => (
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'stretch' }}>
        {pair[0] && (
          <div style={{ width: '50%', minWidth: 350 }}>
            <Slideshow
              collectionInformation={pair[0]}
              numberInRotation={3}
              autoFlick={FlickType.EVEN}
              showTitle={false}
              showDescription={false}
            />
          </div>
        )}
        {pair[1] && (
          <div style={{ width: '50%', alignSelf: 'flex-end' }}>
            <Slideshow
              collectionInformation={pair[1]}
              numberInRotation={3}
              autoFlick={FlickType.ODD}
              showTitle={false}
              showDescription={false}
            />
          </div>
        )}
      </div>
    ));
  }
}
