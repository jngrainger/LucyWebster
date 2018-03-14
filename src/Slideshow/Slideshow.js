import React, { Component } from 'react';
import ProgressiveImage from 'react-progressive-image';

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.photos = props.collectionInformation.photos.slice(0, props.numberInRotation);
    this.moveToNextImage = this.moveToNextImage.bind(this);
  }

  moveToNextImage() {
    if (this.state.index < this.props.numberInRotation - 1)
      this.setState({
        index: this.state.index + 1,
      });
    else {
      this.setState({
        index: 0,
      });
    }
  }

  render() {
    const { index } = this.state;
    return (
      <div className="photo-container" onClick={this.moveToNextImage}>
        <ProgressiveImage src={this.photos[index].path} placeholder={this.photos[index].placeholder}>
          {src => <img style={{ height: 450 }} src={src} alt={this.photos[index].path} />}
        </ProgressiveImage>
        <div className="photo-overlay">
          <div className="photo-description">
            <b>{this.props.collectionInformation.title}</b>
            <br />
            <i>{this.props.collectionInformation.description}</i>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
