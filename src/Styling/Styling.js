import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import collections from './collections';
import Slideshow from '../Slideshow';

export default class Styling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillRecieveProps(nextProps) {
    if (nextProps.match !== this.props.match) {
      this.setState({ seenDescription: false, seenTitle: false });
    }
  }

  render() {
    const { match } = this.props;
    const { seenDescription, seenTitle } = this.state;
    const selectedTitle = match.params.collectionTitle;
    return (
      <div className={classnames('styling', { 'styling--fullscreen': selectedTitle })}>
        {selectedTitle && (
          <div className="styling__header">
            <Link to="/overview"><img src="/cancel.png" height={60} /></Link>
          </div>
        )}
        <div className="styling__content">
          {collections.filter(c => c.title === selectedTitle).map(collection => {
            return (
              <Slideshow
                key={collection.title}
                collectionInformation={collection}
                showArrows
                showTitle={index => {
                  // if (seenTitle) {
                  //   return;
                  // } else if (index === 0) {
                  //   this.setState({ seenTitle: true });
                  // }                  
                  return index === 0;
                }}
                showDescription={index => {
                  // if (seenDescription) {
                  //   return;
                  // } else if (index === 0) {
                  //   this.setState({ seenDescription: true });
                  // }
                  return index === 0;
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
