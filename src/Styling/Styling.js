import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import collections from './collections';
import Slideshow from '../Slideshow';

export default class Styling extends React.Component {
  render() {
    const { match } = this.props;
    const selectedTitle = match.params.collectionTitle;
    return (
      <div className={classnames('styling', { 'styling--fullscreen': selectedTitle })}>
        {selectedTitle && (
          <div className="styling__header">
            <Link to="/styling">x</Link>
          </div>
        )}
        <div className="styling__content">
          {collections.filter(c => c.title === selectedTitle).map(collection => {
            return <Slideshow key={collection.title} collectionInformation={collection} showArrows />;
          })}
        </div>
      </div>
    );
  }
}
