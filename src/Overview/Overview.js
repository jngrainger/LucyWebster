import React from 'react';
import chunk from 'lodash/chunk';
import flatten from 'lodash/flatten';
import collections from './collections';
import Slideshow from '../Slideshow';
import FlickType from '../FlickType';

export default class Overview extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          flexWrap: 'wrap',
          paddingTop: 240,
          justifyContent: 'stretch',
        }}
      >
        {flatten(
          chunk(collections, 2).map(pair => [
            pair[0] ? (
              <div style={{ flex: '1 1 50%', minWidth: 150 }}>
                <Slideshow
                  jump
                  collectionInformation={pair[0]}
                  numberInRotation={3}
                  autoFlick={FlickType.EVEN}
                  showTitle={false}
                  showDescription={false}
                />
              </div>
            ) : null,
            pair[1] ? (
              <div style={{ flex: '1 1 50%', alignSelf: 'flex-end', paddingTop: 360 }}>
                <Slideshow
                  jump
                  collectionInformation={pair[1]}
                  numberInRotation={3}
                  autoFlick={FlickType.ODD}
                  showTitle={false}
                  showDescription={false}
                />
              </div>
            ) : null,
          ])
        )}
      </div>
    );
  }
}
