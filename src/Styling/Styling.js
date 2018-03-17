import React from 'react';
import collections from './collections';
import Slideshow from '../Slideshow';

export default class Styling extends React.Component {
  render() {
    const { match } = this.props;
    const selectedTitle = match.params.collectionTitle;
    return (
      <div>
        {collections.filter(c => !selectedTitle || c.title === selectedTitle).map(collection => {
          return <Slideshow key={collection.title} collectionInformation={collection} showArrows />;
        })}
      </div>
    );
  }
}
