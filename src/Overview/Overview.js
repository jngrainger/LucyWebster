import React from 'react';
import chunk from 'lodash/chunk';
import flatten from 'lodash/flatten';
import collections from './collections';
import Slideshow from '../Slideshow';
import FlickType from '../FlickType';

export default class Overview extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.bodyElement.scrollTop = localStorage.getItem('overviewScrollTop');
  }

  componentDidUpdate(prevProps, prevState) {
    const { scrollTop = 0 } = this.state;
    if (prevState.scrollTop !== scrollTop) {
      // Does the virtual dom do this?
      localStorage.setItem('overviewScrollTop', scrollTop);
      this.bodyElement.scrollTop = scrollTop;
    }
  }

  render() {
    return (
      <div
        className="body"
        ref={element => (this.bodyElement = element)}
        onScroll={event => {
          this.setState({ scrollTop: event.target.scrollTop });
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
            paddingTop: 240,
          }}
        >
          {flatten(
            chunk(collections, 2).map(pair => [
              pair[0] ? (
                <div style={{ flex: '50% 0', minWidth: 150 }}>
                  <Slideshow
                    jump={false}
                    collectionInformation={pair[0]}
                    numberInRotation={3}
                    autoFlick={FlickType.EVEN}
                    showTitle={false}
                    showDescription={false}
                    clickToCollection
                  />
                </div>
              ) : null,
              pair[1] ? (
                <div style={{ flex: '50% 0', alignSelf: 'flex-end', position: 'relative', top: -220 }}>
                  <Slideshow
                    jump={false}
                    collectionInformation={pair[1]}
                    numberInRotation={3}
                    autoFlick={FlickType.ODD}
                    showTitle={false}
                    showDescription={false}
                    clickToCollection
                  />
                </div>
              ) : null,
            ])
          )}
        </div>
      </div>
    );
  }
}
