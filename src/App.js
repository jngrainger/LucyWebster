import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Info from './Info';
import Styling, { StylingHeader } from './Styling';
import Overview from './Overview';
import ArtDirection from './ArtDirection';

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <NavigationBar />
      <Route path="/styling" component={StylingHeader} />
      <Switch>
        <Route path="/art-direction" component={ArtDirection} />
        <Route path="/styling/:collectionTitle?" component={Styling} />
        <Route path="/info" component={Info} />
        <Route path="*" component={Overview} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
