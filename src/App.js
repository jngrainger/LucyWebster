import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
// import Info from './Info';
import Styling, { StylingHeader } from './Styling';
import Overview from './Overview';
import ArtDirection from './ArtDirection';

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <Header />
      <Switch>
        <Route path="/art-direction" component={ArtDirection} />
        <Route path="/styling/:collectionTitle?" component={Styling} />
        {/* <Route path="/info" component={Info} /> */}
        <Route path="*" component={Overview} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
