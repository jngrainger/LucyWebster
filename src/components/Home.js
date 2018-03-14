import React from 'react';
import allCollections from '../collection-data';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'styling',
    };
  }

  render() {
    const { activePage } = this.state;
    return (
      <div>
        <img src="/logo.png" width="600" alt="logo-large" />
        <div>
          <button role="button" onClick={() => this.setState({ activePage: 'styling' })}>
            styling
          </button>
          <Link to="/art-direction">art direction</Link>
          <button role="button" onClick={() => this.setState({ activePage: 'info' })}>
            info
          </button>
        </div>
        {activePage === 'styling' && <div>{allCollections.map(c => <div>{c.title}</div>)}</div>}
        {activePage === 'info' && <div>still life/ texture stylist - london - hello@lucy.webster.co.uk - lucywebster - +44 7841 779106</div>}
      </div>
    );
  }
}
