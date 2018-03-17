import React, { Component } from 'react';
import ProgressiveImage from 'react-progressive-image';

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
      this.autoFlickInterval = setInterval(this.moveToNextImage, 3000);
    }
  }

  componentWillUnmount() {
    if (this.autoFlickInterval) {
      clearInterval(this.autoFlickInterval);
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
    if (showArrows && side === 'left') {
      this.moveToPrevImage();
    } else {
      this.moveToNextImage();
    }
    document.getSelection().removeAllRanges();
  }

  handleMouseMove(event) {
    const { clientX } = event;
    const midpoint = this.imageContainer.clientWidth / 2;
    this.setState({ side: clientX < midpoint ? 'left' : 'right' });
  }

  render() {
    const { collectionInformation, showArrows } = this.props;
    const { index, side } = this.state;
    return (
      <div className="photo-container">
        <div
          className="image-container"
          ref={node => (this.imageContainer = node)}
          onClick={this.handleClick}
          onMouseMove={this.handleMouseMove}
          style={{ cursor: `url("${side}.png"), auto` }}
        >
          <ProgressiveImage src={this.photos[index].path} placeholder={this.photos[index].placeholder}>
            {src => <img style={{ height: 450 }} src={src} alt={this.photos[index].path} />}
          </ProgressiveImage>
        </div>
        <div className="photo-overlay">
          <div className="photo-description">
            <b>{collectionInformation.title}</b>
            <br />
            <i>{collectionInformation.description}</i>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
