import React, { Component } from 'react';
import classnames from 'classnames';
import isFunction from 'lodash/isFunction';
import ProgressiveImage from 'react-progressive-image';
import FlickType from '../FlickType';

// If the first argument is a callback we invoke with the rest of the calling arguments, otherwise we just return the first argument.
const safeCall = (value, ...rest) => (isFunction(value) ? value(...rest) : value);

class Slideshow extends Component {
  constructor(props) {
    super(props);
    const numberInRotation = Number.isFinite(props.numberInRotation)
      ? props.numberInRotation
      : props.collectionInformation.photos.length;
    this.state = { index: 0, numberInRotation };
    this.photos = props.collectionInformation.photos.slice(0, numberInRotation);
    this.handleClick = this.handleClick.bind(this);
    this.moveToNextImage = this.moveToNextImage.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    if (this.props.autoFlick) {
      if (this.props.autoFlick === FlickType.EVEN) {
        this.autoFlickTimeout = setTimeout(
          () => (this.autoFlickInterval = setInterval(this.moveToNextImage, 1300)),
          800
        );
      } else {
        this.autoFlickInterval = setInterval(this.moveToNextImage, 1300);
      }
    }
  }

  componentWillUnmount() {
    if (this.autoFlickInterval) {
      clearInterval(this.autoFlickInterval);
    }
    if (this.autoFlickTimeout) {
      clearTimeout(this.autoFlickTimeout);
    }
  }

  moveToPrevImage() {
    if (this.state.index > 0)
      this.setState({
        index: this.state.index - 1,
      });
    else {
      this.setState({
        index: this.state.numberInRotation - 1,
      });
    }
  }

  moveToNextImage() {
    if (this.state.index < this.state.numberInRotation - 1)
      this.setState({
        index: this.state.index + 1,
      });
    else {
      this.setState({
        index: 0,
      });
    }
  }

  handleClick(event) {
    const { showArrows } = this.props;
    const { side } = this.state;
    const { clientX } = event;
    if (showArrows && side === 'back') {
      this.moveToPrevImage();
    } else {
      this.moveToNextImage();
    }
  }

  handleMouseMove(event) {
    const { clientX } = event;
    const midpoint = this.imageContainer.clientWidth / 2;
    this.setState({ side: clientX < midpoint ? 'back' : 'next' });
  }

  render() {
    const { collectionInformation, autoFlick, showArrows, jump, showTitle = true, showDescription = true } = this.props;
    const { index, side, over } = this.state;
    return (
      <div
        ref={element => (this.element = element)}
        className="photo-container"
        style={{ position: 'relative', left: over ? (autoFlick === FlickType.EVEN ? 50 : -50) : 0 }}
        onMouseEnter={jump ? () => this.setState({ over: true }) : null}
        onMouseLeave={jump ? () => this.setState({ over: false }) : null}
      >
        <div
          className="image-container"
          ref={node => (this.imageContainer = node)}
          onClick={this.handleClick}
          onMouseMove={this.handleMouseMove}
          style={showArrows ? { cursor: `url("/${side}.png"), auto` } : {}}
        >
          <ProgressiveImage src={this.photos[index].path} placeholder={this.photos[index].placeholder}>
            {src => (
              <img
                style={{ height: showArrows ? 'calc(100vh - 600px)' : 500, userSelect: 'none' }}
                src={src}
                alt={this.photos[index].path}
              />
            )}
          </ProgressiveImage>
        </div>
        <div className="photo-overlay">
          <div className={classnames('photo-description--primary', { hidden: !safeCall(showTitle, index) })}>
            {collectionInformation.title}
          </div>
          <div className={classnames('photo-description--secondary', { hidden: !safeCall(showDescription, index) })}>
            {collectionInformation.description}
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
