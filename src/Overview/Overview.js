import React from 'react';
import * as basicScroll from 'basicscroll'
import collections from './collections';
import Slideshow from '../Slideshow';

export default class Overview extends React.Component {
  // componentDidMount() {
  //   this.instance = basicScroll.create({
  //     elem: this.elem,
  //     from: 'top-bottom',
  //     to: 'bottom-top',
  //     props: {
  //       '--translateX': {
  //         from: '0',
  //         to: '100%',
  //         timing: 'elasticOut'
  //       }
  //     }
  //   });
  //   this.instance.start();
  // }
  // componentDidUpdate() {
  //   this.instance.update();
  // }
  // componentWillUnmount() {
  //   this.instance.destroy();
  // }
  render() {
    return (
      <div style={{ flex: '1 1 auto', overflow: 'auto' }} ref={node => (this.elem = node)}>
        {collections.map(c => (
          <div className="collection">
            <Slideshow collectionInformation={c} numberInRotation={3} showTitle={false} showDescription={false} />
          </div>
        ))}
      </div>
    );
  }
}
